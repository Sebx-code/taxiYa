import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import MapView from "./map";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {
      alert("Message envoyé ! Nous vous contacterons bientôt.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: ["+237 6XX XX XX XX", "+237 6YY YY YY YY"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@taxiya.cm", "reservation@taxiya.cm"],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: ["Rond-point Express", "Yaoundé, Cameroun"],
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      details: ["24h/24 - 7j/7", "Service continu"],
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Une question ? Besoin d'un devis ? Notre équipe est à votre écoute
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div
                className={`w-12 h-12 bg-linear-to-br ${info.color} rounded-xl flex items-center justify-center text-white mb-4`}
              >
                {info.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-slate-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Envoyez-nous un message
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  placeholder="+237 6XX XX XX XX"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                  placeholder="Décrivez votre besoin..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
  {/* Overlay décoratif */}
  <div className="absolute top-0 left-0 right-0 z-10 bg-linear-to-b from-slate-900/80 to-transparent p-6">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
        <MapPin className="w-6 h-6 text-slate-900" />
      </div>
      <div className="text-white">
        <p className="font-bold text-lg">Notre Localisation</p>
        <p className="text-sm text-slate-200">Rond-point Express, Yaoundé</p>
      </div>
    </div>
  </div>
  
  {/* Carte */}
  <div className="relative">
    <MapView />
  </div>
  
  {/* Badge en bas */}
  <div className="absolute bottom-6 right-6 z-10 bg-white px-6 py-3 rounded-full shadow-xl border border-slate-200">
    <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      Disponible 24/7
    </p>
  </div>
</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">TaxiYa</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Votre partenaire de confiance pour tous vos déplacements à
                Yaoundé et ses environs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#hero"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#forfaits"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Forfaits
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-amber-400 transition-colors"
                  >
                    À propos
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Nos services</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-amber-400 transition-colors cursor-pointer">
                  Courses urbaines
                </li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">
                  Transfert aéroport
                </li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">
                  Location journée
                </li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">
                  Service entreprise
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+237 6XX XX XX XX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@taxiya.cm</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Yaoundé, Cameroun</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Copyright */}
              <div className="text-slate-400 text-sm text-center md:text-right">
                <p>© 2024 TaxiYa. Tous droits réservés.</p>
                <p className="mt-1">
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Politique de confidentialité
                  </a>
                  {" • "}
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Conditions d'utilisation
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
