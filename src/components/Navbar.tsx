// Navbar Component
import { useRecoilState } from "recoil";
import { authState } from "../recoil_store/store";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useRecoilState(authState);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn("false");
    localStorage.setItem("loggedIn", "false");
    navigate("/login");
  };

  return (
    <div className="bg-gray-900 flex justify-between items-center px-12 py-4 sticky top-0 z-50">
      <div className="text-red-500 text-3xl font-bold">Hritul</div>
      <div className="flex justify-between items-center gap-4">
        <div className="text-red-500 text-3xl font-bold">@vice</div>
        {loggedIn === "true" ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all text-xl"
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
