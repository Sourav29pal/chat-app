import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="h-full flex flex-col bg-slate-900 text-gray-200 border-r border-slate-700">
      
      {/* Search */}
      <div className="h-[64px] flex items-center px-4 border-b border-slate-700">
        <Search />
      </div>

      {/* Users */}
      <div className="flex-1 overflow-y-auto">
        <Users />
      </div>

      {/* Footer */}
      <div className="h-[64px] flex items-center px-4 border-t border-slate-700">
        <Logout />
      </div>
    </div>
  );
}

export default Left;
