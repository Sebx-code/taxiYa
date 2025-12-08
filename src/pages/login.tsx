import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          {/* Logo & Back Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-900">T</span>
              </div>
              <h1 className="text-2xl font-bold">TaxiYa</h1>
            </div>
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Retour au site</span>
            </Link>
          </div>

          {/* Main Message */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                Voyagez Malin.
                <br />
                Réservez Rapide.
                <br />
                Arrivez Serein.
              </h2>
              <p className="text-slate-300 text-lg max-w-md">
                Gérez vos courses, suivez vos trajets et profitez d'un service
                premium depuis votre espace personnel.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-slate-300">
                  Réservation instantanée 24/7
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-slate-300">
                  Suivi en temps réel de votre course
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-slate-300">
                  Historique et factures accessibles
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 border-2 border-slate-900"></div>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-400 to-amber-600 border-2 border-slate-900"></div>
            </div>
            <p className="text-sm text-slate-400 ml-2">
              Rejoignez <span className="text-white font-semibold">5000+</span>{" "}
              utilisateurs satisfaits
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-900">T</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">TaxiYa</h1>
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold text-slate-900">Bon retour !</h2>
            <p className="text-slate-600">
              Connectez-vous pour accéder à votre espace personnel
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="votre@email.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-slate-900"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Entrez votre mot de passe"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-slate-900"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.remember}
                  onChange={(e) =>
                    setFormData({ ...formData, remember: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-slate-300 text-amber-500 focus:ring-2 focus:ring-amber-200"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                  Se souvenir de moi
                </span>
              </label>
              <button className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors">
                Mot de passe oublié ?
              </button>
            </div>

            {/* Login Button */}
            <button className="w-full bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg">
              Se connecter
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">
                  Ou continuer avec
                </span>
              </div>
            </div>

            {/* Social Login */}
            <button className="w-full flex items-center justify-center gap-3 py-3.5 border-2 border-slate-300 rounded-xl hover:bg-slate-50 transition-all duration-300 hover:border-slate-400 group">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                Continuer avec Google
              </span>
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-slate-600">
              Pas encore de compte ?{" "}
              <Link
                to="/signup"
                className="text-amber-600 hover:text-amber-700 font-semibold transition-colors"
              >
                Inscrivez-vous ici
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
