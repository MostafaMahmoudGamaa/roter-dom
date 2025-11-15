export default function Toast({ message, type = "info", onClose = () => {} }) {
  const typeStyles = {
    sucs: "bg-green-500",
    error: "bg-red-500",
    warn: "bg-yellow-500 text-black",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`
     text-white 
     px-4
     py-3
     rounded-lg
     shadow-lg
     flex
     items-center
     justify-between
     ${typeStyles[type] || typeStyles.info}
     `}
    >
      <p className="text-sm">{message}</p>

      <button
        onClick={onClose}
        className="ml-3 text-white font-bold focus:outline-none"
      >
        ×
      </button>
    </div>
  );
}
