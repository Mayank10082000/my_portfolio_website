// src/components/FeedbackButton.jsx
import React, { useState } from "react";
import { FaComments } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm("moveazoz"); // Use your form ID here

  const toggleFeedback = () => {
    setIsOpen(!isOpen);
  };

  // Handle form submission with toast
  const onSubmit = async (e) => {
    e.preventDefault();

    toast.promise(
      handleSubmit(e), // This returns a promise
      {
        loading: "Submitting your feedback...",
        success: "Thank you for your feedback!",
        error: "Something went wrong. Please try again.",
      }
    );
  };

  // Additional effect to close the form after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      setIsOpen(false);
    }
  }, [state.succeeded]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Button with text and icon */}
      <button
        onClick={toggleFeedback}
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-2 px-4 flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105"
        aria-label="Provide feedback"
      >
        <FaComments size={20} />
        <span className="font-medium">Feedback</span>
      </button>

      {/* Feedback form popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl p-4 border border-gray-200 transition-all duration-300">
          <form onSubmit={onSubmit}>
            <h3 className="text-lg font-semibold mb-3">Any Feedback?</h3>

            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Feedback
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={toggleFeedback}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={state.submitting}
                className="px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 disabled:opacity-50"
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toaster for notifications */}
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#4ade80",
              secondary: "#fff",
            },
          },
        }}
      />
    </div>
  );
};

export default FeedbackButton;
