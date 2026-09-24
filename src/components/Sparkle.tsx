type SparkleProps = {
  className?: string;
};

export default function Sparkle({ className = "" }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 0 L8.6 7.4 L16 8 L8.6 8.6 L8 16 L7.4 8.6 L0 8 L7.4 7.4 Z" />
    </svg>
  );
}