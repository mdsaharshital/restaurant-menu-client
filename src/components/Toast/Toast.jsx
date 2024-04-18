import { useState } from "react";

export default function Toast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="fixed bottom-0 right-0 p-4">
      {showToast && (
        <div className="bg-gray-900 text-white rounded-lg p-4 shadow-lg">
          This is a toast message.
        </div>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        onClick={() => setShowToast(!showToast)}
      >
        {showToast ? "Hide Toast" : "Show Toast"}
      </button>
    </div>
  );
}
