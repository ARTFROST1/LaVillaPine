interface AvitoIconProps {
  className?: string;
  size?: number;
}

export default function AvitoIcon({ className = "", size = 20 }: AvitoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* Avito logo pattern - four circles arranged as in the authentic logo */}
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="4" />
      <circle cx="6" cy="18" r="4" />
      <circle cx="17" cy="18" r="2.5" />
    </svg>
  );
}