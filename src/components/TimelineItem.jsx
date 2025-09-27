export default function TimelineItem({ data, isLeft }) {
  const { date, title, company, description } = data;

  const containerClass = `mb-30 flex justify-between items-center w-full ${
    isLeft ? "flex-row-reverse" : ""
  }`;
  const contentClass = `w-200 ${
    isLeft ? "text-right mr-10" : "text-left ml-10"
  }`;

  return (
    <div className={containerClass}>
      <div className={`w-200 ${isLeft ? "ml-10" : "mr-10"}`}></div>
      <div className="relative z-10">
        <div
          className="
            w-5 h-5 
            bg-gray-800 
            border-2 border-[#63FFD9] 
            rounded-full
            
            after:content-['']
            after:absolute
            after:w-7
            after:h-7
            after:top-1/2 after:left-1/2
            after:-translate-y-1/2 after:-translate-x-1/2
            after:border-2 after:border-[#63FFD9]
            after:rounded-full
            after:opacity-0
            after:transition-opacity
            group-hover:after:opacity-100
          "
        ></div>
      </div>

      {/* Card Content */}
      <div className={`group ${contentClass}`}>
        <p className="text-sm text-[#63FFD9] mb-1">{date}</p>
        <h3 className="text-xl font-bold text-white group-hover:text-[#63FFD9] transition-colors">
          {title}
        </h3>
        <p className="text-md text-gray-400 mb-2">{company}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}
