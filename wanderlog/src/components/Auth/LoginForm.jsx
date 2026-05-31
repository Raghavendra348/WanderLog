import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email,
        password,
      });

      if (data.token) {
        login(data.token);
        navigate("/");
      } else {
        setError(data.error);
      }
    } catch (error) {
  console.log(error);
  setError("Login Failed");
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={e =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
          value={password}
          onChange={e =>
            setPassword(e.target.value)
          }
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
          type="submit"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-600 ml-2"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;