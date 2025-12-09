import { useState } from "react";
import {
  Menu,
  LayoutDashboard,
  Users,
  Car,
  MapPin,
  DollarSign,
  Settings,
  Bell,
  Search,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-50">
      <aside
        className={`fixed top-0 left-0 h-full bg-linear-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 z-30 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-slate-900">T</span>
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-xl font-bold">TaxiYa</h1>
                <p className="text-xs text-slate-400">Admin Panel</p>
              </div>
            )}
          </div>
        </div>
        <nav className="p-4 space-y-2">
          {[
            {
              id: "dashboard",
              label: "Tableau de bord",
              Icon: LayoutDashboard,
            },
            { id: "bookings", label: "Courses", Icon: MapPin },
            { id: "users", label: "Utilisateurs", Icon: Users },
            { id: "drivers", label: "Chauffeurs", Icon: Car },
            { id: "revenue", label: "Revenus", Icon: DollarSign },
            { id: "settings", label: "Paramètres", Icon: Settings },
          ].map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveMenu(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeMenu === id
                  ? "bg-amber-400 text-slate-900"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Icon className="w-5 h-5" />
              {sidebarOpen && <span className="font-medium">{label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <Menu className="w-6 h-6 text-slate-600" />
              </button>
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 w-64 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-slate-100 rounded-lg">
                <Bell className="w-6 h-6 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-slate-900">
                    Admin TaxiYa
                  </p>
                  <p className="text-xs text-slate-500">Administrateur</p>
                </div>
                <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-slate-900">A</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 space-y-6">
          <div className="bg-linear-to-r from-amber-400 to-amber-500 rounded-2xl p-6 text-slate-900">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Bienvenue sur TaxiYa Admin 👋
                </h2>
                <p className="text-slate-800">
                  Voici un aperçu de votre activité aujourd'hui
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">09 Décembre 2024</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Courses totales",
                value: "1,284",
                change: "+12.5%",
                up: true,
                Icon: MapPin,
                color: "bg-blue-500",
              },
              {
                title: "Revenus",
                value: "2.4M FCFA",
                change: "+8.2%",
                up: true,
                Icon: DollarSign,
                color: "bg-emerald-500",
              },
              {
                title: "Utilisateurs actifs",
                value: "5,247",
                change: "+23.1%",
                up: true,
                Icon: Users,
                color: "bg-amber-500",
              },
              {
                title: "Chauffeurs",
                value: "142",
                change: "-2.4%",
                up: false,
                Icon: Car,
                color: "bg-purple-500",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}
                  >
                    <stat.Icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${
                      stat.up ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {stat.up ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  Courses récentes
                </h3>
                <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                  Voir tout
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    {[
                      "ID Course",
                      "Client",
                      "Chauffeur",
                      "Trajet",
                      "Statut",
                      "Prix",
                      "Actions",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    {
                      id: "#TXY-1284",
                      client: "Jean Dupont",
                      driver: "Pierre Martin",
                      from: "Yaoundé Centre",
                      to: "Bastos",
                      status: "completed",
                      price: "2,500 FCFA",
                      time: "10 min",
                    },
                    {
                      id: "#TXY-1283",
                      client: "Marie Kouam",
                      driver: "En attente",
                      from: "Nsimeyong",
                      to: "Omnisport",
                      status: "pending",
                      price: "1,800 FCFA",
                      time: "15 min",
                    },
                    {
                      id: "#TXY-1282",
                      client: "Paul Ngouo",
                      driver: "Jacques Fotso",
                      from: "Mvan",
                      to: "Nlongkak",
                      status: "in_progress",
                      price: "3,200 FCFA",
                      time: "25 min",
                    },
                    {
                      id: "#TXY-1281",
                      client: "Sophie Mbida",
                      driver: "Annulé",
                      from: "Ekounou",
                      to: "Total Etoudi",
                      status: "cancelled",
                      price: "2,100 FCFA",
                      time: "1h",
                    },
                  ].map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <span className="font-semibold text-slate-900">
                          {b.id}
                        </span>
                        <p className="text-xs text-slate-500">
                          Il y a {b.time}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-xs font-semibold text-white">
                              {b.client[0]}
                            </span>
                          </div>
                          <span className="font-medium text-slate-900">
                            {b.client}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-600">{b.driver}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-slate-900 font-medium text-sm">
                            {b.from}
                          </p>
                          <p className="text-slate-500 text-sm">→ {b.to}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {b.status === "completed" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Terminée
                          </span>
                        )}
                        {b.status === "pending" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                            <Clock className="w-3.5 h-3.5" />
                            En attente
                          </span>
                        )}
                        {b.status === "in_progress" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            <AlertCircle className="w-3.5 h-3.5" />
                            En cours
                          </span>
                        )}
                        {b.status === "cancelled" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                            <XCircle className="w-3.5 h-3.5" />
                            Annulée
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-slate-900">
                          {b.price}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-slate-100 rounded-lg">
                            <Eye className="w-4 h-4 text-slate-600" />
                          </button>
                          <button className="p-2 hover:bg-slate-100 rounded-lg">
                            <Edit className="w-4 h-4 text-slate-600" />
                          </button>
                          <button className="p-2 hover:bg-red-50 rounded-lg">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
