import { useState } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "../../api/authApi";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const data =
        await signupUser({
          email,
          password,
        });

      if (data.id) {
        setMessage(
          "Signup Successful!"
        );
      } else {
        setMessage(
          "Signup Failed"
        );
      }
    } catch (error) {
      setMessage(
        "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Signup
        </h1>

        {message && (
          <p className="text-center mb-4">
            {message}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={e =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
          value={password}
          onChange={e =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg"
        >
          Signup
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;