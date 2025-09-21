import { twMerge } from "tailwind-merge";

export default function Footer({ className, ...props }) {
  const content = "Designed and built with <3 by";
  return (
    <footer className={twMerge("text-center", className)} {...props}>
      <p>{content}</p>
      <p>Jasper Oliver D Rozario</p>
    </footer>
  );
}
