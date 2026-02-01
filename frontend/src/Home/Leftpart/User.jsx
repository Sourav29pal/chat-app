import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      onClick={() => setSelectedConversation(user)}
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer
        transition duration-200
        hover:bg-slate-700
        ${isSelected ? "bg-slate-700" : ""}`}
    >
      {/* Avatar */}
      <div className="relative">
        <img
          src="/user.jpg"
          alt="user"
          className="w-11 h-11 rounded-full object-cover"
        />
        {isOnline && (
          <span
            className="absolute bottom-0 right-0 w-3 h-3 
                       bg-green-500 border-2 border-slate-900 rounded-full"
          />
        )}
      </div>

      {/* User Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-200 truncate">
          {user.fullname}
        </p>
        <p className="text-sm text-gray-400 truncate">
          {user.email}
        </p>
      </div>
    </div>
  );
}

export default User;
