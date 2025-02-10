type SparkleIconProps = React.SVGProps<SVGSVGElement>;

export default function SparkleIcon(props: SparkleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="var(--color-success-hover)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute z-10 size-4 -left-2 -top-2"
      {...props}
    >
      <path
        d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"
        style={{ fill: "var(--color-body)" }}
      ></path>
    </svg>
  );
}
