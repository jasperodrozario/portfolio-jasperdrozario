import { twMerge } from "tailwind-merge";

export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "my-1 py-[0.8em] px-[2em] border border-[#63FFD9] border-1 rounded-md text-white text-sm transition-all ease-out duration-220 hover:text-[#63FFD9] hover:border-[#63FFD9] hover:shadow-[0.25em_0.22em_#63FFD9] hover:-translate-[.25em] cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}
