import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ThesisGenerator from './components/ThesisGenerator';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [users, setUsers] = useState<{ username: string; password: string }[]>([]);

  const handleLogin = (username: string, password: string) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignUp = (username: string, password: string) => {
    if (users.some(u => u.username === username)) {
      alert('Username already exists');
    } else {
      setUsers([...users, { username, password }]);
      setShowLogin(true);
      alert('Sign up successful. Please log in.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 p-4 text-white text-center mb-8">
        <h1 className="text-3xl font-bold flex items-center justify-center">
          <BookOpen className="mr-2" />
          Thesis Generator
        </h1>
      </header>
      {isLoggedIn ? (
        <ThesisGenerator />
      ) : showLogin ? (
        <Login onLogin={handleLogin} onSwitchToSignUp={() => setShowLogin(false)} />
      ) : (
        <SignUp onSignUp={handleSignUp} onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;