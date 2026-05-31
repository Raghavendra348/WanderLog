import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className="
        bg-teal-600
        text-white
        px-6
        py-4
        flex
        justify-between
        items-center
        shadow-md
      "
    >
      <h1 className="text-2xl font-bold">
        🌍 WanderLog
      </h1>

      <div className="flex gap-4 items-center">
        <NavLink
          to="/"
          className="hover:text-gray-200"
        >
          Explore
        </NavLink>

        <NavLink
          to="/bucket-list"
          className="hover:text-gray-200"
        >
          Bucket List
        </NavLink>

        <button
          onClick={handleLogout}
          className="
            bg-red-500
            px-4
            py-2
            rounded-lg
            hover:bg-red-600
          "
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;