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
        description: "Diferencia entre quien te compra y quien te consume.",
        meetQuestions: [
          "¿Quién paga la factura (The Guy)?",
          "¿Quién disfruta el beneficio (The Dog)?",
          "¿A quién aspiras llegar realmente (The Queen)?",
          "¿Quién te conoce pero no te elige (The Snake)?"
        ],
        playType: 'matrix',
        playQuestions: ["The Guy (Cliente)", "The Dog (Consumidor)", "The Queen (Ideal)", "The Snake (Cobra)"]
      },
      {
        id: "feel-map",
        name: "The Feel Map",
        description: "Mapa de empatía profunda: Yo Exterior vs Yo Interior.",
        meetQuestions: [
          "¿Qué estímulos externos recibe (FEEL OUT)?",
          "¿Qué piensa cuando nadie le ve (FEEL IN)?",
          "¿Qué miedos y anhelos reales tiene?"
        ],
        playType: 'map',
        playQuestions: ["FEEL OUT (Exterior)", "FEEL IN (Interior)", "Anhelos & Miedos"]
      },
      {
        id: "brand-desire",
        name: "Brand Desire Canvas",
        description: "Dimensiones del deseo simbólico y construcción de identidad.",
        meetQuestions: [
          "¿Qué pienso de mí mismo al usarte (SELF)?",
          "¿Qué pensaría de un amigo que te usa (FRIEND)?",
          "¿Qué quiero proyectar ante los demás (SOCIAL)?"
        ],
        playType: 'canvas',
        playQuestions: ["Self (Personal)", "Enemy (Celos)", "Friend (Afinidad)", "Social (Estatus)"]
      },
      {
        id: "attitudinal-journey",
        name: "Attitudinal Journey",
        description: "Mapea los puntos de prueba, emoción y tangibilidad.",
        meetQuestions: [
          "¿Qué pruebas necesita para confiar (Proof Points)?",
          "¿Cómo le haces sentir único (Feel Points)?",
          "¿Cómo lo haces real (Sweet Points)?"
        ],
        playType: 'journey',
        playQuestions: ["Proof Points (Confianza)", "Feel Points (Emoción)", "Sweet Points (Tangibilidad)"]
      },
      {
        id: "brand-ego",
        name: "The Brand Ego",
        description: "Define tu paracaídas: Placer Racional vs Dolor Irracional.",
        meetQuestions: [
          "¿Qué placer consciente aportas?",
          "¿Qué dolor inconsciente evitas?",
          "¿Cómo sobrevives en su mente?"
        ],
        playType: 'ego',
        playQuestions: ["Consciente (Placer)", "Inconsciente (Dolor)", "Personalidad & Mantra"]
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
        description: "Niveles de atributos: Higiénicos, Diferenciales y Singulares.",
        meetQuestions: [
          "¿Cuáles son tus básicos (Higiénicos)?",
          "¿Qué te hace mejor (Diferenciales)?",
          "¿Qué te hace único e inimitable (Singulares)?"
        ],
        playType: 'pyramid',
        playQuestions: ["Higiénicos (Básicos)", "Diferenciales (Valor)", "Singulares (Único)"]
      },
      {
        id: "brand-territory",
        name: "The Brand Territory",
        description: "Categorías de competición: Producto, Marca, Cliente o Sentido.",
        meetQuestions: [
          "¿Te centras en el Producto o en el Legado?",
          "¿En el beneficio del Cliente o en el Impacto Social?",
          "¿O buscas la Trascendencia (Meaning)?"
        ],
        playType: 'territory',
        playQuestions: ["Product/Brand Oriented", "Customer/Social Oriented", "Meaning Oriented"]
      },
      {
        id: "abc-roll-axis",
        name: "ABC Roll Axis",
        description: "Define tu música: Aspiracional vs Democrático / Facilitador vs Inspiracional.",
        meetQuestions: [
          "¿Elevas al cliente o lo unes a la masa?",
          "¿Le das herramientas o le das motivación?",
          "¿Dónde se ubica tu Roll de marca?"
        ],
        playType: 'axis',
        playQuestions: ["Consumer Roll (Estatus)", "Brand Roll (Actitud)"]
      },
      {
        id: "revolution-matrix",
        name: "Revolution Matrix",
        description: "Aprende de los Masters, Rockets y Radicales.",
        meetQuestions: [
          "¿Quién es el resiliente histórico (Master)?",
          "¿Quién es el líder de hoy (Rocket)?",
          "¿Quién rompe las reglas (Radical)?"
        ],
        playType: 'matrix',
        playQuestions: ["Masters (Resiliencia)", "Rockets (Velocidad)", "Radicales (Ruptura)"]
      },
      {
        id: "five-friends",
        name: "The 5 Friends",
        description: "Importa patrones de éxito de otros ecosistemas.",
        meetQuestions: [
          "¿Qué 5 marcas ajenas admiras?",
          "¿Qué puedes importar de su éxito?",
          "¿Cómo aplicarías su modelo a tu negocio?"
        ],
        playType: 'friends',
        playQuestions: ["Marca 1", "Marca 2", "Marca 3", "Marca 4", "Marca 5", "Patrones importables"]
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
        description: "Las 5 preguntas que decodifican tu valor real.",
        meetQuestions: [
          "¿Qué evangelizas y defiendes?",
          "¿Qué motivas y elevas?",
          "¿Qué aportas realmente?"
        ],
        playType: 'check',
        playQuestions: ["Evangelizas", "Defiendes", "Motivas", "Elevas", "Aportas"]
      },
      {
        id: "core-value",
        name: "The Core Value",
        description: "El faro y mantra: Mantra (3 palabras) y Elixir (1 palabra).",
        meetQuestions: [
          "¿Puedes explicar tu marca a una abuela y su nieta?",
          "¿Cuál es tu mantra matador?",
          "¿Cuál es la palabra que te resume (Elixir)?"
        ],
        playType: 'ego',
        playQuestions: ["Mantra de Marca", "Elixir (Palabra Única)", "Concepto Faro"]
      },
      {
        id: "positioning-model",
        name: "Brand Positioning Model",
        description: "Estructura matemática: Promesa, Avales y Propósito.",
        meetQuestions: [
          "¿Qué van a vivir gracias a ti (Promesa)?",
          "¿Qué avala tu promesa (Proof Points)?",
          "¿Por qué existes realmente (Propósito)?"
        ],
        playType: 'canvas',
        playQuestions: ["Promesa (¿Qué?)", "Avales (¿Cómo?)", "Propósito (¿Por qué?)"]
      },
      {
        id: "purpose-check",
        name: "Propósito Check",
        description: "Del Storytelling al Storydoing: Impacto real en el mundo.",
        meetQuestions: [
          "¿Tu propósito te cuesta dinero pero lo mantienes?",
          "¿Impactas en tus 'no clientes'?",
          "¿Qué acciones lo demuestran?"
        ],
        playType: 'check',
        playQuestions: ["Storydoing Score", "Causas & Impacto", "Acciones Reales"]
      },
      {
        id: "brand-values",
        name: "Brand Values",
        description: "Valores en 4 dimensiones: Social, Interno, Cliente y Competencia.",
        meetQuestions: [
          "¿Qué espera la sociedad de ti?",
          "¿Qué guía tus actos internos?",
          "¿Qué te hace competitivo?"
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
        description: "Patrimonio inmaterial: Ideales, Asociaciones, Símbolos y Ritos.",
        meetQuestions: [
          "¿Qué ideales representas?",
          "¿A qué elementos (naturaleza, motor, etc.) te unes?",
          "¿Qué iconografía construyes?"
        ],
        playType: 'canvas',
        playQuestions: ["Ideales", "Asociaciones", "Símbolos", "Ritos"]
      },
      {
        id: "charisma-archetypes",
        name: "Brand Charisma Archetypes",
        description: "Anclaje en los 12 patrones de personalidad universales.",
        meetQuestions: [
          "¿Eres Rebelde, Sabio o Héroe?",
          "¿Buscas Cambio, Control, Pertenencia o Independencia?",
          "¿Qué miedo personifica tu marca?"
        ],
        playType: 'list',
        playQuestions: ["Arquetipo Primario", "Personalidad", "Miedos a evitar"]
      },
      {
        id: "tone-voice",
        name: "Tone of Voice Path",
        description: "Identidad verbal: Tono, Voice Land, Palabras Sagradas y Prohibidas.",
        meetQuestions: [
          "¿Cómo hablas cuando nadie te ve?",
          "¿Qué palabras te definen?",
          "¿Qué lenguaje jamás usarías?"
        ],
        playType: 'check',
        playQuestions: ["Tono (Carácter)", "Voice Land (Territorio)", "Sagradas & Prohibidas", "Guía de Estilo"]
      },
      {
        id: "full-brand-board",
        name: "Full Brand Board",
        description: "Universo visual estratégico: tipografías, colores, stickers y emojis.",
        meetQuestions: [
          "¿Cómo es la casa de tu marca?",
          "¿Qué texturas y emojis te representan?",
          "¿Es tu estética coherente con tu esencia?"
        ],
        playType: 'board',
        playQuestions: ["Core Visual (Logo/Colores)", "Estilo (Foto/Icono)", "Detalles (Emoji/Stickers)"]
      },
      {
        id: "sense-square",
        name: "The Sense Square",
        description: "Identidad sensorial: Sonic, Aroma, Taste y Touch Branding.",
        meetQuestions: [
          "¿A qué suena tu marca?",
          "¿Qué aroma desprendes?",
          "¿Cómo se siente al tacto?"
        ],
        playType: 'square',
        playQuestions: ["Sonic", "Aroma/Taste", "Touch", "Visual"]
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
        description: "Simplicidad como experiencia: Problema, Mejor Opción y CTA.",
        meetQuestions: [
          "¿Qué problema gigante resuelves?",
          "¿Por qué eres tú y no el vecino?",
          "¿Qué tiene que hacer el cliente ahora?"
        ],
        playType: 'check',
        playQuestions: ["Problema Resuelto", "Propuesta de Valor", "Llamada a la Acción"]
      },
      {
        id: "brand-narratives",
        name: "Brand Narratives",
        description: "Sagas de contenido: Relato Interno y Externo.",
        meetQuestions: [
          "¿Cuál es tu historia de garaje?",
          "¿Qué 3 temas repetirás hasta la saciedad?",
          "¿Qué datos sostienen tus historias?"
        ],
        playType: 'canvas',
        playQuestions: ["Relato Interno (Cultura)", "Sagas Externas (Marca)", "Proof Points (Avales)"]
      },
      {
        id: "brand-rituals",
        name: "Brand Rituals",
        description: "Experiencias guionizadas: In, During y Out.",
        meetQuestions: [
          "¿Cómo es tu bienvenida (IN)?",
          "¿Cómo es el clímax de la compra (DURING)?",
          "¿Cómo es el 'presagio' de despedida (OUT)?"
        ],
        playType: 'journey',
        playQuestions: ["Momento IN", "Momento DURING", "Momento OUT", "Ambiental vs Personal"]
      },
      {
        id: "golden-moments",
        name: "The 10 Golden Moments",
        description: "Los 10 eslabones de oro desde la necesidad hasta el orgullo.",
        meetQuestions: [
          "¿Qué trigger activa la necesidad?",
          "¿Cómo motivas la evaluación?",
          "¿Cómo farda el cliente de ti (Social Bits)?"
        ],
        playType: 'journey',
        playQuestions: ["Zero/Active Bits", "Trust Bits (Compra)", "Win/Social Bits"]
      },
      {
        id: "burn-pyramid",
        name: "The Burn Pyramid",
        description: "Escalera de trascendencia: del OK al BURN (Marca a Fuego).",
        meetQuestions: [
          "¿Qué te hace seguro y competitivo (OK)?",
          "¿Qué te hace memorable (WOW)?",
          "¿Qué te hace representativo e irrepetible (BURN)?"
        ],
        playType: 'pyramid',
        playQuestions: ["Niveles BASIC/OK", "Niveles WOW/LOL", "Nivel BURN (Identidad)"]
      }
    ]
  }
];
