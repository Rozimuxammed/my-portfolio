import React, { useState } from "react";

const TELEGRAM_BOT_TOKEN = "7631051192:AAFOIQ8PPDCWTBTEkd-WOdFthvcJwmoewcE";
const TELEGRAM_CHAT_ID = "1659382798";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998 ",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPhoneNumber = (value) => {
    let numbers = value.replace(/\D/g, "");
    if (!numbers.startsWith("998")) {
      numbers = "998" + numbers;
    }
    if (numbers.length > 12) {
      numbers = numbers.slice(0, 12);
    }

    let formatted = "+998 ";
    if (numbers.length > 3) formatted += numbers.slice(3, 5) + " ";
    if (numbers.length > 5) formatted += numbers.slice(5, 8) + " ";
    if (numbers.length > 8) formatted += numbers.slice(8, 10) + " ";
    if (numbers.length > 10) formatted += numbers.slice(10, 12);

    return formatted.trim();
  };

  const handlePhoneChange = (e) => {
    setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) });
  };

  const sendToTelegram = async (data) => {
    const text = `📩 *Yangi Xabar!*\n\n👤 *Ism:* ${data.name}\n📞 *Telefon:* ${data.phone}\n📝 *Xabar:* ${data.message}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text, parse_mode: "Markdown" }),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendToTelegram(formData);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "+998 ", message: "" });
  };

  return (
    <div className="w-screen max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Contact Me</h2>
      {isSubmitted ? (
        <p className="text-green-500">Xabar muvaffaqiyatli yuborildi! ✅</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Ism</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-2 border rounded text-slate-900"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Telefon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              placeholder="+998 XX XXX XX XX"
              inputMode="numeric"
              pattern="\+998 [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}"
              className="w-full p-2 border rounded text-slate-900"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Xabar</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full p-2 border rounded text-slate-900"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
            Yuborish
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;