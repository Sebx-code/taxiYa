import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline1" | "danger" | "perso1" | undefined;
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "full";
  full?: boolean;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = undefined,
  size = "md",
  rounded = "md",
  full = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
  className = "",
}: ButtonProps) {
  // Définir les classes de base communes
  const baseClasses = "flex items-center justify-center gap-2 font-medium transition-all duration-200";
  
  // Classes conditionnelles pour le variant
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-blue-600 text-white hover:bg-blue-700";
  } else if (variant === "secondary") {
    variantClasses = "bg-gray-200 text-black hover:bg-gray-300";
  } else if (variant === "outline") {
    variantClasses = "border border-gray-400 text-gray-700 hover:bg-gray-100";
  } else if (variant === "danger") {
    variantClasses = "bg-red-600 text-white hover:bg-red-700";
  } else if (variant === "perso1") {
    variantClasses = "bg-yellow-500 text-white hover:bg-yellow-700";
  } else if (variant === "outline1") {
    variantClasses = "border border-gray-400 text-gray-700 hover:bg-yellow-400 hover:text-white";
  }
  // Classes conditionnelles pour la taille
  let sizeClasses = "";
  if (size === "sm") {
    sizeClasses = "px-3 py-1 text-sm";
  } else if (size === "md") {
    sizeClasses = "px-4 py-2 text-base";
  } else if (size === "lg") {
    sizeClasses = "px-5 py-3 text-lg";
  }
  
  // Classes conditionnelles pour le rounded
  let roundedClasses = "";
  if (rounded === "sm") {
    roundedClasses = "rounded";
  } else if (rounded === "md") {
    roundedClasses = "rounded-lg";
  } else if (rounded === "lg") {
    roundedClasses = "rounded-xl";
  } else if (rounded === "full") {
    roundedClasses = "rounded-full";
  }
  
  // Classes conditionnelles pour full width
  const fullClasses = full ? "w-full" : "";
  
  // Classes conditionnelles pour disabled
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  // Classes conditionnelles pour loading
  const loadingClasses = loading ? "cursor-wait" : "";
  
  // Combiner toutes les classes
  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${roundedClasses} ${fullClasses} ${disabledClasses} ${loadingClasses} ${className}`.trim();

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={allClasses}
    >
      {loading && (
        <span className="animate-spin border-2 border-white border-t-transparent w-4 h-4 rounded-full"></span>
      )}

      {!loading && leftIcon && <span>{leftIcon}</span>}
      {!loading && children}
      {!loading && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}