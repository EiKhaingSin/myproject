import React, { useState } from "react";
import FullNameInput from "./fullname";
import EmailInput from "./email";
import PasswordInput from "./password";
import SubmitButton from "./submit";

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => setIsLogin(!isLogin);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${isLogin ? "Login" : "Register"} form submitted!`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-orange-100">
            <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isLogin ? "Login" : "Register"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && <FullNameInput />}
                    <EmailInput />
                    <PasswordInput />
                    <div className="flex justify-center">
                        <SubmitButton isLogin={isLogin} />
                    </div>
                </form>

                <div className="mt-4 text-center text-sm">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={toggleForm}
                        className="text-black-300 font-semibold hover:underline ml-1"
                    >
                        {isLogin ? "Register" : "Login"}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AuthForm;