import React, { useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  badge?: string | number;
};

type NavProps = {
  logo?: React.ReactNode;
  items?: NavItem[];
  position?: "top" | "left" | "right";
  variant?: "solid" | "transparent" | "bordered";
  size?: "sm" | "md" | "lg";
  sticky?: boolean;
  showMenuButton?: boolean;
  rightContent?: React.ReactNode;
  spacing?: "none" | "sm" | "md" | "lg";
  className?: string;
};

export default function Nav({
  logo,
  items = [],
  position = "top",
  variant = "solid",
  size = "md",
  sticky = false,
  showMenuButton = true,
  rightContent,
  spacing = "none",
  className = "",
}: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Classes de base avec bordures arrondies
  const baseClasses = "flex transition-all duration-300 rounded-full";

  // Classes d'espacement (margin autour de la navbar)
  let spacingClasses = "";
  if (spacing === "sm") {
    spacingClasses = "m-2";
  } else if (spacing === "md") {
    spacingClasses = "m-4";
  } else if (spacing === "lg") {
    spacingClasses = "m-6";
  }

  // Classes selon la position
  let positionClasses = "";
  let containerClasses = "";
  if (position === "top") {
    positionClasses = sticky ? "sticky top-0 z-50" : "relative";
    containerClasses = "flex-row items-center justify-between w-auto";
  } else if (position === "left") {
    positionClasses = "fixed left-0 top-0 h-auto z-50";
    containerClasses = "flex-col w-64 max-h-screen";
  } else if (position === "right") {
    positionClasses = "fixed right-0 top-0 h-auto z-50";
    containerClasses = "flex-col w-64 max-h-screen";
  }

  // Classes selon le variant
  let variantClasses = "";
  if (variant === "solid") {
    variantClasses = "bg-white shadow-2xl";
  } else if (variant === "transparent") {
    variantClasses = "bg-white bg-opacity-80 backdrop-blur-md";
  } else if (variant === "bordered") {
    variantClasses = "bg-white border-2 border-gray-300";
  }

  // Classes selon la taille
  let sizeClasses = "";
  let itemSizeClasses = "";
  if (size === "sm") {
    sizeClasses = "px-4 py-1.5";
    itemSizeClasses = "px-3 py-1 text-sm";
  } else if (size === "md") {
    sizeClasses = "px-6 py-2";
    itemSizeClasses = "px-4 py-1.5 text-base";
  } else if (size === "lg") {
    sizeClasses = "px-8 py-3";
    itemSizeClasses = "px-5 py-2 text-lg";
  }

  // Classes pour les items du menu avec bordures arrondies
  const itemBaseClasses = "flex items-center gap-2 rounded-full hover:bg-yellow-200 transition-colors duration-200 cursor-pointer font-medium";

  const allClasses = `${baseClasses} ${positionClasses} ${variantClasses} ${sizeClasses} ${containerClasses} ${spacingClasses} ${className}`.trim();

  const handleItemClick = (item: NavItem) => {
    if (item.onClick) {
      item.onClick();
    }
    if (position === "top") {
      setIsOpen(false);
    }
  };

  return (
    <nav className={allClasses}>
      {/* Logo */}
      {logo && (
        <div className="flex items-center">
          {logo}
        </div>
      )}

      {/* Menu hamburger pour mobile (position top seulement) */}
      {position === "top" && showMenuButton && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-gray-100"
        >
          <span className={`w-6 h-0.5 bg-gray-800 rounded-full transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 rounded-full transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 rounded-full transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      )}

      {/* Items de navigation */}
      {items.length > 0 && (
        <div
          className={
            position === "top"
              ? `${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-2 md:gap-2 absolute md:relative top-full left-0 right-0 md:top-auto ${variant === "solid" ? "bg-white shadow-lg md:shadow-none rounded-3xl mt-2" : ""} p-4 md:p-0`
              : "flex flex-col gap-2 mt-8 w-full px-4"
          }
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              onClick={(e) => {
                if (!item.href || item.href === "#") {
                  e.preventDefault();
                }
                handleItemClick(item);
              }}
              className={`${itemBaseClasses} ${itemSizeClasses} relative`}
            >
              {item.icon && <span>{item.icon}</span>}
              <span>{item.label}</span>
              {item.badge && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      )}

      {/* Contenu à droite (pour position top) */}
      {position === "top" && rightContent && (
        <div className="hidden md:flex items-center gap-2">
          {rightContent}
        </div>
      )}
    </nav>
  );
}