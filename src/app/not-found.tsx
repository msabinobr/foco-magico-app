import Link from 'next/link'
import { Home, Sparkles } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            Ops! Parece que esta página desapareceu como mágica. 
            Vamos te levar de volta ao caminho certo!
          </p>
        </div>
        
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>Voltar ao Início</span>
        </Link>
      </div>
    </div>
  )
}