export default function ContactForm({
  children,
  link,
  heading,
  body,
  className,
}) {
  if (link === "") {
    return (
      <div className="w-2/3">
        <div className="flex items-center space-x-4 p-2 border-2 group border-[#63FFD9]/10 rounded-xl hover:border-teal-800 hover:translate-x-2 transition-all duration-150">
          {children}
          <div>
            <h3 className="font-medium group-hover:text-[#63FFD9]">
              {heading}
            </h3>
            <p className="text-gray-400">{body}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <a className="w-2/3" href={link} target="_blank">
      <div className="flex items-center space-x-4 p-2 border-2 group border-[#63FFD9]/10 rounded-xl hover:border-teal-800 hover:translate-x-2 transition-all duration-150">
        {children}
        <div>
          <h3 className="font-medium group-hover:text-[#63FFD9]">{heading}</h3>
          <p className="text-gray-400">{body}</p>
        </div>
      </div>
    </a>
  );
}
