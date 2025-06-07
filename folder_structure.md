# 📁 Estrutura Completa de Pastas - Foco Mágico

Crie essa estrutura de pastas no seu projeto:

```
foco-magico/
├── .env.local.example
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── icons/              # Ícones do PWA (criar no PROMPT 8)
│   ├── images/             # Imagens do app
│   ├── sounds/             # Sons de notificação
│   ├── favicon.ico
│   └── manifest.json       # Será criado no PROMPT 8
└── src/
    ├── app/
    │   ├── (auth)/
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   ├── register/
    │   │   │   └── page.tsx
    │   │   └── layout.tsx
    │   ├── dashboard/
    │   │   └── page.tsx
    │   ├── timer/
    │   │   └── page.tsx
    │   ├── tasks/
    │   │   ├── page.tsx
    │   │   └── [id]/
    │   │       └── page.tsx
    │   ├── rewards/
    │   │   └── page.tsx
    │   ├── ai-assistant/
    │   │   └── page.tsx
    │   ├── profile/
    │   │   └── page.tsx
    │   ├── settings/
    │   │   └── page.tsx
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── loading.tsx
    │   ├── not-found.tsx
    │   └── page.tsx
    ├── components/
    │   ├── ui/
    │   │   ├── button.tsx
    │   │   ├── input.tsx
    │   │   ├── card.tsx
    │   │   ├── modal.tsx
    │   │   ├── toast.tsx
    │   │   ├── progress-bar.tsx
    │   │   ├── badge.tsx
    │   │   └── index.ts
    │   ├── features/
    │   │   ├── auth/
    │   │   │   ├── login-form.tsx
    │   │   │   ├── register-form.tsx
    │   │   │   ├── auth-provider.tsx
    │   │   │   └── protected-route.tsx
    │   │   ├── timer/
    │   │   │   ├── pomodoro-timer.tsx
    │   │   │   ├── timer-controls.tsx
    │   │   │   ├── timer-settings.tsx
    │   │   │   └── timer-stats.tsx
    │   │   ├── tasks/
    │   │   │   ├── task-list.tsx
    │   │   │   ├── task-card.tsx
    │   │   │   ├── add-task.tsx
    │   │   │   ├── task-filters.tsx
    │   │   │   └── task-search.tsx
    │   │   ├── rewards/
    │   │   │   ├── xp-progress.tsx
    │   │   │   ├── badges-grid.tsx
    │   │   │   ├── rewards-shop.tsx
    │   │   │   └── level-up-modal.tsx
    │   │   ├── ai/
    │   │   │   ├── gemini-chat.tsx
    │   │   │   ├── suggestions-panel.tsx
    │   │   │   ├── productivity-analysis.tsx
    │   │   │   └── ai-coaching.tsx
    │   │   └── dashboard/
    │   │       ├── stats-cards.tsx
    │   │       ├── activity-chart.tsx
    │   │       ├── quick-actions.tsx
    │   │       └── recent-activity.tsx
    │   └── layout/
    │       ├── header.tsx
    │       ├── sidebar.tsx
    │       ├── footer.tsx
    │       ├── mobile-nav.tsx
    │       ├── breadcrumbs.tsx
    │       └── theme-provider.tsx
    ├── hooks/
    │   ├── useAuth.ts
    │   ├── useTimer.ts
    │   ├── useTasks.ts
    │   ├── useGamification.ts
    │   ├── useGemini.ts
    │   ├── useLocalStorage.ts
    │   ├── useDebounce.ts
    │   └── useNotifications.ts
    ├── lib/
    │   ├── supabase.ts
    │   ├── gemini.ts
    │   ├── validations.ts
    │   ├── constants.ts
    │   ├── database.types.ts
    │   └── utils.ts
    