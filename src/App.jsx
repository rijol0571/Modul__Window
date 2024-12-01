import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Modal from "./components/Modal";
import Skeleton from "./components/YoutubeLoading";
import AOS from 'aos';
import 'aos/dist/aos.css';  // AOS kutubxonasining stilini import qilish

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    // AOS kutubxonasini faollashtirish
    AOS.init({
      duration: 1000,  // Animatsiya davomiyligi
      easing: 'ease-out',  // Animatsiya tezligi
      once: true,  // Faqat bir marta animatsiya qilish
    });
  }, []);

  return (
    <>
      <Header
        onSignInClick={() => setShowSignIn(true)}
        onSignUpClick={() => setShowSignUp(true)}
      />
      <Products />

      <ToastContainer />

      {/* Sign In Modal */}
      {showSignIn && (
        <Modal close={() => setShowSignIn(false)}>
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            data-aos="flip-left"  // Animatsiyani qo'shish
          >
            <h2 className="text-2xl font-bold mb-4">Sign in to DolphinApp</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Your Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Your Password</label>
                <input type="password" className="w-full p-2 border rounded" placeholder="password:" required/>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Login
              </button>
            </form>
            <button onClick={() => setShowSignIn(false)}
              className="mt-4 w-full text-center text-red-500 hover:underline">Close</button>
          </div>
        </Modal>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <Modal close={() => setShowSignUp(false)}>
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            data-aos="flip-left"  // Animatsiyani qo'shish
          >
            <h2 className="text-2xl font-bold mb-4">Create a New Account</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Your Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Your Password</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="Password: "
                  required
                />
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Sign Up
              </button>
            </form>
            <button
              onClick={() => setShowSignUp(false)}
              className="mt-4 w-full text-center text-red-500 hover:underline"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default App;
