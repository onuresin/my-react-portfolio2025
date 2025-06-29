import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactModal({ open, onClose }) {
  const { t } = useTranslation();
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
          <div className="form-success">{t("contact.success")}</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>{t("contact.title")}</h2>
            <label>
              {t("contact.name")}
              <input name="name" required />
            </label>
            <label>
              {t("contact.email")}
              <input name="email" type="email" required />
            </label>
            <label>
              {t("contact.message")}
              <textarea name="message" rows={5} required />
            </label>
            <button
              type="submit"
              className="form-send-btn"
              disabled={loading}
            >
              {loading ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
