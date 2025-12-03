import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';


function App() {
  return (
    
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ 
        
        background: 'linear-gradient(135deg, #1f005c 0%, #5b0060 25%, #870160 50%, #ac255e 75%, #ca485c 100%)',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <Login />
    </div>
  );
}


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
            className="p-8 sm:p-10 rounded-[30px] shadow-2xl relative overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-3xl"
            style={{
                width: '100%',
                maxWidth: '350px', 
                backgroundColor: 'rgba(30, 0, 40, 0.4)', 
                border: '1px solid rgba(255, 255, 255, 0.15)', 
               
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 80px rgba(180, 0, 250, 0.4) inset',
            }}
        >
            
          
            <div className="flex justify-center mb-10">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-24 h-24 flex items-center justify-center border-2 border-white/30">
                    <User className="w-12 h-12 text-white/90" />
                </div>
            </div>

            {message && (
                <p
                    className={`mb-6 text-center text-sm font-semibold transition-opacity duration-500 ${
                        message.startsWith('Login successful') ? 'text-green-400' : 'text-red-400'
                    }`}
                >
                    {message}
                </p>
            )}

      
            <form onSubmit={handleSubmit} className="space-y-8">
                
           
                <div className="relative border-b border-white/50 focus-within:border-purple-400 transition-colors duration-300 pb-2">
                    <Mail className="absolute top-1/2 -translate-y-1/2 left-0 w-5 h-5 text-white/70" />
                    <input
                        type="email"
                        placeholder="Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-7 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
                        aria-label="Email ID"
                    />
                </div>

           
                <div className="relative border-b border-white/50 focus-within:border-purple-400 transition-colors duration-300 pb-2">
                    <Lock className="absolute top-1/2 -translate-y-1/2 left-0 w-5 h-5 text-white/70" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full pl-7 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
                        aria-label="Password"
                    />
                </div>

              
                <div className="flex justify-between items-center text-sm pt-2">
                    <label className="text-white/80 flex items-center cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          
                            className="mr-2 appearance-none h-4 w-4 border border-white/50 rounded-sm bg-transparent checked:bg-purple-600 checked:border-transparent focus:outline-none transition duration-200 checked:after:content-['✓'] checked:after:text-white checked:after:flex checked:after:justify-center checked:after:items-center checked:after:text-xs checked:after:font-bold"
                            aria-label="Remember me"
                        />
                        Remember me
                    </label>
                    <a href="#" className="text-purple-300 hover:text-red-400 transition-colors text-xs font-medium">
                        Forgot Password?
                    </a>
                </div>

         
                <button
                    type="submit"
                    className="w-full h-12 mt-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl"
                    style={{
                       
                        background: 'linear-gradient(90deg, #7b4397 0%, #dc2430 100%)',
                        color: 'white',
                    
                        boxShadow: '0 6px 20px rgba(220, 36, 48, 0.4)',
                    }}
                >
                    LOGIN
                </button>
            </form>
        </div>
    );
}

export default App;