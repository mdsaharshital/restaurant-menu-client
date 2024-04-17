import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl px-6 py-12 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Welcome to <span className="text-blue-500">QR TO MENU</span>
          </h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            At QR TO MENU, we&apos;re revolutionizing the way restaurants
            connect with their customers. Say goodbye to outdated paper menus
            and hello to the future of dining.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-blue-100 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Why Choose QR TO MENU?
              </h2>
              <ul className="text-lg text-gray-700">
                <li className="mb-2">Effortless Menu Access</li>
                <li className="mb-2">Dynamic Menu Updates</li>
                <li className="mb-2">Enhanced Customer Experience</li>
                <li className="mb-2">Boosted Visibility</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-100 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Join QR TO MENU today and take your restaurant to new heights.
                Sign up now to unlock a world of possibilities for your
                business.
              </p>
              <Link
                href="/signup"
                className="block text-center text-blue-500 font-semibold hover:underline"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
