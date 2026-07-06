type ShapeProps = {
  className?: string;
  fill?: string;
};

export function Pentagon({ className, fill = "currentColor" }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M40 10C41.5 10 43 10.8 43.8 12.2L62 42.5C62.8 43.8 62.8 45.2 62 46.5L43.8 67.8C43 69.2 41.5 70 40 70C38.5 70 37 69.2 36.2 67.8L18 46.5C17.2 45.2 17.2 43.8 18 42.5L36.2 12.2C37 10.8 38.5 10 40 10Z"
        fill={fill}
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
