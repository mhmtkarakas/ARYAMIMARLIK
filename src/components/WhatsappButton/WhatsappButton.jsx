import React from 'react'
import "./WhatsappButton.css"

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/905301785979?text=Merhaba!%20Bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  )
}

export default WhatsappButton