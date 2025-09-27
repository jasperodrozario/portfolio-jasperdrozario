export default function Timeline({ title, children }) {
  return (
    <section className="max-w-3xl mx-auto px-4">
      <h2 className="mb-12 text-[24px] font-bold text-center text-[#63FFD9]">
        {title}
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 w-[2px] h-full bg-gray-700/50 transform -translate-x-1/2" />
        {children}
      </div>
    </section>
  );
}
