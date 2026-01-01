
export default function ToastContainor({ children }) {
  return (
    <div className="fixed top-4 right-4  flex flex-col gap-4 max-w-xs w-full sm:max-w-sm" style={{zIndex: "999"}}>
      {children}
    </div>
  );
}
