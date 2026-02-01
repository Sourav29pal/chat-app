import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  if (!selectedConversation) return null;

  const isOnline = onlineUsers.includes(selectedConversation._id);

  return (
    <div className="h-full px-4 flex items-center gap-3 bg-slate-800">
      <div className="relative">
        <img
          src="/user.jpg"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        {isOnline && (
          <span className="
            absolute bottom-0 right-0
            w-2.5 h-2.5
            bg-green-500
            border-2 border-slate-800
            rounded-full
          " />
        )}
      </div>

      <div>
        <p className="text-white font-medium">
          {selectedConversation.fullname}
        </p>
        <span className="text-xs text-gray-400">
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;
