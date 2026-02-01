import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUser";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className="
          flex items-center gap-3
          px-4 py-2
          rounded-full
          bg-slate-800
          border border-slate-700
          focus-within:border-green-500
          focus-within:ring-1
          focus-within:ring-green-500
          transition
        "
      >
        <FaSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Search chats..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            flex-1
            bg-transparent
            outline-none
            text-gray-200
            placeholder-gray-400
          "
        />
      </div>
    </form>
  );
}

export default Search;
