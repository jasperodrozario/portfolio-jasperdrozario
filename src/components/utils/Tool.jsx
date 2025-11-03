export default function Tool({ children }) {
  return (
    <div className="flex justify-center gap-2 items-center h-8 px-7 py-5 border-2 border-teal-800 rounded-full">
      {children}
    </div>
  );
}
