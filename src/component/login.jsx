import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === 'user@example.com' && password === 'password123') {
            setMessage('Login successful! Welcome to the secure area.');
        } else {
            setMessage('Login failed. Check your email and password.');
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 font-sans bg-gradient-to-br from-pink-100 via-pink-200 to-gray-200"
        >
            <div
                className="p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm backdrop-blur-md
                bg-[rgba(30,0,40,0.4)] border border-white/20 transition-all duration-300 hover:shadow-purple-500/40"
            >
                <div className="flex justify-center mb-10">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-24 h-24 flex items-center justify-center border-2 border-white/30">
                        <User className="w-12 h-12 text-white/90" />
                    </div>
                </div>

                {message && (
                    <p
                        className={`mb-6 text-center text-sm font-semibold transition-opacity
                            ${message.startsWith('Login successful')
                                ? 'text-green-400'
                                : 'text-red-400'
                            }`}
                    >
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
               
                    <div className="relative border-b border-white/50 focus-within:border-purple-400 transition-colors pb-2">
                        <Mail className="absolute top-1/2 -translate-y-1/2 left-0 w-5 h-5 text-white/70" />
                        <input
                            type="email"
                            placeholder="Email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-7 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
                        />
                    </div>

          
                    <div className="relative border-b border-white/50 focus-within:border-purple-400 transition-colors pb-2">
                        <Lock className="absolute top-1/2 -translate-y-1/2 left-0 w-5 h-5 text-white/70" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full pl-7 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm pt-2">
                        <label className="text-white/80 flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="mr-2 h-4 w-4 rounded-sm border border-white/50 bg-transparent checked:bg-purple-600
                                checked:border-transparent focus:outline-none"
                            />
                            Remember me
                        </label>

                        <a
                            href="#"
                            className="text-purple-300 hover:text-red-400 transition-colors text-xs font-medium"
                        >
                            Forgot Password?
                        </a>
                    </div>

                 
                    <button
                        type="submit"
                        className="w-full h-12 mt-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.03]
                        bg-gradient-to-r from-purple-700 to-red-500 text-white shadow-lg hover:shadow-red-500/40"
                    >
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
