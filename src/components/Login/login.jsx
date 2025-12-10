import React, { useState } from "react";
import FullNameInput from "./fullname";
import EmailInput from "./email";
import PasswordInput from "./password";
import SubmitButton from "./submit";
import { registerUser, loginUser } from "../../service/authservice";

function AuthForm() {//../services/authService
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = { fullName, email, password };

    try {
      const result = isLogin
        ? await loginUser(userData)
        : await registerUser(userData);
      console.log("Success:", result);
      alert(`${isLogin ? "Login" : "Register"} successful!`);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <FullNameInput value={fullName} onChange={(e) => setFullName(e.target.value)} />
          )}
          <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="flex justify-center">
            <SubmitButton isLogin={isLogin} loading={loading} />
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-black font-semibold hover:underline ml-1"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
