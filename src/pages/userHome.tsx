import { useState } from "react";
import {
  Menu,
  X,
  Home,
  MapPin,
  Clock,
  User,
  CreditCard,
  Settings,
  LogOut,
  Plus,
  Navigation,
  Phone,
  Star,
  Calendar,
  DollarSign,
  ChevronRight,
} from "lucide-react";

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [showBookingModal, setShowBookingModal] = useState(false);

  const recentTrips = [
    {
      id: "#TXY-1284",
      date: "08 Déc 2024",
      from: "Yaoundé Centre",
      to: "Bastos",
      driver: "Pierre Martin",
      price: "2,500 FCFA",
      status: "completed",
      rating: 5,
    },
    {
      id: "#TXY-1283",
      date: "07 Déc 2024",
      from: "Nsimeyong",
      to: "Omnisport",
      driver: "Jacques Fotso",
      price: "1,800 FCFA",
      status: "completed",
      rating: 4,
    },
    {
      id: "#TXY-1282",
      date: "05 Déc 2024",
      from: "Mvan",
      to: "Nlongkak",
      driver: "Thomas Ndi",
      price: "3,200 FCFA",
      status: "completed",
      rating: 5,
    },
  ];

  const menuItems = [
    { id: "home", label: "Accueil", Icon: Home },
    { id: "trips", label: "Mes courses", Icon: MapPin },
    { id: "scheduled", label: "Courses programmées", Icon: Clock },
    { id: "profile", label: "Mon profil", Icon: User },
    { id: "payment", label: "Paiement", Icon: CreditCard },
    { id: "settings", label: "Paramètres", Icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-slate-200 transition-all duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-slate-900">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">TaxiYa</h1>
              <p className="text-xs text-slate-500">Votre mobilité</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => {
                setActiveMenu(id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeMenu === id
                  ? "bg-amber-400 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-6 h-6 text-slate-600" />
            </button>
            <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-slate-900">
                    Jean Dupont
                  </p>
                  <p className="text-xs text-slate-500">Client Premium</p>
                </div>
                <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">JD</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 md:p-6 space-y-6">
          {/* Welcome Banner */}
          <div className="bg-linear-to-r from-amber-400 to-amber-500 rounded-2xl p-6 text-slate-900">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Bonjour Jean ! 👋</h2>
                <p className="text-slate-800">
                  Où souhaitez-vous aller aujourd'hui ?
                </p>
              </div>
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Nouvelle course
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-600 text-sm">Courses totales</p>
                  <p className="text-2xl font-bold text-slate-900">24</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-slate-600 text-sm">Dépenses ce mois</p>
                  <p className="text-2xl font-bold text-slate-900">45,200 F</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-slate-600 text-sm">Note moyenne</p>
                  <p className="text-2xl font-bold text-slate-900">4.8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Trips */}
          <div className="bg-white rounded-2xl border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  Courses récentes
                </h3>
                <button className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center gap-1">
                  Voir tout
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="divide-y divide-slate-200">
              {recentTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="p-6 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-slate-900">
                          {trip.id}
                        </span>
                        <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                          Terminée
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-slate-900">
                              {trip.from}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-amber-500 rounded-full mt-1 shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-slate-900">
                              {trip.to}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {trip.driver}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {trip.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-slate-900">
                          {trip.price}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < trip.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <button className="p-2 hover:bg-slate-100 rounded-lg">
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Programmer une course
                  </h4>
                  <p className="text-sm text-slate-600">Réservez à l'avance</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Contacter le support
                  </h4>
                  <p className="text-sm text-slate-600">Disponible 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900">
                Nouvelle course
              </h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Point de départ
                </label>
                <div className="relative">
                  <Navigation className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                  <input
                    type="text"
                    placeholder="Entrez votre position"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-500" />
                  <input
                    type="text"
                    placeholder="Où allez-vous ?"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Quand ?
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none">
                    <option>Maintenant</option>
                    <option>Programmer pour plus tard</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Prix estimé</span>
                  <span className="text-2xl font-bold text-slate-900">
                    2,500 FCFA
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-semibold py-4 rounded-xl transition-all">
              Confirmer la réservation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
