import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center gap-3">
        {/* INPUT */}
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="
            flex-1
            px-5 py-3
            rounded-full
            bg-slate-700
            text-white
            placeholder:text-gray-400
            outline-none
            focus:ring-2 focus:ring-green-500
          "
        />

        {/* SEND BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-11 h-11
            flex items-center justify-center
            rounded-full
            bg-green-500
            hover:bg-green-600
            transition
            disabled:opacity-50
          "
        >
          <IoSend className="text-white text-xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
