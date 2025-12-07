// import { useState } from 'react'
import "../App.css";
import Button from "../components/Button";
import backgroundImage from "../assets/backgroundImage.png";
import Nav from "../components/navbar";
import Services from "../components/services";
import Forfaits from "../components/forfait";
import { Propos } from "../components/propos";
import { Contact } from "../components/contact";

function Home() {
  return (
    <>
      {/* Section Hero */}
      <section id="hero" className="relative w-full h-screen">
        <div
          className="w-full h-full bg-center bg-cover p-8 flex flex-col gap-7"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Nav
            logo={<h2 className="text-2xl font-bold text-blue-600">TaxiYa</h2>}
            items={[
              { label: "Accueil", href: "#hero" },
              { label: "Services", href: "#services" },
              { label: "À propos", href: "#about" },
              { label: "Contact", href: "#contact" },
            ]}
            variant="solid"
            size="md"
            sticky={true}
            rightContent={
              <>
                <Button variant="outline" size="sm">
                  Connexion
                </Button>
                <Button size="sm" className="bg-amber-300">
                  S'inscrire
                </Button>
              </>
            }
          />
          <div className="text-xl font-bold absolute top-60 p-8 rounded-3xl bg-linear-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm shadow-2xl flex flex-col items-start min-w-[400px]">
            <h2 className="text-7xl text-white mb-8 leading-tight">
              Besoin d'un <br />
              Taxi ?
            </h2>
            <span className="mt-auto self-end">
              <button className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Réservez maintenant
              </button>
            </span>
          </div>
          <div className="absolute bottom-20">
            <div className="flex gap-5">
              <Button variant="primary" rounded="full">
                Nos services
              </Button>
              <Button variant="outline1" rounded="full">
                À propos
              </Button>
              <Button variant="perso1" rounded="full">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services">
        <Services />
        <Forfaits />
      </section>

      {/* Section À propos */}
      <section id="about" className="min-h-screen bg-slate-100 p-8">
        <div className="max-w-7xl mx-auto">
          <Propos />
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="min-h-screen bg-white p-8">
        <div className="max-w-7xl mx-auto">
          <Contact />
        </div>
      </section>
    </>
  );
}

export default Home;