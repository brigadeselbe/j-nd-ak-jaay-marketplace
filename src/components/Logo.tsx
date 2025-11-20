interface LogoProps {
  height?: number;
  showText?: boolean;
  className?: string;
}

export default function Logo({ height = 56, showText = true, className = "" }: LogoProps) {
  return (
    <a 
      href="/" 
      className={`inline-flex items-center gap-3 no-underline transition-opacity hover:opacity-80 ${className}`}
      aria-label="Jënd ak Jaay - Aller à l'accueil"
    >
      <svg 
        viewBox="0 0 200 120" 
        style={{ height: `${height}px`, width: 'auto' }}
        xmlns="http://www.w3.org/2000/svg" 
        role="img" 
        aria-hidden="true"
      >
        {/* Shopping cart (green) */}
        <path d="M20 28 L120 28 L100 76 L40 76 Z" fill="hsl(var(--jaay-green))" />
        {/* Handle (orange) */}
        <path d="M120 28 L150 28 L170 6 L158 6 L140 24 L120 24 Z" fill="hsl(var(--jaay-orange))" />
        {/* Bottom bar (orange) */}
        <rect x="30" y="76" width="90" height="10" rx="5" fill="hsl(var(--jaay-orange))" />
        {/* Wheels */}
        <circle cx="60" cy="96" r="8" fill="hsl(var(--jaay-green))" />
        <circle cx="110" cy="96" r="8" fill="hsl(var(--jaay-orange))" />
      </svg>
      
      {showText && (
        <span className="font-semibold text-foreground text-xl md:text-2xl tracking-tight font-['Poppins']">
          Jënd ak Jaay
        </span>
      )}
    </a>
  );
}
