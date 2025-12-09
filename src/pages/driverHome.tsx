import { useState } from "react";
import {
  Menu,
  X,
  Home,
  MapPin,
  Clock,
  User,
  DollarSign,
  Settings,
  LogOut,
  Navigation,
  Phone,
  Star,
  Calendar,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  XCircle,
  Volume2,
  Users,
} from "lucide-react";

export default function DriverDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [isOnline, setIsOnline] = useState(true);
  const [showRequestModal, setShowRequestModal] = useState(false);

  const todayStats = [
    { label: "Courses", value: "12", icon: MapPin, color: "bg-blue-500" },
    {
      label: "Revenus",
      value: "28,500 F",
      icon: DollarSign,
      color: "bg-emerald-500",
    },
    {
      label: "Temps actif",
      value: "6h 30m",
      icon: Clock,
      color: "bg-purple-500",
    },
    { label: "Note", value: "4.9", icon: Star, color: "bg-amber-500" },
  ];

  const pendingRequests = [
    {
      id: "#TXY-1290",
      client: "Marie Kouam",
      from: "Nsimeyong",
      to: "Omnisport",
      distance: "4.2 km",
      price: "1,800 FCFA",
      time: "À l'instant",
      rating: 4.8,
    },
    {
      id: "#TXY-1289",
      client: "Paul Ngouo",
      from: "Mvan",
      to: "Nlongkak",
      distance: "6.5 km",
      price: "3,200 FCFA",
      time: "Il y a 1 min",
      rating: 4.5,
    },
  ];

  const recentTrips = [
    {
      id: "#TXY-1288",
      client: "Jean Dupont",
      from: "Yaoundé Centre",
      to: "Bastos",
      price: "2,500 FCFA",
      status: "completed",
      time: "Il y a 15 min",
    },
    {
      id: "#TXY-1287",
      client: "Sophie Mbida",
      from: "Ekounou",
      to: "Total Etoudi",
      price: "2,100 FCFA",
      status: "completed",
      time: "Il y a 45 min",
    },
    {
      id: "#TXY-1286",
      client: "Thomas Ndong",
      from: "Biyem-Assi",
      to: "Carrefour Warda",
      price: "1,500 FCFA",
      status: "completed",
      time: "Il y a 1h",
    },
  ];

  const menuItems = [
    { id: "home", label: "Accueil", Icon: Home },
    { id: "trips", label: "Mes courses", Icon: MapPin },
    { id: "earnings", label: "Revenus", Icon: DollarSign },
    { id: "schedule", label: "Planning", Icon: Clock },
    { id: "profile", label: "Mon profil", Icon: User },
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
              <p className="text-xs text-slate-500">Chauffeur</p>
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
              {/* Online/Offline Toggle */}
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  isOnline
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isOnline ? "bg-emerald-500" : "bg-slate-400"
                  }`}
                />
                {isOnline ? "En ligne" : "Hors ligne"}
              </button>

              <div className="flex items-center gap-3 border-l pl-4">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-slate-900">
                    Pierre Martin
                  </p>
                  <p className="text-xs text-slate-500">Chauffeur Premium</p>
                </div>
                <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">PM</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 md:p-6 space-y-6">
          {/* Status Banner */}
          <div
            className={`rounded-2xl p-6 text-white ${
              isOnline
                ? "bg-linear-to-r from-emerald-500 to-emerald-600"
                : "bg-linear-to-r from-slate-600 to-slate-700"
            }`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {isOnline
                    ? "Vous êtes en ligne ! 🚕"
                    : "Vous êtes hors ligne"}
                </h2>
                <p className="text-white text-opacity-90">
                  {isOnline
                    ? "Prêt à accepter de nouvelles courses"
                    : "Activez votre statut pour recevoir des courses"}
                </p>
              </div>
              {isOnline && (
                <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Position activée</span>
                </div>
              )}
            </div>
          </div>

          {/* Today Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {todayStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}
                  >
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Pending Requests */}
          {isOnline && pendingRequests.length > 0 && (
            <div className="bg-white rounded-2xl border-2 border-amber-400 shadow-lg">
              <div className="p-6 bg-amber-50 border-b border-amber-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center animate-pulse">
                      <AlertCircle className="w-5 h-5 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Nouvelles demandes
                      </h3>
                      <p className="text-sm text-slate-600">
                        {pendingRequests.length} course(s) en attente
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-amber-100 rounded-lg">
                    <Volume2 className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>
              <div className="divide-y divide-slate-200">
                {pendingRequests.map((request) => (
                  <div key={request.id} className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-white">
                              {request.client.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">
                              {request.client}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                              <span>{request.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-start gap-2">
                            <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 shrink-0" />
                            <p className="text-sm font-medium text-slate-900">
                              {request.from}
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-4 h-4 bg-amber-500 rounded-full mt-1 shrink-0" />
                            <p className="text-sm font-medium text-slate-900">
                              {request.to}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span>📍 {request.distance}</span>
                          <span>⏱️ {request.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-sm text-slate-600 mb-1">
                            Gain estimé
                          </p>
                          <p className="text-2xl font-bold text-slate-900">
                            {request.price}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => setShowRequestModal(true)}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
                          >
                            <CheckCircle className="w-5 h-5" />
                            Accepter
                          </button>
                          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2">
                            <XCircle className="w-5 h-5" />
                            Refuser
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Trips */}
          <div className="bg-white rounded-2xl border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  Courses d'aujourd'hui
                </h3>
                <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                  Voir tout
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
                        <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Terminée
                        </span>
                        <span className="text-xs text-slate-500">
                          {trip.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-white">
                            {trip.client.charAt(0)}
                          </span>
                        </div>
                        <span className="font-medium text-slate-900">
                          {trip.client}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <span>{trip.from}</span>
                        <span>→</span>
                        <span>{trip.to}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-600">
                        + {trip.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Cette semaine</p>
                  <p className="text-2xl font-bold text-slate-900">
                    68 courses
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span>+15% vs semaine dernière</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Revenus semaine</p>
                  <p className="text-2xl font-bold text-slate-900">156,800 F</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span>+22% vs semaine dernière</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Clients satisfaits</p>
                  <p className="text-2xl font-bold text-slate-900">98%</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Note moyenne: 4.9/5</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Active Trip Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900">
                Course acceptée !
              </h3>
              <button
                onClick={() => setShowRequestModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">MK</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-lg">
                    Marie Kouam
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>4.8 • 24 courses</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">
                      Point de départ
                    </p>
                    <p className="text-sm text-slate-600">Nsimeyong</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Destination</p>
                    <p className="text-sm text-slate-600">Omnisport</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-slate-600 mb-1">Distance</p>
                  <p className="font-semibold text-slate-900">4.2 km</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-slate-600 mb-1">Gain</p>
                  <p className="font-semibold text-emerald-600">1,800 FCFA</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Appeler le client
              </button>
              <button className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                <Navigation className="w-5 h-5" />
                Navigation
              </button>
            </div>

            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-xl font-semibold transition-all">
              Commencer la course
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
