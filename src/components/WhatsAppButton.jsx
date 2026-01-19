import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "918080195558";
  const message = encodeURIComponent(
    "Hi! I want to know more about BK Sports Academy."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 z-50
                 w-16 h-16 flex items-center justify-center
                 rounded-full shadow-xl
                 hover:scale-110
                 transition-all duration-300"
    >
      <img
        src="/assets/images/whatsaapicon.png"
        alt="WhatsApp"
        className="w-full h-full rounded-full"
      />
    </a>
  );
};

export default WhatsAppButton;
