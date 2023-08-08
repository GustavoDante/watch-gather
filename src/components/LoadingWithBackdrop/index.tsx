export default function LoadingWithBackdrop() {
  return (
    <div className="absolute top-1/2 left-0 flex w-full justify-center items-center">
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        <div className="custom-loader w-12 h-12 rounded-full border-8 border-gray-300 border-t-purple-600 animate-spin"></div>
    </div>
  );
}