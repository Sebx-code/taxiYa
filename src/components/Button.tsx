import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
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
  variant = "primary",
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
  const variantStyles: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const roundedStyles: Record<string, string> = {
    sm: "rounded",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        flex items-center justify-center gap-2 
        font-medium transition-all duration-200
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${roundedStyles[rounded]}
        ${full ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${loading ? "cursor-wait" : ""}
        ${className}
      `}
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
