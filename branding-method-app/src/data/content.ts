export interface Tool {
  id: string;
  name: string;
  description: string;
  meetQuestions: string[];
  playType: 'matrix' | 'map' | 'canvas' | 'journey' | 'ego' | 'pyramid' | 'territory' | 'axis' | 'friends' | 'list' | 'flower' | 'check' | 'naming' | 'board' | 'square';
  playQuestions: string[];
}

export interface Driver {
  id: number;
  name: string;
  description: string;
  tools: Tool[];
}

export const bookContent: Driver[] = [
  {
    id: 1,
    name: "The Brand Ego",
    description: "Conócete a ti mismo y a tu cliente. La base de todo proyecto.",
    tools: [
      {
        id: "dog-matrix",
        name: "The Dog Matrix",
        description: "Clasifica tus productos o servicios según su rentabilidad y potencial.",
        meetQuestions: [
          "¿Sabes qué productos te dan dinero hoy?",
          "¿Sabes cuáles son tus apuestas de futuro?",
          "¿Tienes productos que solo te quitan tiempo?"
        ],
        playType: 'matrix',
        playQuestions: ["Golden Retriever", "Pastor Alemán", "Chihuahua", "Gran Danés"]
      },
      {
        id: "feel-map",
        name: "The Feel Map",
        description: "Entiende qué siente tu cliente ante una necesidad.",
        meetQuestions: [
          "¿Qué frustraciones tiene tu cliente?",
          "¿Qué alegrías busca encontrar?",
          "¿Qué tareas intenta resolver?"
        ],
        playType: 'map',
        playQuestions: ["Frustraciones", "Alegrías", "Tareas del cliente"]
      },
      {
        id: "brand-desire",
        name: "Brand Desire Canvas",
        description: "Encuentra el punto de unión entre tu marca y el deseo del cliente.",
        meetQuestions: [
          "¿Qué ofreces tú?",
          "¿Qué desea el mercado?",
          "¿Dónde se cruzan ambos caminos?"
        ],
        playType: 'canvas',
        playQuestions: ["Atributos de Marca", "Deseos del Consumidor", "Punto de Deseo"]
      },
      {
        id: "attitudinal-journey",
        name: "Attitudinal Journey",
        description: "Mapea el viaje emocional de tu cliente.",
        meetQuestions: [
          "¿Cómo se siente antes de encontrarte?",
          "¿Qué experimenta durante la compra?",
          "¿Cómo cambia su vida después?"
        ],
        playType: 'journey',
        playQuestions: ["Antes", "Durante", "Después"]
      },
      {
        id: "brand-ego",
        name: "The Brand Ego",
        description: "Define la esencia y personalidad central de tu marca.",
        meetQuestions: [
          "¿Si tu marca fuera una persona, cómo sería?",
          "¿Qué valores son innegociables?",
          "¿Cuál es tu gran propósito?"
        ],
        playType: 'ego',
        playQuestions: ["Personalidad", "Valores", "Misión"]
      }
    ]
  },
  {
    id: 2,
    name: "The Brand Gang",
    description: "Analiza tu entorno y competencia para encontrar tu hueco.",
    tools: [
      {
        id: "max-pyramid",
        name: "The Max Pyramid",
        description: "Visualiza los niveles de competencia en tu sector.",
        meetQuestions: [
          "¿Quiénes son tus competidores directos?",
          "¿Quiénes ofrecen alternativas diferentes?",
          "¿Quiénes compiten por el mismo presupuesto?"
        ],
        playType: 'pyramid',
        playQuestions: ["Competencia Directa", "Competencia Indirecta", "Competencia por presupuesto"]
      },
      {
        id: "brand-territory",
        name: "The Brand Territory",
        description: "Define el espacio conceptual que quieres liderar.",
        meetQuestions: [
          "¿En qué territorio mental quieres vivir?",
          "¿Qué palabras quieres adueñarte?",
          "¿De qué temas quieres ser el referente?"
        ],
        playType: 'territory',
        playQuestions: ["Conceptos clave", "Temas de autoridad", "Tu territorio"]
      },
      {
        id: "abc-roll-axis",
        name: "ABC Roll Axis",
        description: "Posiciona tu marca en los ejes de Aspiracional vs Democrático y Facilitador vs Inspiracional.",
        meetQuestions: [
          "¿Buscan tus clientes elevar su estatus o ser parte de un grupo?",
          "¿Les das herramientas o les das motivación?",
          "¿Nike o Decathlon?"
        ],
        playType: 'axis',
        playQuestions: ["Consumer Roll (Aspiración vs Democrático)", "Brand Roll (Facilitador vs Inspiracional)"]
      },
      {
        id: "revolution-matrix",
        name: "Revolution Matrix",
        description: "Aprende de los resistentes e inspírate de los innovadores.",
        meetQuestions: [
          "¿Qué competidores son los líderes históricos?",
          "¿Quién está haciendo las cosas de forma diferente (Rocket)?",
          "¿Quién ha cambiado las reglas del juego (Radical)?"
        ],
        playType: 'matrix',
        playQuestions: ["Históricos (Master)", "Estrella (Rocket)", "Revolución (Radical)"]
      },
      {
        id: "five-friends",
        name: "The 5 Friends",
        description: "Busca patrones disruptivos fuera de tu sector.",
        meetQuestions: [
          "¿Qué 5 marcas te inspiran?",
          "¿Qué tienen en común aunque sean sectores distintos?",
          "¿Qué puedes aprender de un chef si vendes software?"
        ],
        playType: 'friends',
        playQuestions: ["Marca 1", "Marca 2", "Marca 3", "Marca 4", "Marca 5", "Patrones comunes"]
      }
    ]
  },
  {
    id: 3,
    name: "The Brand Essence",
    description: "Plataforma y ADN de marca. Tu propósito y visión.",
    tools: [
      {
        id: "five-ques",
        name: "Los 5 Qué's del Branding",
        description: "Construye valor desde lo que eres con 5 preguntas fundamentales.",
        meetQuestions: [
          "¿Qué evangelizas?",
          "¿Qué defiendes?",
          "¿Qué motivas?",
          "¿Qué elevas?",
          "¿Qué aportas?"
        ],
        playType: 'check',
        playQuestions: ["Evangelizas", "Defiendes", "Motivas", "Elevas", "Aportas"]
      },
      {
        id: "core-value",
        name: "The Core Value",
        description: "El corazón y mantra de tu marca en una sola frase.",
        meetQuestions: [
          "¿Qué espacio quieres ocupar en la mente de tus clientes?",
          "¿Puedes explicarlo para que lo entienda una abuela y su nieta?",
          "¿Cuál es tu mantra?"
        ],
        playType: 'ego',
        playQuestions: ["Sentimiento deseado", "Mantra (3 palabras)", "Elixir (1 palabra)"]
      },
      {
        id: "positioning-model",
        name: "Brand Positioning Model",
        description: "Estructura tu promesa, avales y por qué existes.",
        meetQuestions: [
          "¿Qué van a vivir gracias a ti?",
          "¿Cómo haces posible lo que prometes?",
          "¿Qué vas a aportar a lo ya existente?"
        ],
        playType: 'canvas',
        playQuestions: ["¿Qué? (Promesa)", "¿Cómo? (Avales)", "¿Por qué? (Propósito)"]
      },
      {
        id: "purpose-check",
        name: "Propósito Check",
        description: "Evalúa si tu propósito es real o puro pose.",
        meetQuestions: [
          "¿Impactas de forma positiva en tus 'no clientes'?",
          "¿Buscas beneficios más allá de los ingresos?",
          "¿Pasas del storytelling al storydoing?"
        ],
        playType: 'check',
        playQuestions: ["Doing Good Score (/10)", "Causas que defiendes", "Acciones de impacto"]
      },
      {
        id: "brand-values",
        name: "Brand Values",
        description: "Define los principios que guían tus actos y expresiones.",
        meetQuestions: [
          "¿Qué valor aportas a la sociedad?",
          "¿Qué valor te aportas a ti mismo?",
          "¿Qué valor aportas a tus clientes y competencia?"
        ],
        playType: 'flower',
        playQuestions: ["Valor Social", "Valor Interno", "Valor al Cliente", "Valor Competitivo"]
      }
    ]
  },
  {
    id: 4,
    name: "The Brand Identity",
    description: "Assets e identidad. ¿Cómo comunicas visual y verbalmente?",
    tools: [
      {
        id: "brand-symbol",
        name: "The Brand Symbol",
        description: "Capitaliza tu patrimonio inmaterial y asociaciones simbólicas.",
        meetQuestions: [
          "¿Qué ideales representas?",
          "¿A qué elementos (motor, motor, etc.) te asocias?",
          "¿Qué rituales o ritos vives?"
        ],
        playType: 'canvas',
        playQuestions: ["Ideales", "Asociaciones", "Símbolos", "Ritos"]
      },
      {
        id: "charisma-archetypes",
        name: "Brand Charisma Archetypes",
        description: "Elige tu arquetipo para atraer a tu 'tribu'.",
        meetQuestions: [
          "¿Eres Radical, Hero o Hedonist?",
          "¿Buscas Cambio o Estabilidad?",
          "¿Individualismo o Colectividad?"
        ],
        playType: 'list',
        playQuestions: ["Arquetipo principal", "Atributos clave", "Miedo a evitar"]
      },
      {
        id: "tone-voice",
        name: "Tone of Voice Path",
        description: "Define cómo hablas y qué deben transmitir tus mensajes.",
        meetQuestions: [
          "¿Cuál es tu tono de voz (serio, divertido, audaz)?",
          "¿Qué palabras son sagradas y cuáles están prohibidas?",
          "¿Cuál es tu territorio verbal?"
        ],
        playType: 'check',
        playQuestions: ["Tono", "Palabras Clave", "Palabras Prohibidas", "Guía de estilo"]
      },
      {
        id: "full-brand-board",
        name: "Full Brand Board",
        description: "Diseña tu universo visual: más allá del logo.",
        meetQuestions: [
          "¿Cómo sería la casa de tu marca?",
          "¿Qué tipografía, colores y fotografía te definen?",
          "¿Qué stickers o emojis usas?"
        ],
        playType: 'board',
        playQuestions: ["Logo & Símbolo", "Color & Tipografía", "Fotografía & Estilo"]
      },
      {
        id: "sense-square",
        name: "The Sense Square",
        description: "Activa tu marca a través de los 5 sentidos.",
        meetQuestions: [
          "¿A qué suena tu marca (Sonic Branding)?",
          "¿A qué huele o sabe?",
          "¿Qué texturas tiene?"
        ],
        playType: 'square',
        playQuestions: ["Oído", "Olfato/Gusto", "Tacto", "Vista"]
      }
    ]
  },
  {
    id: 5,
    name: "The Brand Experience",
    description: "Activación de marca. Tangibiliza tu promesa.",
    tools: [
      {
        id: "why-we",
        name: "Why We?",
        description: "Simplifica tu experiencia de valor para enamorar rápido.",
        meetQuestions: [
          "¿Qué problema resuelves?",
          "¿Qué te hace la mejor opción?",
          "¿Cuál es tu llamada a la acción?"
        ],
        playType: 'check',
        playQuestions: ["Problema solucionado", "Diferencial", "Call to Action"]
      },
      {
        id: "brand-narratives",
        name: "Brand Narratives",
        description: "Crea sagas de contenido que refuercen tu posicionamiento.",
        meetQuestions: [
          "¿Cuál es tu relato interno (para empleados)?",
          "¿Cuáles son tus 3 grandes sagas externas?",
          "¿Qué puntos de prueba (Proof Points) tienes?"
        ],
        playType: 'canvas',
        playQuestions: ["Relato Interno", "Sagas Externas", "Puntos de Anclaje"]
      },
      {
        id: "brand-rituals",
        name: "Brand Rituals",
        description: "Ritualiza las interacciones (In, During, Out).",
        meetQuestions: [
          "¿Qué siente el cliente al entrar (In)?",
          "¿Qué vive durante la compra?",
          "¿Cómo le contactas fuera de la experiencia (Out)?"
        ],
        playType: 'journey',
        playQuestions: ["In", "During", "Out"]
      },
      {
        id: "golden-moments",
        name: "The 10 Golden Moments",
        description: "Mapea los 10 momentos de oro del Customer Journey.",
        meetQuestions: [
          "¿Qué triggers activan el Momento Cero?",
          "¿Cómo superas las expectativas en el Momento 7?",
          "¿Cómo fomentas la recomendación?"
        ],
        playType: 'journey',
        playQuestions: ["Awareness a Decisión", "Compra a Recomendación"]
      },
      {
        id: "burn-pyramid",
        name: "The Burn Pyramid",
        description: "Pasa de ser un 'OK' a ser una experiencia 'BURN'.",
        meetQuestions: [
          "¿Haces las cosas bien (Basic) o haces algo WOW?",
          "¿Eres representativo de sus ideales (Burn)?",
          "¿Qué te hace trascendente?"
        ],
        playType: 'pyramid',
        playQuestions: ["Niveles Basic/OK", "Niveles WOW/LOL", "Nivel BURN (Trascendencia)"]
      }
    ]
  }
];
