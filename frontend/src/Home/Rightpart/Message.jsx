import React from "react";
import { IoCheckmark, IoCheckmarkDone } from "react-icons/io5";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser?.user?._id;

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const isDelivered = message.delivered;

  return (
    <div className={`flex ${itsMe ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`relative max-w-[60%] px-4 py-2 rounded-xl text-sm
          ${
            itsMe
              ? "bg-green-500 text-white rounded-br-none"
              : "bg-slate-700 text-gray-200 rounded-bl-none"
          }`}
      >
        <p>{message.message}</p>

        <div className="flex items-center justify-end gap-1 mt-1 text-[11px] opacity-80">
          <span>{formattedTime}</span>
          {itsMe &&
            (isDelivered ? (
              <IoCheckmarkDone className="text-blue-200" />
            ) : (
              <IoCheckmark />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Message;
