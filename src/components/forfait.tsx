// import React from 'react';
import { Zap, Armchair, Crown, Users, Check } from 'lucide-react';

export default function Forfaits() {
  const forfaits = [
    {
      icon: <Zap className="w-10 h-10" />,
      name: "Rapide",
      price: "À partir de 2 500 FCFA",
      description: "Déplacements express pour vos trajets quotidiens",
      features: [
        "Véhicule standard confortable",
        "Prise en charge en moins de 5 min",
        "Trajet direct et rapide",
        "Idéal pour les courses en ville"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Armchair className="w-10 h-10" />,
      name: "Confort",
      price: "À partir de 4 000 FCFA",
      description: "Voyagez dans des véhicules haut de gamme",
      features: [
        "Véhicules récents et climatisés",
        "Sièges en cuir premium",
        "Wi-Fi gratuit à bord",
        "Bouteilles d'eau offertes"
      ],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      popular: true
    },
    {
      icon: <Crown className="w-10 h-10" />,
      name: "VIP",
      price: "À partir de 7 500 FCFA",
      description: "L'excellence pour vos déplacements d'affaires",
      features: [
        "Véhicules de luxe (berlines)",
        "Chauffeur en costume professionnel",
        "Service de conciergerie",
        "Chargeurs et journaux inclus"
      ],
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      icon: <Users className="w-10 h-10" />,
      name: "Famille",
      price: "À partir de 5 500 FCFA",
      description: "Espace et sécurité pour toute la famille",
      features: [
        "Véhicules spacieux (7 places)",
        "Sièges bébé disponibles",
        "Grand coffre pour bagages",
        "Trajets longue distance acceptés"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Nos Forfaits
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choisissez le forfait qui correspond à vos besoins et profitez d'un service de qualité
          </p>
        </div>

        {/* Forfaits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {forfaits.map((forfait, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${forfait.borderColor} overflow-hidden`}
            >
              {/* Badge Popular */}
              {forfait.popular && (
                <div className="absolute top-4 right-4 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  POPULAIRE
                </div>
              )}

              {/* Header Card */}
              <div className={`bg-linear-to-br ${forfait.color} p-6 text-white`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  {forfait.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{forfait.name}</h3>
                <p className="text-lg font-semibold">{forfait.price}</p>
              </div>

              {/* Body Card */}
              <div className={`p-6 ${forfait.bgColor}`}>
                <p className="text-slate-700 mb-6 min-h-12">
                  {forfait.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {forfait.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full bg-linear-to-r ${forfait.color} text-white font-semibold py-3 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-md`}>
                  Choisir ce forfait
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
          <p className="text-slate-600 text-lg mb-4">
            💡 <strong>Besoin d'un forfait personnalisé ?</strong>
          </p>
          <p className="text-slate-600 mb-6">
            Contactez-nous pour un devis adapté à vos besoins spécifiques
          </p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            Demander un devis
          </button>
        </div>
      </div>
    </section>
  );
}