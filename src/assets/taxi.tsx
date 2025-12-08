// import React from "react";

// TaxiYaLogo: Wordmark moderne (icône toit de taxi + texte)
// Composant React TSX, prêt à l'emploi



export default function TaxiYaLogo({ w = "800", h = "200" }: { w?: string; h?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 200"
      width= {w}
      height={h}
      role="img"
      aria-labelledby="titleDesc"
    >
      <title id="titleDesc">TaxiYa — logo</title>

      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#FFD300" />
          <stop offset="1" stopColor="#FFB000" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#222" />
          <stop offset="1" stopColor="#444" />
        </linearGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" result="b" />
          <feComposite in="SourceGraphic" in2="b" operator="over" />
        </filter>
      </defs>

      {/* Icône: toit de taxi stylisé */}
      <g transform="translate(60,40)">
        <rect x="0" y="48" rx="12" ry="12" width="160" height="64" fill="url(#g2)" />
        <path
          d="M14 48 Q40 -8 120 48 Z"
          fill="url(#g1)"
          stroke="#B07400"
          strokeWidth="2"
        />
        {/* feu de toit */}
        <rect x="64" y="30" rx="6" ry="6" width="32" height="18" fill="#fff" opacity="0.95" />
        <rect x="68" y="34" rx="4" ry="4" width="24" height="10" fill="url(#g1)" />

        {/* petites roues stylisées */}
        <circle cx="30" cy="130" r="6" fill="#222" />
        <circle cx="130" cy="130" r="6" fill="#222" />
      </g>

      {/* Texte: TaxiYa */}
      <g transform="translate(260,115)">
        <text
          x="0"
          y="0"
          fontFamily="Segoe UI, Roboto, Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="72"
          fill="#111"
        >
          Taxi
        </text>
        <text
          x="180"
          y="0"
          fontFamily="Segoe UI, Roboto, Helvetica, Arial, sans-serif"
          fontWeight="800"
          fontSize="84"
          fill="url(#g1)"
        >
          Ya
        </text>
        <rect x="0" y="14" width="280" height="6" rx="3" fill="#FFB000" opacity="0.16" />
      </g>
    </svg>
  );
}
