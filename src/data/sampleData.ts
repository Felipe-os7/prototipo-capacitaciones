import { Course } from '../types/Course';
import { User } from '../types/User';

export const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Fundamentos de Liderazgo',
    description: 'Domina los principios fundamentales del liderazgo efectivo en el entorno laboral actual. Aprende a inspirar equipos, tomar decisiones estratégicas y impulsar el éxito organizacional.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Liderazgo', 'Gestión', 'Comunicación'],
    level: 'Principiante',
    duration: '4 horas',
    enrollments: 1248,
    featured: true,
    modules: [
      {
        id: 'm1-1',
        title: 'Entendiendo los Estilos de Liderazgo',
        description: 'Explora diferentes enfoques de liderazgo y cuándo aplicarlos',
        duration: '45 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Los estilos de liderazgo varían según diferentes contextos y organizaciones. Este módulo explora el espectro de enfoques de liderazgo, desde autocrático hasta democrático, transformacional a transaccional.',
          sections: [
            {
              title: 'Liderazgo Transformacional',
              text: 'Los líderes transformacionales inspiran y motivan a sus equipos para superar las expectativas y crear cambios significativos.',
              imageUrl: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              bulletPoints: [
                'Inspira y motiva a los seguidores',
                'Crea una visión para el futuro',
                'Fomenta la innovación y el crecimiento',
                'Construye relaciones sólidas basadas en la confianza'
              ]
            },
            {
              title: 'Liderazgo Situacional',
              text: 'El liderazgo situacional requiere adaptar tu enfoque según el nivel de desarrollo de los miembros del equipo y los detalles de la tarea.',
              bulletPoints: [
                'Evalúa la competencia y el compromiso del equipo',
                'Ajusta el estilo de liderazgo según corresponda',
                'Equilibra comportamientos directivos y de apoyo',
                'Promueve el desarrollo a través de desafíos apropiados'
              ]
            }
          ]
        },
        resources: [
          {
            title: 'Evaluación de Estilos de Liderazgo',
            type: 'pdf',
            size: '2.4 MB'
          },
          {
            title: 'Casos de Estudio en Liderazgo',
            type: 'pdf',
            size: '3.1 MB'
          }
        ],
        quiz: {
          question: '¿Qué estilo de liderazgo se centra en inspirar a los seguidores a superar sus propios intereses por el bien de la organización?',
          options: [
            'Liderazgo autocrático',
            'Liderazgo transaccional',
            'Liderazgo transformacional',
            'Liderazgo laissez-faire'
          ],
          correctAnswer: 2
        }
      },
      {
        id: 'm1-2',
        title: 'Comunicación Efectiva',
        description: 'Desarrolla habilidades de comunicación claras e impactantes',
        duration: '50 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'La comunicación es la base del liderazgo efectivo. Este módulo cubre habilidades esenciales para una comunicación clara, impactante y empática en varios escenarios laborales.'
        },
        resources: [
          {
            title: 'Plantilla de Planificación de Comunicación',
            type: 'docx',
            size: '1.2 MB'
          }
        ]
      },
      {
        id: 'm1-3',
        title: 'Construyendo Equipos de Alto Rendimiento',
        description: 'Estrategias para desarrollar y motivar equipos exitosos',
        duration: '60 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Aprende cómo construir, desarrollar y mantener equipos de alto rendimiento que consistentemente logran resultados sobresalientes.'
        }
      },
      {
        id: 'm1-4',
        title: 'Toma de Decisiones Estratégicas',
        description: 'Marcos para tomar decisiones efectivas bajo presión',
        duration: '45 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Desarrolla tu capacidad para tomar decisiones sólidas, incluso en situaciones complejas o ambiguas.'
        }
      }
    ]
  },
  {
    id: '2',
    title: 'Fundamentos de Ciberseguridad',
    description: 'Obtén conocimientos fundamentales en principios de ciberseguridad, amenazas y mejores prácticas para proteger los datos y sistemas organizacionales de ataques maliciosos.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Tecnología', 'Seguridad', 'TI'],
    level: 'Intermedio',
    duration: '6 horas',
    enrollments: 978,
    featured: true,
    modules: [
      {
        id: 'm2-1',
        title: 'Entendiendo las Amenazas Cibernéticas',
        description: 'Identifica tipos comunes de amenazas y ataques de ciberseguridad',
        duration: '60 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Este módulo introduce los diversos tipos de amenazas cibernéticas que enfrentan las organizaciones hoy en día.'
        }
      },
      {
        id: 'm2-2',
        title: 'Estrategias de Protección de Datos',
        description: 'Mejores prácticas para asegurar información sensible',
        duration: '55 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Aprende estrategias esenciales para proteger los datos organizacionales y de clientes contra brechas.'
        }
      },
      {
        id: 'm2-3',
        title: 'Respuesta a Incidentes de Seguridad',
        description: 'Desarrolla protocolos para manejar brechas de seguridad',
        duration: '65 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Establece planes de respuesta efectivos para minimizar el daño de incidentes de seguridad.'
        }
      }
    ]
  },
  {
    id: '3',
    title: 'Gestión Efectiva de Proyectos',
    description: 'Aprende metodologías esenciales de gestión de proyectos, herramientas y técnicas para planificar, ejecutar y completar proyectos a tiempo y dentro del presupuesto.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Gestión de Proyectos', 'Liderazgo', 'Organización'],
    level: 'Intermedio',
    duration: '8 horas',
    enrollments: 1542,
    featured: true,
    modules: [
      {
        id: 'm3-1',
        title: 'Fundamentos de Planificación de Proyectos',
        description: 'Crea planes y cronogramas de proyecto completos',
        duration: '70 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Domina los fundamentos de la planificación de proyectos, desde la definición del alcance hasta el desarrollo del cronograma.'
        }
      },
      {
        id: 'm3-2',
        title: 'Gestión de Recursos',
        description: 'Optimiza la asignación y utilización de recursos del proyecto',
        duration: '55 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Aprende estrategias para gestionar efectivamente recursos humanos, financieros y materiales.'
        }
      },
      {
        id: 'm3-3',
        title: 'Gestión de Riesgos',
        description: 'Identifica, evalúa y mitiga riesgos del proyecto',
        duration: '60 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Desarrolla planes de gestión de riesgos para anticipar y abordar posibles desafíos del proyecto.'
        }
      }
    ]
  },
  {
    id: '4',
    title: 'Excelencia en Servicio al Cliente',
    description: 'Desarrolla las habilidades para ofrecer experiencias excepcionales al cliente que construyan lealtad y apoyen el crecimiento del negocio a través de comunicación efectiva y resolución de problemas.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Servicio al Cliente', 'Comunicación', 'Ventas'],
    level: 'Principiante',
    duration: '3 horas',
    enrollments: 876,
    featured: false,
    modules: [
      {
        id: 'm4-1',
        title: 'Entendiendo las Necesidades del Cliente',
        description: 'Técnicas para identificar y abordar los requerimientos del cliente',
        duration: '45 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Aprende cómo evaluar y responder efectivamente a diferentes necesidades y expectativas del cliente.'
        }
      },
      {
        id: 'm4-2',
        title: 'Habilidades de Comunicación',
        description: 'Mejora la comunicación verbal y escrita para interacciones con clientes',
        duration: '40 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Desarrolla habilidades de comunicación claras y empáticas para experiencias positivas del cliente.'
        }
      }
    ]
  },
  {
    id: '5',
    title: 'Fundamentos de Análisis de Datos',
    description: 'Aprende a recolectar, analizar e interpretar datos para impulsar decisiones comerciales informadas e identificar oportunidades de crecimiento y mejora organizacional.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Análisis de Datos', 'Tecnología', 'Inteligencia de Negocios'],
    level: 'Intermedio',
    duration: '7 horas',
    enrollments: 1205,
    featured: false,
    modules: [
      {
        id: 'm5-1',
        title: 'Introducción al Análisis de Datos',
        description: 'Conceptos básicos y enfoques para analizar datos',
        duration: '60 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Comprende los principios fundamentales y la importancia del análisis de datos en los negocios.'
        }
      },
      {
        id: 'm5-2',
        title: 'Técnicas de Visualización de Datos',
        description: 'Creación de representaciones visuales efectivas de datos',
        duration: '55 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Aprende a presentar datos visualmente para comunicar insights de manera clara y efectiva.'
        }
      }
    ]
  },
  {
    id: '6',
    title: 'Diversidad e Inclusión en el Trabajo',
    description: 'Desarrolla estrategias para crear un lugar de trabajo inclusivo que valore la diversidad, promueva la equidad y fomente un sentido de pertenencia para todos los empleados.',
    image: 'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Recursos Humanos', 'Gestión', 'Cultura'],
    level: 'Todos los niveles',
    duration: '4 horas',
    enrollments: 892,
    featured: false,
    modules: [
      {
        id: 'm6-1',
        title: 'Entendiendo la Diversidad e Inclusión',
        description: 'Conceptos clave y beneficios empresariales',
        duration: '50 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Explora el significado y la importancia de la diversidad e inclusión en el lugar de trabajo actual.'
        }
      },
      {
        id: 'm6-2',
        title: 'Construyendo Equipos Inclusivos',
        description: 'Estrategias para crear un ambiente de trabajo inclusivo',
        duration: '55 min',
        completed: false,
        content: {
          imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          text: 'Aprende enfoques prácticos para fomentar la inclusión y el sentido de pertenencia dentro de los equipos.'
        }
      }
    ]
  }
];

export const sampleUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  enrolledCourses: ['1', '3'],
  completedCourses: [],
  recentActivity: [
    {
      type: 'enrolled',
      message: 'Te inscribiste en "Gestión Efectiva de Proyectos"',
      date: '15 Oct 2023'
    },
    {
      type: 'progress',
      message: 'Completaste el Módulo 2 en "Fundamentos de Liderazgo"',
      date: '12 Oct 2023'
    },
    {
      type: 'enrolled',
      message: 'Te inscribiste en "Fundamentos de Liderazgo"',
      date: '10 Oct 2023'
    }
  ],
  goals: {
    coursesPerMonth: {
      target: 2,
      current: 1
    },
    hoursPerWeek: {
      target: 5,
      current: 3
    }
  },
  achievements: [
    {
      title: 'Aprendiz Rápido',
      description: 'Completó el primer módulo dentro de las 24 horas de inscripción',
      date: '11 Oct 2023'
    }
  ]
};