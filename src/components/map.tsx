import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Coordonnées par défaut (Yaoundé - Rond-point Express)
const defaultPosition: [number, number] = [3.8480, 11.5021];

// Icône pour TaxiYa (bureau)
const taxiIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [32, 50],
  iconAnchor: [16, 50],
  popupAnchor: [0, -50],
});

// Icône pour la position de l'utilisateur
const userIcon = L.divIcon({
  html: `<div style="background: #3b82f6; width: 20px; height: 20px; border-radius: 50%; border: 4px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
  className: '',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Composant pour centrer la carte
function MapCenterUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  
  return null;
}

export default function MapView() {
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Vérifier si la géolocalisation est disponible
    if (!navigator.geolocation) {
      setError("La géolocalisation n'est pas supportée par votre navigateur");
      setLoading(false);
      return;
    }

    // Obtenir la position actuelle
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserPosition([latitude, longitude]);
        setLoading(false);
        console.log("Position détectée:", latitude, longitude);
      },
      (err) => {
        console.error("Erreur de géolocalisation:", err);
        setError("Impossible d'obtenir votre position. Vérifiez les autorisations.");
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }, []);

  // Calculer la distance entre deux points (formule de Haversine)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Rayon de la Terre en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const distance = userPosition 
    ? calculateDistance(userPosition[0], userPosition[1], defaultPosition[0], defaultPosition[1])
    : null;

  const mapCenter = userPosition || defaultPosition;

  return (
    <div className="relative">
      {/* Indicateur de chargement */}
      {loading && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-1000 bg-white px-6 py-3 rounded-full shadow-lg border border-slate-200">
          <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></span>
            Détection de votre position...
          </p>
        </div>
      )}

      {/* Message d'erreur */}
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-1000 bg-red-50 px-6 py-3 rounded-full shadow-lg border border-red-200">
          <p className="text-sm font-semibold text-red-900">⚠️ {error}</p>
        </div>
      )}

      {/* Badge de distance */}
      {distance !== null && userPosition && (
        <div className="absolute top-4 right-4 z-1000 bg-white px-6 py-3 rounded-full shadow-lg border border-slate-200">
          <p className="text-sm font-semibold text-slate-900">
            📍 Distance: <span className="text-amber-500">{distance.toFixed(2)} km</span>
          </p>
        </div>
      )}

      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "500px", width: "100%", borderRadius: "0" }}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Centrer la carte sur la position détectée */}
        <MapCenterUpdater center={mapCenter} />

        {/* Marqueur TaxiYa (bureau) */}
        <Marker position={defaultPosition} icon={taxiIcon}>
          <Popup>
            <div className="text-center p-2">
              <p className="font-bold text-slate-900 mb-1">🚖 TaxiYa</p>
              <p className="text-sm text-slate-600">Rond-point Express</p>
              <p className="text-xs text-slate-500 mt-2">Yaoundé, Cameroun</p>
              <button className="mt-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold px-4 py-2 rounded-full text-sm transition-all">
                Réserver maintenant
              </button>
            </div>
          </Popup>
        </Marker>

        {/* Marqueur de la position de l'utilisateur */}
        {userPosition && (
          <Marker position={userPosition} icon={userIcon}>
            <Popup>
              <div className="text-center p-2">
                <p className="font-bold text-blue-900 mb-1">📍 Vous êtes ici</p>
                <p className="text-xs text-slate-600">
                  Lat: {userPosition[0].toFixed(4)}<br />
                  Lng: {userPosition[1].toFixed(4)}
                </p>
                {distance && (
                  <p className="text-sm text-slate-700 mt-2">
                    À <strong>{distance.toFixed(2)} km</strong> de TaxiYa
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}