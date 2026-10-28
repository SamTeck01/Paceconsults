type P = { size?: number; className?: string };

export const ArrowUpRight = ({ size = 12, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true" className={className}>
    <path d="M3 9L9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export const ArrowDownRight = ({ size = 12, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true" className={className}>
    <path d="M3 3l6 6M9 4v5H4" fill="none" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export const ArrowRight = ({ className }: P) => (
  <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true" className={className}>
    <path d="M0 5h12M8 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

// Pace hexagon "P" mark, redrawn from the logo. Replace with the official vector when supplied.
export const PaceMark = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
    <path d="M84 31 L50 11 L16 31 L16 69 L50 89 L76 74" fill="none" stroke="#E66B1E" strokeWidth="13" />
    <path d="M50 38 L60.4 44 L60.4 56 L50 62 L39.6 56 L39.6 44 Z" fill="#E66B1E" />
    <path d="M39.6 55 L39.6 79" stroke="#E66B1E" strokeWidth="10" />
  </svg>
);
