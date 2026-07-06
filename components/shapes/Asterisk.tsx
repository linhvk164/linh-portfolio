type ShapeProps = {
  className?: string;
  fill?: string;
};

export function Asterisk({ className, fill = "currentColor" }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M40 8L43 32L62 18L48 38L72 40L48 42L62 62L43 48L40 72L37 48L18 62L32 42L8 40L32 38L18 18L37 32L40 8Z"
        fill={fill}
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
