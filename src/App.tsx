// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/login';
import './App.css';
import SignupPage from './pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Page de connexion */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Page d'inscription */}
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Page 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Composant 404 simple
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800">
      <div className="text-center text-white space-y-6 p-8">
        <h1 className="text-9xl font-bold text-amber-400">404</h1>
        <h2 className="text-4xl font-bold">Page introuvable</h2>
        <p className="text-slate-300 text-lg">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <a
          href="/"
          className="inline-block mt-8 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}

export default App;