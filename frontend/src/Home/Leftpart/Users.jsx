import React from "react";


import useGetAllUsers from "../../context/useGetAllUser";

import User from "../../Home/Leftpart/User";
// import User from "./User";

function Users() {
  const [allUsers, loading] = useGetAllUsers();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase">
        Messages
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto">
        {loading && (
          <p className="text-center text-gray-500 text-sm mt-4">
            Loading chats...
          </p>
        )}

        {!loading && allUsers.length === 0 && (
          <p className="text-center text-gray-500 text-sm mt-4">
            No users found
          </p>
        )}

        {!loading &&
          allUsers.map((user) => (
            <User key={user._id} user={user} />
          ))}
      </div>
    </div>
  );
}

export default Users;
