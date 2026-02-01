import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../zustand/useConversation";
import { useAuth } from "../../context/AuthProvider";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="h-full flex flex-col bg-slate-900">

      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* HEADER — SAME HEIGHT & BORDER AS LEFT */}
          <div className="h-[64px] border-b border-slate-700">
            <Chatuser />
          </div>

          {/* MESSAGES */}
          <div className="
            flex-1 overflow-y-auto px-4 py-6
            bg-gradient-to-b
            from-slate-900
            via-slate-800
            to-slate-900
          ">
            <Messages />
          </div>

          {/* INPUT */}
          <div className="h-[64px] px-4 flex items-center bg-slate-900">
            <Typesend />
          </div>
        </>
      )}
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();

  return (
    <div className="flex-1 flex items-center justify-center text-center">
      <h1 className="text-gray-400">
        👋 Welcome{" "}
        <span className="text-white font-semibold">
          {authUser.user.fullname}
        </span>
        <br />
        <span className="text-sm opacity-70">
          Select a contact to start chatting
        </span>
      </h1>
    </div>
  );
};
