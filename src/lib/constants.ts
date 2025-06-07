// App Configuration
export const APP_NAME = 'Foco Mágico'
export const APP_DESCRIPTION = 'App de produtividade gamificado para TDAH'

// Timer Configuration
export const DEFAULT_POMODORO_TIME = 25 * 60 // 25 minutes in seconds
export const DEFAULT_SHORT_BREAK = 5 * 60 // 5 minutes in seconds
export const DEFAULT_LONG_BREAK = 15 * 60 // 15 minutes in seconds

// Gamification
export const XP_PER_POMODORO = 25
export const XP_PER_TASK = {
  easy: 10,
  medium: 25,
  hard: 50,
}

export const LEVELS = {
  1: { name: 'Iniciante', xpRequired: 0, color: 'gray' },
  2: { name: 'Aprendiz', xpRequired: 100, color: 'blue' },
  3: { name: 'Focado', xpRequired: 300, color: 'green' },
  4: { name: 'Determinado', xpRequired: 600, color: 'yellow' },
  5: { name: 'Mestre', xpRequired: 1000, color: 'purple' },
  6: { name: 'Lenda', xpRequired: 1500, color: 'pink' },
}

// Task Categories
export const TASK_CATEGORIES = [
  { id: 'study', name: 'Estudos', color: 'blue', icon: '📚' },
  { id: 'homework', name: 'Lição de Casa', color: 'green', icon: '✏️' },
  { id: 'reading', name: 'Leitura', color: 'purple', icon: '📖' },
  { id: 'exercise', name: 'Exercícios', color: 'red', icon: '🏃' },
  { id: 'creative', name: 'Criativo', color: 'yellow', icon: '🎨' },
  { id: 'chores', name: 'Tarefas Domésticas', color: 'gray', icon: '🏠' },
  { id: 'personal', name: 'Pessoal', color: 'pink', icon: '👤' },
  { id: 'other', name: 'Outros', color: 'indigo', icon: '📝' },
]

// Badges
export const BADGES = [
  {
    id: 'first_task',
    name: 'Primeira Tarefa',
    description: 'Complete sua primeira tarefa',
    icon: '🎯',
    rarity: 'common',
  },
  {
    id: 'streak_3',
    name: 'Sequência de 3',
    description: 'Complete 3 pomodoros seguidos',
    icon: '🔥',
    rarity: 'common',
  },
  {
    id: 'streak_7',
    name: 'Semana Focada',
    description: 'Complete pomodoros por 7 dias seguidos',
    icon: '⭐',
    rarity: 'rare',
  },
  {
    id: 'early_bird',
    name: 'Madrugador',
    description: 'Complete um pomodoro antes das 8h',
    icon: '🌅',
    rarity: 'uncommon',
  },
  {
    id: 'night_owl',
    name: 'Coruja Noturna',
    description: 'Complete um pomodoro depois das 22h',
    icon: '🦉',
    rarity: 'uncommon',
  },
  {
    id: 'task_master',
    name: 'Mestre das Tarefas',
    description: 'Complete 50 tarefas',
    icon: '👑',
    rarity: 'epic',
  },
  {
    id: 'focus_legend',
    name: 'Lenda do Foco',
    description: 'Complete 100 pomodoros',
    icon: '🏆',
    rarity: 'legendary',
  },
]

// Rewards Shop
export const REWARDS = [
  {
    id: 'extra_break',
    name: '5 min extras de pausa',
    description: 'Adicione 5 minutos à sua próxima pausa',
    cost: 50,
    icon: '⏰',
    category: 'time',
  },
  {
    id: 'custom_theme',
    name: 'Tema personalizado',
    description: 'Desbloqueie um novo tema para o app',
    cost: 100,
    icon: '🎨',
    category: 'customization',
  },
  {
    id: 'avatar_item',
    name: 'Item para avatar',
    description: 'Novo acessório para seu avatar',
    cost: 75,
    icon: '👕',
    category: 'avatar',
  },
  {
    id: 'sound_pack',
    name: 'Pack de sons',
    description: 'Novos sons de notificação',
    cost: 125,
    icon: '🔊',
    category: 'audio',
  },
]

// API Endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    profile: '/api/auth/profile',
  },
  tasks: {
    list: '/api/tasks',
    create: '/api/tasks',
    update: (id: string) => `/api/tasks/${id}`,
    delete: (id: string) => `/api/tasks/${id}`,
  },
  timer: {
    sessions: '/api/timer/sessions',
    stats: '/api/timer/stats',
  },
  gamification: {
    profile: '/api/gamification/profile',
    badges: '/api/gamification/badges',
    rewards: '/api/gamification/rewards',
  },
  ai: {
    chat: '/api/ai/chat',
    analysis: '/api/ai/analysis',
    suggestions: '/api/ai/suggestions',
  },
}

// Local Storage Keys
export const STORAGE_KEYS = {
  user: 'foco_magico_user',
  settings: 'foco_magico_settings',
  timer: 'foco_magico_timer',
  tasks: 'foco_magico_tasks',
  theme: 'foco_magico_theme',
}

// Error Messages
export const ERROR_MESSAGES = {
  generic: 'Algo deu errado. Tente novamente.',
  network: 'Erro de conexão. Verifique sua internet.',
  auth: {
    invalid_credentials: 'Email ou senha incorretos.',
    user_not_found: 'Usuário não encontrado.',
    email_already_exists: 'Este email já está em uso.',
    weak_password: 'A senha deve ter pelo menos 6 caracteres.',
  },
  validation: {
    required_field: 'Este campo é obrigatório.',
    invalid_email: 'Email inválido.',
    password_mismatch: 'As senhas não coincidem.',
  },
}

// Success Messages
export const SUCCESS_MESSAGES = {
  task_created: 'Tarefa criada com sucesso!',
  task_completed: 'Parabéns! Tarefa concluída!',
  pomodoro_completed: 'Pomodoro concluído! Você ganhou XP!',
  level_up: 'Parabéns! Você subiu de nível!',
  badge_earned: 'Nova conquista desbloqueada!',
  profile_updated: 'Perfil atualizado com sucesso!',
}