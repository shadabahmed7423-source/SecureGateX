import React from "react";

const Loader = () => (
  <div className="flex flex-col items-center justify-center min-h-40">
    <div className="flex gap-2 mb-3">
      <span className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 animate-bounce [animation-delay:0s]"></span>
      <span className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 animate-bounce [animation-delay:0.2s]"></span>
      <span className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 animate-bounce [animation-delay:0.4s]"></span>
      <span className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 animate-bounce [animation-delay:0.6s]"></span>
    </div>
    <span className="text-blue-600 font-medium tracking-wide text-lg">Loading...</span>
  </div>
);

export default Loader;