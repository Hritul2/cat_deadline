// LoginPage Component
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { authState } from "../recoil_store/store";
import { envs } from "../utils/my_envs";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useRecoilState(authState);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedPasswordHash = envs.password_hash;
    if (!storedPasswordHash) {
      setError("Password hash is not set.");
      return;
    }

    bcrypt.compare(password, storedPasswordHash, (err, result) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        setError("An error occurred.");
        return;
      }
      if (result) {
        setLoggedIn("true");
        localStorage.setItem("loggedIn", "true");
        setError("");
        navigate("/");
      } else {
        setError("Incorrect password.");
      }
    });
  };

  if (loggedIn === "true") {
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
