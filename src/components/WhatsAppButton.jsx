import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "8080195558"; // Replace with your number
  const message = encodeURIComponent("Hi! I want to know more about BK Sports Academy.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 animate-float"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48a11.93 11.93 0 0 0-17 0c-4.7 4.7-4.91 12.19-.48 16.88L2 22l2.63-1.39a12 12 0 0 0 16.89-17zm-2.38 14.29c-1.1 1.1-2.53 1.91-4.06 2.36-.79.23-1.66.35-2.53.35a10.03 10.03 0 0 1-5.65-1.76l-.4-.26-3.35.9.9-3.3-.28-.43a10.07 10.07 0 0 1 1.76-12.77 10.03 10.03 0 0 1 14.08 0c3.9 3.9 3.91 10.21.03 14.06z"/>
        <path d="M16.17 13.27c-.2-.1-1.18-.58-1.36-.65s-.31-.1-.44.1-.51.65-.63.78c-.12.12-.25.14-.46.05s-.9-.33-1.71-1.04c-.63-.56-1.05-1.25-1.17-1.38-.12-.12-.01-.19.09-.29.1-.1.24-.26.36-.39.12-.12.16-.2.25-.33.08-.12.04-.23-.02-.33-.07-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34l-.38-.01c-.12 0-.32.04-.49.23s-.64.63-.64 1.54.66 1.78.75 1.9c.1.12 1.29 1.97 3.14 2.77.44.19.78.3 1.05.38.44.14.84.12 1.15.07.35-.06 1.1-.45 1.26-.88.16-.42.16-.78.12-.87-.05-.1-.19-.16-.39-.26z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
