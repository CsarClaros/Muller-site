export interface Producto {
    id: number;
    name: string;
    category: string;
    modelo: string;

    description: string;
    image: string;

    features: string[];
    specs: {
        [key: string]: string | number;
    };
}

export const PRODUCTOS: Producto[] = [
    // =========================
    // GENERADORES
    // =========================
    {
        id: 1,
        name: 'Generador Inverter Silencioso',
        category: 'Generadores',
        modelo: 'INV-2000',
        description: 'Generador portátil con tecnología inverter, ideal para equipos electrónicos.',
        image: 'assets/images/products/generador1.jpg',
        features: [
            'Bajo nivel de ruido',
            'Protección contra sobrecarga',
            'Protección por bajo nivel de aceite',
            'Salida estable',
            'Alta eficiencia',
        ],
        specs: {
            tipo: 'Inverter',
            voltaje: '110/220V',
            frecuencia: '50/60Hz',
            combustible: 'Gasolina',
            arranque: 'Manual',
        },
    },

    {
        id: 2,
        name: 'Generador Open Frame',
        category: 'Generadores',
        modelo: 'OF-3500',
        description: 'Generador de estructura abierta de alta resistencia.',
        image: 'assets/productos/generador2.jpg',
        features: [
            'Alta potencia',
            'Estructura reforzada',
            'Uso continuo',
            'Fácil mantenimiento',
        ],
        specs: {
            tipo: 'Open Frame',
            voltaje: '220V',
            frecuencia: '60Hz',
            combustible: 'Gasolina',
        },
    },

    {
        id: 3,
        name: 'Generador Diésel',
        category: 'Generadores',
        modelo: 'DG-5000',
        description: 'Generador diésel para uso industrial y continuo.',
        image: 'assets/productos/generador3.jpg',
        features: ['Alto rendimiento', 'Bajo consumo', 'Panel digital', 'Salida estable'],
        specs: {
            tipo: 'Diésel',
            potencia: '5000W',
            combustible: 'Diésel',
            enfriamiento: 'Por aire',
        },
    },

    // =========================
    // HIDROLAVADORAS
    // =========================
    {
        id: 4,
        name: 'Hidrolavadora a Gasolina',
        category: 'Hidrolavadoras',
        modelo: 'HPW-3000',
        description: 'Equipo de alta presión para limpieza profesional.',
        image: 'assets/productos/hidrolavadora1.jpg',
        features: ['Alta presión', 'Uso profesional', 'Estructura robusta', 'Tanque de espuma'],
        specs: {
            tipo: 'Gasolina',
            presion: 'Alta',
            uso: 'Profesional',
        },
    },

    {
        id: 5,
        name: 'Hidrolavadora Eléctrica',
        category: 'Hidrolavadoras',
        modelo: 'EPW-2000',
        description: 'Hidrolavadora compacta para uso doméstico.',
        image: 'assets/productos/hidrolavadora2.jpg',
        features: ['Diseño compacto', 'Fácil transporte', 'Bajo consumo', 'Uso doméstico'],
        specs: {
            tipo: 'Eléctrica',
            voltaje: '220V',
        },
    },

    // =========================
    // MOTORES
    // =========================
    {
        id: 6,
        name: 'Motor a Gasolina 170F',
        category: 'Motores',
        modelo: '170F',
        description: 'Motor de 4 tiempos refrigerado por aire.',
        image: 'assets/productos/motor1.jpg',
        features: ['Monocilíndrico', 'Alta eficiencia', 'Bajo consumo'],
        specs: {
            cilindrada: '196cc',
            potencia: '4.7kW',
            rpm: '3600',
        },
    },

    {
        id: 7,
        name: 'Motor Diésel',
        category: 'Motores',
        modelo: 'D180',
        description: 'Motor diésel de alto rendimiento.',
        image: 'assets/productos/motor2.jpg',
        features: ['Alta durabilidad', 'Bajo consumo', 'Uso industrial'],
        specs: {
            tipo: 'Diésel',
            enfriamiento: 'Aire',
        },
    },

    // =========================
    // BOMBAS
    // =========================
    {
        id: 8,
        name: 'Bomba de Agua',
        category: 'Bombas',
        modelo: 'WP-80',
        description: 'Bomba de alto caudal para uso agrícola.',
        image: 'assets/productos/bomba1.jpg',
        features: ['Alta capacidad', 'Estructura de aluminio', 'Uso continuo'],
        specs: {
            diametro: '3 pulgadas',
            caudal: 'Alto',
        },
    },

    // =========================
    // COMPRESORES
    // =========================
    {
        id: 9,
        name: 'Compresor de Aire',
        category: 'Compresores',
        modelo: 'AC-50L',
        description: 'Compresor lubricado de alta eficiencia.',
        image: 'assets/productos/compresor1.jpg',
        features: ['Bajo ruido', 'Alta eficiencia', 'Uso profesional'],
        specs: {
            capacidad: '50L',
            tipo: 'Lubricado',
        },
    },

    // =========================
    // CONSTRUCCIÓN
    // =========================
    {
        id: 10,
        name: 'Cortadora de Concreto',
        category: 'Construcción',
        modelo: 'CC-500',
        description: 'Equipo robusto para corte de concreto.',
        image: 'assets/productos/construccion1.jpg',
        features: ['Alta precisión', 'Estructura robusta', 'Uso en obra'],
        specs: {
            uso: 'Profesional',
        },
    },
];
