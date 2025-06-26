import { useState } from "react";

export default function ContactModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mldnoqby", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);
    setSent(true);
    form.reset();
  };
    
    return (
        <div className="modal-overlay" onClick={onClose}>
      <div className="modal-glass" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        {sent ? (
          <div className="form-success">Teşekkürler! Mesajın ulaştı. 🎉</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>İletişim</h2>
            <label>
              Adın
              <input name="name" required />
            </label>
            <label>
              E-posta
              <input name="email" type="email" required />
            </label>
            <label>
              Mesaj
              <textarea name="message" rows={5} required />
            </label>
            <button
              type="submit"
              className="form-send-btn"
              disabled={loading}
            >
              {loading ? "Gönderiliyor..." : "Gönder"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}