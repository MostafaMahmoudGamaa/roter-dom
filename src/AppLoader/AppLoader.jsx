import React from "react";

export default function AppLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-9">
      <h1>Loading App...</h1>

      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>

    </div>
  );
}
