export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 transition font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
