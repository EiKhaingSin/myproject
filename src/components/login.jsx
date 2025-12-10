import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import UserService from "../services/Userservice";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {

        const user = { email, password, username: email.split("@")[0] };

        try {
            const result = await UserService.createUser(user);
            console.log("POST Success:", result);

            const isLogin = await UserService.login(email, password);

            if (isLogin) {
                setMessage("Login successful! Welcome to the secure area.");
            } else {
                setMessage("Login failed. Check your email and password.");
            }
        } catch (error) {
            console.log(error);
            setMessage("Failed to create user.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 font-sans bg-gradient-to-br from-pink-100 via-pink-200 to-gray-200">
            <div className="p-8 sm:p-10 rounded-3xl shadow-2xl w-80 max-w-xs sm:max-w-sm backdrop-blur-md bg-[rgba(30,0,40,0.4)] border border-white/20">

                <div className="flex justify-center mb-10">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-24 h-24 flex items-center justify-center border-2 border-white/30">
                        <User className="w-12 h-12 text-white/90" />
                    </div>
                </div>

                {message && (
                    <p className={`mb-6 text-center text-sm font-semibold 
                        ${message.startsWith('Login successful') ? 'text-green-400' : 'text-red-400'}`}>
                        {message}
                    </p>
                )}

           
                <div className="space-y-8">

                    <div className="relative border-b border-white/50 focus-within:border-purple-400 pb-2">
                        <Mail className="absolute top-1/2 -translate-y-1/2 left-0 w-5 text-white/70" />
                        <input
                            type="email"
                            placeholder="Email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-7 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
                        />
                    </div>

                    <div className="relative border-b border-white/50 focus-within:border-purple-400 pb-2">
                        <Lock className="absolute top-1/2 -translate-y-1/2 left-0 w-5 text-white/70" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-7 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm pt-2">
                        <label className="text-white/80 flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="mr-2"
                            />
                            Remember me
                        </label>

                        <a href="#" className="text-purple-300 text-xs hover:text-red-400">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full h-12 mt-6 rounded-lg font-bold text-lg bg-gradient-to-r from-purple-700 to-red-500 text-white"
                    >
                        LOGIN
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Login;