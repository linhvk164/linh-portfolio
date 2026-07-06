type ShapeProps = {
  className?: string;
  fill?: string;
};

export function StarBurst({ className, fill = "currentColor" }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M40 4L44.5 28.5L68 24L50 40L68 56L44.5 51.5L40 76L35.5 51.5L12 56L30 40L12 24L35.5 28.5L40 4Z"
        fill={fill}
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M40 14L42 30L58 28L46 40L58 52L42 50L40 66L38 50L22 52L34 40L22 28L38 30L40 14Z"
        fill={fill}
        opacity="0.35"
      />
    </svg>
  );
}
