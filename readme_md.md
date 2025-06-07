# 🎯 Foco Mágico

Um aplicativo de produtividade gamificado especialmente desenvolvido para crianças e adolescentes com TDAH.

## ✨ Sobre o Projeto

O **Foco Mágico** é uma plataforma que transforma o gerenciamento de tarefas e a técnica Pomodoro em uma experiência gamificada e envolvente, ajudando jovens com TDAH a desenvolverem melhores hábitos de produtividade através de:

- 🍅 **Timer Pomodoro Gamificado** - Sistema de foco com recompensas visuais
- ✅ **Gerenciamento de Tarefas** - Interface intuitiva e sem distrações
- 🏆 **Sistema de Recompensas** - XP, níveis, badges e conquistas
- 🤖 **Assistente IA** - Suporte personalizado com Google Gemini
- 📱 **PWA** - Funciona como app nativo em qualquer dispositivo

## 🛠 Tecnologias

- **Frontend:** Next.js 14 (App Router) + TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Backend:** Supabase (PostgreSQL)
- **IA:** Google Gemini API
- **Deploy:** Vercel + Supabase

## 🚀 Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/foco-magico.git
cd foco-magico
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente
```bash
cp .env.local.example .env.local
```

Edite o arquivo `.env.local` com suas chaves:
- Supabase URL e chave
- Google Gemini API key
- Outras configurações necessárias

### 4. Execute o projeto
```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Rotas de autenticação
│   ├── dashboard/         # Dashboard principal
│   ├── timer/             # Timer Pomodoro
│   ├── tasks/             # Gerenciamento de tarefas
│   ├── rewards/           # Sistema de recompensas
│   ├── ai-assistant/      # Assistente IA
│   └── layout.tsx         # Layout principal
├── components/            # Componentes React
│   ├── ui/               # Componentes base
│   ├── features/         # Componentes de funcionalidades
│   └── layout/           # Componentes de layout
├── hooks/                # Custom hooks
├── lib/                  # Configurações e utilitários
│   ├── supabase.ts       # Cliente Supabase
│   └── gemini.ts         # Cliente Gemini AI
├── stores/               # Zustand stores
├── types/                # Tipos TypeScript
└── utils/                # Funções utilitárias
```

## 🎮 Funcionalidades Principais

### Timer Pomodoro
- Timer circular animado
- Configurações personalizáveis (25/15/5 min)
- Sistema de streaks
- Ganho de XP por sessão completa
- Notificações visuais e sonoras

### Sistema de Tarefas
- CRUD completo de tarefas
- Categorização por cores/tags
- Níveis de dificuldade (Fácil/Médio/Difícil)
- Sistema de pontuação variável
- Filtros e busca inteligente

### Gamificação
- Sistema de XP e níveis
- Badges e conquistas
- Loja virtual de recompensas
- Progresso visual constante
- Animações motivadoras

### Assistente IA
- Chat em tempo real com Gemini
- Análise de padrões de produtividade
- Sugestões personalizadas para TDAH
- Coaching motivacional
- Relatórios inteligentes

## 🏗 Processo de Desenvolvimento

Este projeto está sendo desenvolvido seguindo 8 etapas principais:

1. ✅ **Configuração Inicial** - Setup completo do projeto
2. 🔄 **Sistema de Autenticação** - Login/registro com Supabase
3. 🔄 **Layout e Navegação** - Interface principal responsive
4. 🔄 **Timer Pomodoro** - Funcionalidade core gamificada
5. 🔄 **Sistema de Tarefas** - CRUD completo de tarefas
6. 🔄 **Recompensas** - Gamificação e motivação
7. 🔄 **Integração IA** - Assistente inteligente
8. 🔄 **PWA e Deploy** - Publicação e otimizações

## 🎯 Público-Alvo

- Crianças e adolescentes com TDAH
- Pais e educadores buscando ferramentas de apoio
- Qualquer pessoa que deseja melhorar sua produtividade

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint
- `npm run lint:fix` - Corrige problemas do ESLint
- `npm run format` - Formata código com Prettier
- `npm run type-check` - Verifica tipos TypeScript

## 📱 PWA Features

- Instalável em dispositivos móveis
- Funciona offline (recursos básicos)
- Notificações push para lembretes
- Ícones adaptativos
- Splash screen personalizada

## 🔒 Privacidade e Segurança

- Dados criptografados no Supabase
- Autenticação segura
- Compliance com LGPD
- Proteção especial para dados de menores

## 📞 Suporte

Para dúvidas, sugestões ou reportar bugs:
- Abra uma issue no GitHub
- Entre em contato pelo email: [seu-email@dominio.com]

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido com ❤️ para ajudar jovens com TDAH a alcançarem seu potencial máximo! 🌟