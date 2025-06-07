import Link from 'next/link'
import { Sparkles, Target, Brain, Gamepad2 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Foco Mágico</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Entrar
            </Link>
            <Link 
              href="/register" 
              className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Começar
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Especialmente desenvolvido para TDAH</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme sua
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                {' '}produtividade{' '}
              </span>
              em diversão
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Um app gamificado que ajuda crianças e adolescentes com TDAH a 
              desenvolverem foco, organizarem tarefas e celebrarem conquistas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/register" 
              className="bg-primary-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Começar Gratuitamente
            </Link>
            <Link 
              href="/demo" 
              className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Ver Demonstração
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timer Pomodoro</h3>
              <p className="text-gray-600">
                Técnica de foco gamificada com recompensas visuais e sistema de streaks para manter a motivação.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Gamepad2 className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sistema de Recompensas</h3>
              <p className="text-gray-600">
                Ganhe XP, suba de nível, desbloqueie badges e troque pontos por recompensas personalizadas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assistente IA</h3>
              <p className="text-gray-600">
                Suporte personalizado com dicas, análises de produtividade e coaching motivacional.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                <div className="text-gray-600">Melhoria no foco</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">87%</div>
                <div className="text-gray-600">Tarefas concluídas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-600 mb-2">92%</div>
                <div className="text-gray-600">Satisfação dos pais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning-600 mb-2">10k+</div>
                <div className="text-gray-600">Jovens ajudados</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 Foco Mágico. Desenvolvido com ❤️ para ajudar jovens com TDAH.</p>
        </div>
      </footer>
    </div>
  )
}