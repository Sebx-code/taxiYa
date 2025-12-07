// import React from 'react';
import { Clock, MapPin, Shield, CreditCard, Users, Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Disponible 24/7",
      description: "Service continu jour et nuit pour tous vos déplacements urgents ou planifiés"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Courses Urbaines",
      description: "Déplacements rapides en ville avec des chauffeurs qui connaissent tous les itinéraires"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité Garantie",
      description: "Chauffeurs professionnels certifiés et véhicules régulièrement contrôlés"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Paiement Flexible",
      description: "Espèces, carte bancaire ou paiement mobile, choisissez votre mode de paiement"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Véhicules Spacieux",
      description: "Du véhicule standard au van pour groupes, nous adaptons le véhicule à vos besoins"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Trajets Professionnels",
      description: "Service premium pour vos rendez-vous d'affaires et transferts aéroport"
    }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Des solutions de transport adaptées à tous vos besoins, avec un service de qualité à chaque trajet
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-linear-to-r from-amber-400 to-amber-500 p-8 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Prêt à partir ?
            </h3>
            <p className="text-slate-800 mb-6 text-lg">
              Réservez votre course en quelques clics
            </p>
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Réserver maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}