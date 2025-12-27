import React from "react";

const ProfilePage = () => {
  // Static user data for demo
  const user = {
    name: "Lakshya pratap shekhawat",
    email: "lakshyapratap@shekhawat@email.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Admin",
    joined: "2024-01-15",
    bio: "Passionate about technology, security, and building helpful solutions. Loves to travel and explore new places.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full opacity-30 z-0"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full opacity-20 z-0"></div>
        {/* Profile Content */}
        <div className="relative z-10 flex flex-col items-center">
          <img
            src={user.avatar}
            alt="User avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-200 shadow-lg mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
          <span className="text-blue-600 font-medium text-sm bg-blue-100 px-3 py-1 rounded-full mb-2">
            {user.role}
          </span>
          <p className="text-gray-500 text-sm mb-4">{user.email}</p>
          <p className="text-gray-700 text-center mb-6">{user.bio}</p>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                d="M7 11V7a5 5 0 0110 0v4M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              Joined{" "}
              {new Date(user.joined).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;