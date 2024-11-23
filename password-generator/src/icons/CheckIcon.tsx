type classNameProps = {
  className: string;
};

export default function CheckIcon({ className }: classNameProps) {
  return (
    <svg
      width="13.67"
      height="9.6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 12 12"
    >
      <path stroke="#18171F" stroke-width="3" d="M1 5.607 4.393 9l8-8" />
    </svg>
  );
}
