export interface Producto {
  id: number;
  name: string;
  category: string;
  model: string;

  description: string;

  image: string; // main image for cards
  gallery: string[]; // images for detail gallery

  features: string[];

  specs: {
    [key: string]: string | number;
  };
}

export const PRODUCTOS: Producto[] = [
  // =========================
  // GENERATORS
  // =========================

  {
    id: 1,
    name: 'Silent Inverter Generator',
    category: 'Generators',
    model: 'INV-2000',

    description:
      'Portable inverter generator designed to deliver stable and reliable power for sensitive electronic equipment.',

    image: 'assets/images/products/generators/inv2000/main.webp',

    gallery: [
      'assets/images/products/generators/inv2000/1.webp',
      'assets/images/products/generators/inv2000/2.webp',
      'assets/images/products/generators/inv2000/3.webp',
    ],

    features: [
      'Low noise operation',
      'Overload protection',
      'Low oil shutdown protection',
      'Stable power output',
      'High energy efficiency',
    ],

    specs: {
      type: 'Inverter',
      voltage: '110 / 220 V',
      frequency: '50 / 60 Hz',
      fuel: 'Gasoline',
      start: 'Manual',
    },
  },

  {
    id: 2,
    name: 'Open Frame Generator',
    category: 'Generators',
    model: 'OF-3500',

    description:
      'Heavy-duty open frame generator designed for construction sites and demanding environments.',

    image: 'assets/images/products/generators/of3500/main.webp',

    gallery: [
      'assets/images/products/generators/of3500/1.webp',
      'assets/images/products/generators/of3500/2.webp',
      'assets/images/products/generators/of3500/3.webp',
    ],

    features: [
      'High power output',
      'Reinforced frame structure',
      'Continuous operation capability',
      'Easy maintenance',
    ],

    specs: {
      type: 'Open Frame',
      voltage: '220 V',
      frequency: '60 Hz',
      fuel: 'Gasoline',
    },
  },

  // {
  //     id: 3,
  //     name: 'Diesel Power Generator',
  //     category: 'Generators',
  //     model: 'DG-5000',

  //     description:
  //         'Industrial diesel generator designed for reliable power supply in continuous operations.',

  //     image: 'assets/images/products/generators/dg5000/main.webp',

  //     gallery: [
  //         'assets/images/products/generators/dg5000/1.webp',
  //         'assets/images/products/generators/dg5000/2.webp',
  //         'assets/images/products/generators/dg5000/3.webp',
  //     ],

  //     features: [
  //         'High performance',
  //         'Low fuel consumption',
  //         'Digital control panel',
  //         'Stable power output',
  //     ],

  //     specs: {
  //         type: 'Diesel',
  //         power_output: '5000 W',
  //         fuel: 'Diesel',
  //         cooling: 'Air cooled',
  //     },
  // },

  // =========================
  // PRESSURE WASHERS
  // =========================

  {
    id: 4,
    name: 'Gasoline Pressure Washer',
    category: 'Pressure Washers',
    model: 'HPW-3000',

    description: 'High-pressure washer designed for professional cleaning applications.',

    image: 'assets/images/products/washers/hpw3000/main.webp',

    gallery: [
      'assets/images/products/washers/hpw3000/1.webp',
      'assets/images/products/washers/hpw3000/2.webp',
      'assets/images/products/washers/hpw3000/3.webp',
    ],

    features: [
      'High pressure performance',
      'Professional grade cleaning',
      'Heavy-duty frame structure',
      'Integrated foam tank',
    ],

    specs: {
      type: 'Gasoline',
      pressure_level: 'High',
      usage: 'Professional',
    },
  },

  {
    id: 5,
    name: 'Electric Pressure Washer',
    category: 'Pressure Washers',
    model: 'EPW-2000',

    description: 'Compact electric pressure washer suitable for residential cleaning tasks.',

    image: 'assets/images/products/washers/epw2000/main.webp',

    gallery: [
      'assets/images/products/washers/epw2000/1.webp',
      'assets/images/products/washers/epw2000/2.webp',
      'assets/images/products/washers/epw2000/3.webp',
    ],

    features: [
      'Compact design',
      'Easy transportation',
      'Low power consumption',
      'Ideal for residential use',
    ],

    specs: {
      type: 'Electric',
      voltage: '220 V',
    },
  },

  // =========================
  // ENGINES
  // =========================

  {
    id: 6,
    name: 'Gasoline Engine 170F',
    category: 'Engines',
    model: '170F',

    description:
      'Four-stroke gasoline engine with air cooling system designed for agricultural and industrial machinery.',

    image: 'assets/images/products/engines/170f/main.webp',

    gallery: [
      'assets/images/products/engines/170f/1.webp',
      'assets/images/products/engines/170f/2.webp',
      'assets/images/products/engines/170f/3.webp',
    ],

    features: ['Single cylinder engine', 'High efficiency performance', 'Low fuel consumption'],

    specs: {
      displacement: '196 cc',
      power_output: '4.7 kW',
      rpm: '3600',
    },
  },

  // {
  //     id: 7,
  //     name: 'Industrial Diesel Engine',
  //     category: 'Engines',
  //     model: 'D180',

  //     description:
  //         'High-performance diesel engine designed for industrial equipment and heavy machinery.',

  //     image: 'assets/images/products/engines/d180/main.webp',

  //     gallery: [
  //         'assets/images/products/engines/d180/1.webp',
  //         'assets/images/products/engines/d180/2.webp',
  //         'assets/images/products/engines/d180/3.webp',
  //     ],

  //     features: ['High durability', 'Fuel efficient design', 'Industrial grade reliability'],

  //     specs: {
  //         type: 'Diesel',
  //         cooling: 'Air cooled',
  //     },
  // },

  // =========================
  // WATER PUMPS
  // =========================

  {
    id: 8,
    name: 'High Flow Water Pump',
    category: 'Water Pumps',
    model: 'WP-80',

    description:
      'High-capacity water pump designed for irrigation and water transfer in agricultural environments.',

    image: 'assets/images/products/pumps/wp80/main.webp',

    gallery: [
      'assets/images/products/pumps/wp80/1.webp',
      'assets/images/products/pumps/wp80/2.webp',
      'assets/images/products/pumps/wp80/3.webp',
    ],

    features: ['High flow capacity', 'Aluminum pump housing', 'Continuous operation capability'],

    specs: {
      diameter: '3 inch',
      flow_rate: 'High',
    },
  },

  // =========================
  // AIR COMPRESSORS
  // =========================

  // {
  //     id: 9,
  //     name: 'Air Compressor 50L',
  //     category: 'Air Compressors',
  //     model: 'AC-50L',

  //     description:
  //         'High-efficiency lubricated air compressor suitable for workshops and industrial applications.',

  //     image: 'assets/images/products/compressors/ac50l/main.webp',

  //     gallery: [
  //         'assets/images/products/compressors/ac50l/1.webp',
  //         'assets/images/products/compressors/ac50l/2.webp',
  //         'assets/images/products/compressors/ac50l/3.webp',
  //     ],

  //     features: ['Low noise operation', 'High efficiency motor', 'Professional grade construction'],

  //     specs: {
  //         tank_capacity: '50 L',
  //         lubrication: 'Oil lubricated',
  //     },
  // },

  // =========================
  // CONSTRUCTION EQUIPMENT
  // =========================

  // {
  //   id: 10,
  //   name: 'Concrete Cutting Machine',
  //   category: 'Construction Equipment',
  //   model: 'CC-500',

  //   description:
  //     'Heavy-duty concrete cutting machine designed for construction sites and professional contractors.',

  //   image: 'assets/images/products/construction/cc500/main.webp',

  //   gallery: [
  //     'assets/images/products/construction/cc500/1.webp',
  //     'assets/images/products/construction/cc500/2.webp',
  //     'assets/images/products/construction/cc500/3.webp',
  //   ],

  //   features: [
  //     'High precision cutting',
  //     'Reinforced metal frame',
  //     'Designed for heavy-duty construction work',
  //   ],

  //   specs: {
  //     usage: 'Professional',
  //   },
  // },


   // =========================
  // AGRICULTURAL EQUIPMENT
  // =========================


  {
    id: 11,
    name: 'Gasoline Power Tiller',
    category: 'Power Tillers',
    model: 'PW950FG',

    description:
      'Compact gasoline power tiller designed for efficient soil cultivation in small and medium agricultural fields. It offers reliable performance, simple operation, and durable construction for long-term farming applications.',

    image: 'assets/images/products/tillers/pw950fg/main.webp',

    gallery: [
      'assets/images/products/tillers/pw950fg/1.webp',
      'assets/images/products/tillers/pw950fg/2.webp',
      'assets/images/products/tillers/pw950fg/3.webp',
    ],

    features: [
      'Reliable 170F gasoline engine',
      'Chain transmission system',
      'Belt tension clutch for smooth operation',
      'Compact design for easy maneuverability',
      'Ideal for agricultural soil preparation',
    ],

    specs: {
      engine_type: '170F gasoline engine',
      rated_power: '4 kW',
      rated_rpm: '3600 RPM',
      transmission_type: 'Chain transmission',
      clutch_type: 'Belt tension clutch',
      gears: '-1 / 0 / 1 / 2',
      output_shaft: '23 mm',
      tillage_width: '950 mm',
      tillage_depth: '≥ 100 mm',
      working_speed: '0.1 – 0.3 m/s',
      net_weight: '53 kg',
      dimension: '840 × 460 × 660 mm',
    },
  },
  {
    id: 12,
    name: 'Gasoline Power Tiller',
    category: 'Power Tillers',
    model: 'PW1000FG',

    description:
      'Heavy-duty gasoline power tiller designed for efficient cultivation in agricultural environments. Built with a robust gear transmission system and powerful engine, it delivers reliable soil preparation and improved field productivity.',

    image: 'assets/images/products/tillers/pw1000fg/main.webp',

    gallery: [
      'assets/images/products/tillers/pw1000fg/1.webp',
    ],

    features: [
      'Powerful 170F gasoline engine',
      'Gear transmission system for durability',
      'Wet friction clutch for smooth control',
      'Wide tillage width for efficient cultivation',
      'Designed for professional agricultural work',
    ],

    specs: {
      engine_type: '170F gasoline engine',
      rated_power: '4 kW',
      rated_rpm: '3600 RPM',
      transmission_type: 'Gear transmission',
      clutch_type: 'Wet friction disc clutch',
      gears: '-1 / 0 / 1 / 2',
      output_shaft: '23 mm',
      tillage_width: '1000 mm',
      tillage_depth: '≥ 100 mm',
      working_speed: '0.1 – 0.3 m/s',
      net_weight: '79 kg',
      dimension: '840 × 460 × 660 mm',
    },
  },
];
