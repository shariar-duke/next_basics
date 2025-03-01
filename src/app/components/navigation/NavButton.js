"use client";

import { useRouter } from "next/navigation";

export default function NavButton() {
  const router = useRouter();

  const handleNavigation = () => {
    // Replace '/dashboard' with the desired route you want to navigate to
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleNavigation}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
