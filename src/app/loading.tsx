import { Sparkles } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center animate-bounce-soft">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl animate-ping opacity-20"></div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Foco Mágico</h2>
        <p className="text-gray-600">Carregando sua experiência...</p>
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}