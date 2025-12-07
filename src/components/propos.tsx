
// import React, { useState } from 'react';
import {Award, Users, Car, ThumbsUp } from 'lucide-react';

// Composant À propos
export function Propos() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "5000+",
      label: "Clients satisfaits"
    },
    {
      icon: <Car className="w-8 h-8" />,
      number: "50+",
      label: "Véhicules disponibles"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "10 ans",
      label: "D'expérience"
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      number: "98%",
      label: "Taux de satisfaction"
    }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            À propos de TaxiYa
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Votre partenaire de confiance pour tous vos déplacements
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image/Illustration */}
          <div className="relative">
            <div className="bg-linear-to-br from-amber-400 to-amber-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <Car className="w-48 h-48 text-amber-500" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-500 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Right: Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Qui sommes-nous ?
            </h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Fondée en 2015, <strong>TaxiYa</strong> est devenue la référence en matière de transport urbain à Yaoundé. Notre mission est simple : offrir un service de qualité, fiable et accessible à tous.
              </p>
              <p>
                Avec une flotte de plus de 50 véhicules modernes et une équipe de chauffeurs professionnels certifiés, nous nous engageons à rendre chaque trajet confortable et sécurisé.
              </p>
              <p>
                Que ce soit pour un déplacement professionnel, un transfert aéroport ou une sortie en famille, nous mettons tout en œuvre pour garantir votre satisfaction.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <h4 className="font-bold text-slate-900 mb-2">🎯 Notre Vision</h4>
                <p className="text-sm text-slate-700">Devenir le leader du transport urbain en Afrique Centrale</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                <h4 className="font-bold text-slate-900 mb-2">💎 Nos Valeurs</h4>
                <p className="text-sm text-slate-700">Fiabilité, sécurité, ponctualité et excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-slate-100"
            >
              <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}