export default function ToolCard({ skill, children }) {
  return (
    <div>
      <h1 className="text-lg font-bold mb-5">{skill}</h1>
      <div className="grid grid-cols-2 gap-4 items-center mt-2 rounded-lg">
        {children}
      </div>
    </div>
  );
}
