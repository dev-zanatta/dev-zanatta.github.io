// Campos `tagline`, `description` e `type` são objetos { pt, en, es }.
// Resolva com pickLocalized(campo, locale) de src/i18n/utils.js.
export const projects = [
  {
    id: 'salonier',
    num: '01',
    name: 'Salonier',
    tagline: {
      pt: 'SaaS completo para gestão de salões de beleza',
      en: 'Complete SaaS for beauty salon management',
      es: 'SaaS completo para la gestión de salones de belleza',
    },
    description: {
      pt: 'Plataforma SaaS com agendamento online, controle financeiro, gestão de clientes e profissionais. Disponível como aplicativo web desktop e app mobile para clientes e colaboradores.',
      en: 'SaaS platform with online booking, financial control, client and staff management. Available as a desktop web application and as a mobile app for clients and staff.',
      es: 'Plataforma SaaS con reservas online, control financiero, gestión de clientes y profesionales. Disponible como aplicación web de escritorio y app móvil para clientes y colaboradores.',
    },
    stack: ['Vue 3', 'Quasar', 'Laravel', 'PostgreSQL', 'Capacitor'],
    type: {
      pt: 'SaaS · Web · Mobile',
      en: 'SaaS · Web · Mobile',
      es: 'SaaS · Web · Móvil',
    },
    link: 'https://comece.salonier.com.br/',
  },
  {
    id: 'decasa',
    num: '02',
    name: 'Decasa',
    tagline: {
      pt: 'Gerenciamento inteligente do lar',
      en: 'Smart home management',
      es: 'Gestión inteligente del hogar',
    },
    description: {
      pt: 'Sistema centralizado para organizar a casa: registro de gastos com frequência, tarefas domésticas, listas de compras, compromissos, gestão dos pets. Tudo em um único lugar.',
      en: 'A centralized system to organize the home: recurring expense tracking, household chores, shopping lists, appointments and pet care. Everything in one place.',
      es: 'Sistema centralizado para organizar la casa: registro de gastos recurrentes, tareas domésticas, listas de compras, compromisos y gestión de mascotas. Todo en un único lugar.',
    },
    stack: ['Vue 3', 'Quasar', 'Laravel', 'PostgreSQL', 'Capacitor'],
    type: {
      pt: 'Mobile',
      en: 'Mobile',
      es: 'Móvil',
    },
    link: null,
  },
  {
    id: 'zntt-taskie',
    num: '03',
    name: 'zntt-control / Taskie',
    tagline: {
      pt: 'App desktop para produtividade e controle de tarefas',
      en: 'Desktop app for productivity and task management',
      es: 'App de escritorio para productividad y control de tareas',
    },
    description: {
      pt: 'Aplicativo desktop nativo para Windows, construído com Tauri e Vue 3. Integrado a uma API Django para sincronização entre o app desktop e mobile.',
      en: 'Native Windows desktop application built with Tauri and Vue 3. Integrated with a Django API to keep the desktop and mobile apps in sync.',
      es: 'Aplicación de escritorio nativa para Windows, construida con Tauri y Vue 3. Integrada con una API Django para sincronizar las apps de escritorio y móvil.',
    },
    stack: ['Tauri', 'Vue 3', 'Django', 'Python', 'PostgreSQL'],
    type: {
      pt: 'Desktop Windows · Mobile',
      en: 'Windows Desktop · Mobile',
      es: 'Escritorio Windows · Móvil',
    },
    link: null,
  },
  {
    id: 'mecanica-agil',
    num: '04',
    name: 'Mecânica Ágil',
    tagline: {
      pt: 'Gestão completa para oficinas mecânicas',
      en: 'Complete management for auto repair shops',
      es: 'Gestión completa para talleres mecánicos',
    },
    description: {
      pt: 'Sistema web transformado em app Android via Capacitor. Controla ordens de serviço, estoque de peças, clientes, financeiro e histórico de manutenções dos veículos.',
      en: 'Web system turned into an Android app via Capacitor. Manages service orders, parts inventory, clients, finances and vehicle maintenance history.',
      es: 'Sistema web convertido en app Android vía Capacitor. Controla órdenes de servicio, inventario de piezas, clientes, finanzas e historial de mantenimiento de los vehículos.',
    },
    stack: ['Laravel', 'Quasar', 'Vue 3', 'Capacitor', 'PostgreSQL'],
    type: {
      pt: 'SaaS · Web · Mobile',
      en: 'SaaS · Web · Mobile',
      es: 'SaaS · Web · Móvil',
    },
    link: 'https://www.mecanicaagil.com.br/',
  },
  {
    id: 'gearhead',
    num: '05',
    name: 'GearHead',
    tagline: {
      pt: 'Rede social para quem respira automobilismo',
      en: 'A social network for those who live and breathe cars',
      es: 'Red social para quienes respiran automovilismo',
    },
    description: {
      pt: 'Comunidade online onde entusiastas de carros compartilham seus veículos, encontros, modificações e histórias. Feed, perfis, garage virtual e eventos por região.',
      en: 'An online community where car enthusiasts share their vehicles, meetups, modifications and stories. Feed, profiles, virtual garage and events by region.',
      es: 'Comunidad online donde los entusiastas de los coches comparten sus vehículos, encuentros, modificaciones e historias. Feed, perfiles, garaje virtual y eventos por región.',
    },
    stack: ['PHP/Laravel', 'PostgreSQL'],
    type: {
      pt: 'Web · WebApp',
      en: 'Web · WebApp',
      es: 'Web · WebApp',
    },
    link: null,
  },
  {
    id: 'somae',
    num: '06',
    name: 'Soma-Σ',
    tagline: {
      pt: 'Aplicativo para motoristas de aplicativo.',
      en: 'An app for rideshare drivers.',
      es: 'Aplicación para conductores de apps de transporte.',
    },
    description: {
      pt: 'Aplicativo para gestão de finanças pessoais focada para os motoristas de aplicativo. Histórico de ganhos, gastos, manutenções, insights.',
      en: 'Personal finance management app focused on rideshare drivers. Earnings history, expenses, maintenance records and insights.',
      es: 'App de gestión de finanzas personales enfocada en los conductores de apps de transporte. Historial de ganancias, gastos, mantenimientos e insights.',
    },
    stack: ['Vue 3', 'Quasar', 'Laravel', 'PostgreSQL', 'Capacitor'],
    type: {
      pt: 'Mobile',
      en: 'Mobile',
      es: 'Móvil',
    },
    link: null,
  },
];
