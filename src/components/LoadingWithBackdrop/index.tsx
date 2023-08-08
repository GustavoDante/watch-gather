export default function LoadingWithBackdrop() {
  return (
    <div className="absolute left-0 top-1/2 flex w-full items-center justify-center">
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      <div className="custom-loader border-gray-300 h-12 w-12 animate-spin rounded-full border-8 border-t-purple-600"></div>
    </div>
  )
}
