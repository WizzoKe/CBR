export default function Card({ img, title, description, icon }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-orange-500 transition shadow-xl">
      {img && (
        <img
          src={img}
          className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
        />
      )}

      <div className="p-6">
        {icon && <div className="text-orange-500 text-3xl mb-3">{icon}</div>}

        <h3 className="text-2xl font-semibold">{title}</h3>

        {description && (
          <p className="text-gray-300 mt-2">{description}</p>
        )}
      </div>
    </div>
  );
}
