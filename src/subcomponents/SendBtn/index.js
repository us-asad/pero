import React from 'react'
import { useTranslation } from 'react-i18next';
import "./index.scss"

export default function SendBtn() {
  const [t] = useTranslation();

  return (
    <button className="button send-btn">
      <span className="default">{t("contact.send")}</span>
      <span className="success">
        <svg viewBox="0 0 16 16">
          <polyline points="3.75 9 7 12 13 5"></polyline>
        </svg>{t("contact.sent")}
      </span>
      <svg className="trails" viewBox="0 0 33 64">
        <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
        <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
      </svg>
      <div className="plane">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </button>
  );
}
