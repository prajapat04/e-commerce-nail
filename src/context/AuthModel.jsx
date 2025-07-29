import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AuthModal = ({ onClose }) => {
  const { login, signup } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isSignup) {
        await signup(form);
      } else {
        await login(form);
      }
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-sm mx-6"
      >
        <h2 className="text-xl font-semibold mb-4">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {isSignup && (
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-3 border px-3 py-2 rounded"
            required
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 border px-3 py-2 rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-3 border px-3 py-2 rounded"
          required
        />

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p className="text-center text-sm mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            className="text-pink-600 underline"
            onClick={() => {
              setError("");
              setIsSignup(!isSignup);
            }}
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>

        <button
          onClick={onClose}
          type="button"
          className="block text-center mt-3 text-gray-600 text-sm underline w-full"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AuthModal;
