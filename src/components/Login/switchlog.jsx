import React, { useState } from "react";
import { registerUser, loginUser } from "../../service/authservice";

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("SUPERVISOR");
    const [permissions, setPermissions] = useState(["READ"]);
    const [loading, setLoading] = useState(false);

    const toggleForm = () => setIsLogin(!isLogin);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userData = isLogin
            ? { userEmail, password }
            : { userEmail, userName, password, role, permissions };

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
                        <>
                            <input
                                type="text"
                                placeholder="User Name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="SUPERVISOR">SUPERVISOR</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                            </select>
                        </>
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full p-3 rounded-lg text-white font-semibold ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                            }`}
                    >
                        {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
                    </button>
                </form>

                <div className="mt-4 text-center text-sm">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={toggleForm}
                        className="text-blue-500 font-semibold hover:underline ml-1"
                    >
                        {isLogin ? "Register" : "Login"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;
