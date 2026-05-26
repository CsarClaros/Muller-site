
export interface Producto {
  id: number;
  name: string;
  category: string;
  model: string;

  description: string;

  image: string;
  gallery: string[];

  features: string[];

  specs: {
    [key: string]: string | number;
  };
}

export const PRODUCTOS: Producto[] = [
  // =========================
  // ENGINES
  // =========================

  {
    id: 1,
    name: 'Müller Gasoline Engine 15 HP',
    category: 'Engines',
    model: 'Müller MX-150G',

    description:
      'Heavy-duty gasoline engine designed to provide reliable power and maximum durability for agricultural, industrial, and construction applications.',

    image: 'assets/images/products/engines/mx150g/main.webp',

    gallery: [
      'assets/images/products/engines/mx150g/1.webp',
      // 'assets/images/products/engines/mx150g/2.webp',
      // 'assets/images/products/engines/mx150g/3.webp',
    ],

    features: [
      'Single-cylinder OHV engine',
      'High durability construction',
      'Optimized fuel consumption',
      'Reliable continuous operation',
      'Suitable for agricultural machinery',
    ],

    specs: {
      engine_type: 'Single-cylinder, 4-stroke, air-cooled OHV',
      fuel_type: 'Gasoline',
      maximum_power: '15 HP',
      displacement: '420 cc',
      starting_system: 'Manual recoil / Electric start',
      fuel_tank_capacity: '6.5 L',
      oil_capacity: '1.1 L',
      oil_alert_system: 'Yes',
      output_shaft_type: 'Standard keyed shaft',
    },
  },

  {
    id: 2,
    name: 'Müller Diesel Engine 15 HP',
    category: 'Engines',
    model: 'Müller MDX-1100E',

    description:
      'Industrial diesel engine with direct injection technology and electric start system designed for demanding agricultural and industrial applications.',

    image: 'assets/images/products/engines/mdx1100e/main.webp',

    gallery: [
      'assets/images/products/engines/mdx1100e/1.webp',
      // 'assets/images/products/engines/mdx1100e/2.webp',
      // 'assets/images/products/engines/mdx1100e/3.webp',
    ],

    features: [
      'Integrated electric start system',
      'Direct fuel injection technology',
      'High torque output',
      'Low fuel consumption',
      'Reinforced air filter system',
    ],

    specs: {
      engine_type: 'Single-cylinder, 4-stroke, direct injection, air-cooled',
      fuel_type: 'Diesel',
      maximum_power: '15 HP - 16 HP',
      starting_system: '12V electric start with backup manual decompressor',
      injection_system: 'Direct injection',
      air_filter_system: 'Heavy-duty dust protection filter',
      output_shaft_type: 'Heavy-duty horizontal keyed shaft',
      recommended_applications:
        'Industrial irrigation systems, generators, agricultural machinery',
    },
  },

  {
    id: 3,
    name: 'Müller Diesel Engine 10 HP',
    category: 'Engines',
    model: 'Müller MDX-186D',

    description:
      'High-efficiency diesel engine engineered for continuous operation, heavy torque delivery, and low fuel consumption in agricultural environments.',

    image: 'assets/images/products/engines/mdx186d/main.webp',

    gallery: [
      'assets/images/products/engines/mdx186d/1.webp',
      // 'assets/images/products/engines/mdx186d/2.webp',
      // 'assets/images/products/engines/mdx186d/3.webp',
    ],

    features: [
      'Direct injection diesel system',
      'Oil-bath air filtration',
      'Designed for continuous work',
      'High torque performance',
      'Optimized fuel economy',
    ],

    specs: {
      engine_type: 'Single-cylinder, 4-stroke, direct injection, air-cooled',
      fuel_type: 'Diesel',
      maximum_power: '10 HP',
      displacement: '418 cc',
      starting_system: 'Manual recoil with decompressor / Electric start',
      air_filter_type: 'Oil-bath filter',
      fuel_tank_capacity: '5.5 L',
      oil_capacity: '1.65 L',
      output_shaft_type: 'Standard keyed shaft',
    },
  },

  {
    id: 4,
    name: 'Müller V-Twin Diesel Engine',
    category: 'Industrial Engines',
    model: 'Müller MVX-220D',

    description:
      'Industrial V-Twin diesel engine engineered for maximum power delivery, continuous operation, and superior reliability in heavy-duty applications.',

    image: 'assets/images/products/engines/mvx220d/main.webp',

    gallery: [
      'assets/images/products/engines/mvx220d/1.webp',
      // 'assets/images/products/engines/mvx220d/2.webp',
      // 'assets/images/products/engines/mvx220d/3.webp',
    ],

    features: [
      'V-Twin engine configuration',
      'Air-cooled industrial system',
      'Reduced vibration design',
      'Integrated electric starter',
      'High-capacity industrial performance',
    ],

    specs: {
      engine_type: 'V-Twin, 4-stroke, direct injection',
      cooling_system: 'Forced air cooling',
      fuel_type: 'Diesel',
      power_range: '20 HP - 22 HP',
      starting_system: '12V electric start',
      injection_system: 'Direct injection',
      output_shaft_type: 'Heavy-duty conical or keyed shaft',
      recommended_applications:
        'Large generators, industrial pumps, heavy-duty machinery',
    },
  },

  {
    id: 5,
    name: 'Müller Water-Cooled Diesel Engine',
    category: 'Industrial Engines',
    model: 'Müller MWD-200',

    description:
      'Water-cooled diesel engine designed for continuous heavy-duty operation with stable thermal performance and optimized fuel efficiency.',

    image: 'assets/images/products/engines/mwd200/main.webp',

    gallery: [
      'assets/images/products/engines/mwd200/1.webp',
      // 'assets/images/products/engines/mwd200/2.webp',
      // 'assets/images/products/engines/mwd200/3.webp',
    ],

    features: [
      'Water cooling system',
      'Stable thermal operation',
      'Designed for continuous workloads',
      'Industrial-grade durability',
      'Low fuel consumption',
    ],

    specs: {
      engine_type: 'Single-cylinder / Twin-cylinder, 4-stroke, direct injection',
      cooling_system: 'Water cooling',
      fuel_type: 'Diesel',
      power_range: '12 HP - 20 HP',
      starting_system: '12V electric start / Manual decompressor',
      injection_system: 'Direct injection',
      output_shaft_type: 'Heavy-duty horizontal shaft',
      main_advantage:
        'Supports long continuous operation under maximum load conditions',
    },
  },

  {
    id: 6,
    name: 'Müller Gasoline Engine 6.5 HP',
    category: 'Engines',
    model: 'Müller MX-65G',

    description:
      'Compact gasoline engine designed for agricultural, industrial, and construction equipment requiring reliable and efficient power delivery.',

    image: 'assets/images/products/engines/mx65g/main.webp',

    gallery: [
      'assets/images/products/engines/mx65g/1.webp',
      'assets/images/products/engines/mx65g/2.webp',
      'assets/images/products/engines/mx65g/3.webp',
    ],

    features: [
      'Horizontal shaft design',
      'OHV engine technology',
      'Smooth recoil starting',
      'Fuel efficient performance',
      'Easy maintenance system',
    ],

    specs: {
      brand: 'Müller',
      maximum_power: '6.5 HP',
      engine_type: 'Single-cylinder, 4-stroke, OHV, air-cooled',
      shaft_type: 'Horizontal shaft',
      starting_system: 'Manual recoil starter',
      oil_capacity: '600 ml',
      recommended_oil_grades: '15W-40, 10W-40, 15W-30, 10W-30',
      air_filter_system: 'Sealed cartridge filter system',
    },
  },

  // =========================
  // WATER PUMPS
  // =========================

  // {
  //   id: 7,
  //   name: 'Müller Gasoline Water Pump 2 Inch',
  //   category: 'Water Pumps',
  //   model: 'Müller WP-20G',

  //   description:
  //     'Compact gasoline water pump designed for efficient clean water transfer in agricultural and construction environments.',

  //   image: 'assets/images/products/pumps/wp20g/main.webp',

  //   gallery: [
  //     'assets/images/products/pumps/wp20g/1.webp',
  //     'assets/images/products/pumps/wp20g/2.webp',
  //     'assets/images/products/pumps/wp20g/3.webp',
  //   ],

  //   features: [
  //     'Self-priming centrifugal pump',
  //     'Portable tubular steel frame',
  //     'Reliable OHV gasoline engine',
  //     'High water transfer efficiency',
  //     'Suitable for irrigation systems',
  //   ],

  //   specs: {
  //     pump_type: 'Self-priming centrifugal pump',
  //     suction_discharge_size: '2 inch x 2 inch (50 mm)',
  //     engine_type: 'Single-cylinder, 4-stroke, air-cooled OHV',
  //     engine_power: '7 HP',
  //     fuel_type: 'Gasoline',
  //     starting_system: 'Manual recoil start',
  //     structure_type: 'Tubular steel frame',
  //     recommended_applications:
  //       'Irrigation systems, tank filling, water transfer',
  //   },
  // },

  {
    id: 8,
    name: 'Müller High Pressure Water Pump',
    category: 'Water Pumps',
    model: 'Müller HP-20X',

    description:
      'High-pressure gasoline water pump engineered for irrigation systems, elevated tank filling, and demanding hydraulic applications.',

    image: 'assets/images/products/pumps/hp20x/main.webp',

    gallery: [
      'assets/images/products/pumps/hp20x/1.webp',
      // 'assets/images/products/pumps/hp20x/2.webp',
      // 'assets/images/products/pumps/hp20x/3.webp',
    ],

    features: [
      'High-pressure centrifugal design',
      'Reinforced aluminum pump body',
      'Portable protective steel cage',
      'Optimized for elevated pumping',
      'Professional irrigation performance',
    ],

    specs: {
      pump_type: 'High-pressure centrifugal pump',
      suction_discharge_size: '2 inch x 2 inch (50 mm)',
      engine_type: 'Single-cylinder, 4-stroke, air-cooled OHV',
      engine_power: '7 HP - 7.5 HP',
      fuel_type: 'Gasoline',
      pump_body_material: 'Reinforced cast iron / aluminum',
      starting_system: 'Manual recoil start',
      structure_type: 'Tubular steel protective cage',
    },
  },

  {
    id: 9,
    name: 'Müller Chemical Water Pump',
    category: 'Specialized Pumps',
    model: 'Müller CP-20E',

    description:
      'Corrosion-resistant gasoline water pump specifically designed for chemical liquids, fertilizers, and treated wastewater applications.',

    image: 'assets/images/products/pumps/cp20e/main.webp',

    gallery: [
      'assets/images/products/pumps/cp20e/1.webp',
      // 'assets/images/products/pumps/cp20e/2.webp',
      // 'assets/images/products/pumps/cp20e/3.webp',
    ],

    features: [
      'Corrosion-resistant pump body',
      'High-density reinforced polymer construction',
      'Chemical-resistant mechanical seals',
      'Designed for agricultural chemicals',
      'Heavy-duty steel frame',
    ],

    specs: {
      pump_type: 'Chemical centrifugal pump',
      body_material: 'Reinforced thermoplastic',
      suction_discharge_size: '2 inch x 2 inch (50 mm)',
      engine_type: 'Single-cylinder, 4-stroke, air-cooled OHV',
      engine_power: '7 HP',
      fuel_type: 'Gasoline',
      seal_type: 'Chemical-resistant mechanical seals',
      starting_system: 'Manual recoil start',
    },
  },

  {
    id: 10,
    name: 'Müller Clean Water Pump',
    category: 'Water Pumps',
    model: 'Müller CW-20C',

    description:
      'High-efficiency gasoline water pump featuring quick-access maintenance design for intensive agricultural and industrial use.',

    image: 'assets/images/products/pumps/cw20c/main.webp',

    gallery: [
      'assets/images/products/pumps/cw20c/1.webp',
      // 'assets/images/products/pumps/cw20c/2.webp',
      // 'assets/images/products/pumps/cw20c/3.webp',
    ],

    features: [
      'Quick-access pump housing',
      'Reinforced steel frame',
      'Easy impeller cleaning',
      'Continuous operation capability',
      'High durability design',
    ],

    specs: {
      pump_type: 'Self-priming centrifugal pump',
      suction_discharge_size: '2 inch x 2 inch (50 mm)',
      engine_type: 'Single-cylinder, 4-stroke, air-cooled OHV',
      engine_power: '7 HP',
      fuel_type: 'Gasoline',
      body_design: 'Reinforced housing with quick-access bolts',
      starting_system: 'Heavy-duty manual recoil starter',
      structure_type: 'Tubular steel frame with vibration dampers',
    },
  },

  {
    id: 11,
    name: 'Müller Trash Water Pump 3 Inch',
    category: 'Specialized Pumps',
    model: 'Müller TP-30T',

    description:
      'Industrial trash water pump engineered for muddy water, sludge, and debris-filled environments.',

    image: 'assets/images/products/pumps/tp30t/main.webp',

    gallery: [
      'assets/images/products/pumps/tp30t/1.webp',
      // 'assets/images/products/pumps/tp30t/2.webp',
      // 'assets/images/products/pumps/tp30t/3.webp',
    ],

    features: [
      'Handles muddy water and solids',
      'Quick-release cleaning access',
      'Heavy-duty cast iron impeller',
      'Industrial-grade durability',
      'High-capacity pumping performance',
    ],

    specs: {
      pump_type: 'Trash centrifugal pump',
      suction_discharge_size: '3 inch x 3 inch (75 mm)',
      engine_type: 'Single-cylinder, 4-stroke, air-cooled OHV',
      engine_power: '7 HP - 7.5 HP',
      fuel_type: 'Gasoline',
      solids_handling: 'Supports suspended solid particles',
      access_design: 'Quick-release front cover',
      structure_type: 'Heavy-duty tubular steel frame',
    },
  },

  {
    id: 12,
    name: 'Müller Diesel Water Pump 2 Inch',
    category: 'Diesel Water Pumps',
    model: 'Müller DWP-20',

    description:
      'Diesel-powered water pump designed for continuous agricultural irrigation and long-distance water transfer applications.',

    image: 'assets/images/products/pumps/dwp20/main.webp',

    gallery: [
      'assets/images/products/pumps/dwp20/1.webp',
      // 'assets/images/products/pumps/dwp20/2.webp',
      // 'assets/images/products/pumps/dwp20/3.webp',
    ],

    features: [
      'Direct injection diesel engine',
      'Fuel-efficient continuous operation',
      'Heavy-duty steel cage frame',
      'High torque performance',
      'Industrial vibration dampers',
    ],

    specs: {
      pump_type: 'Self-priming centrifugal pump',
      suction_discharge_size: '2 inch x 2 inch (50 mm)',
      engine_type: 'Single-cylinder, 4-stroke, direct injection, air-cooled',
      fuel_type: 'Diesel',
      engine_power: '6 HP - 7 HP',
      starting_system: 'Manual recoil with decompressor',
      structure_type: 'Heavy-duty tubular steel cage',
      economic_advantage: 'Optimized fuel consumption for continuous work',
    },
  },

  {
    id: 13,
    name: 'Müller High Flow Diesel Pump 4 Inch',
    category: 'Diesel Water Pumps',
    model: 'Müller DWP-40X',

    description:
      'High-capacity diesel water pump designed for large-scale irrigation, construction drainage, and emergency flood control.',

    image: 'assets/images/products/pumps/dwp40x/main.webp',

    gallery: [
      'assets/images/products/pumps/dwp40x/1.webp',
      // 'assets/images/products/pumps/dwp40x/2.webp',
      // 'assets/images/products/pumps/dwp40x/3.webp',  
    ],

    features: [
      'Large-volume water transfer',
      'Direct injection diesel engine',
      'Heavy-duty industrial frame',
      'Continuous operation capability',
      'High energy efficiency',
    ],

    specs: {
      pump_type: 'High-flow centrifugal pump',
      suction_discharge_size: '4 inch x 4 inch (100 mm)',
      engine_type: 'Single-cylinder, 4-stroke, direct injection, air-cooled',
      fuel_type: 'Diesel',
      engine_power: '9 HP - 10 HP',
      starting_system: 'Manual recoil with decompressor',
      structure_type: 'Reinforced tubular steel cage',
      main_focus: 'Maximum flow volume with fuel efficiency',
    },
  },

  {
    id: 14,
    name: 'Müller High Pressure Diesel Pump',
    category: 'Diesel Water Pumps',
    model: 'Müller DHP-20E',

    description:
      'High-pressure diesel water pump designed for elevated irrigation systems and long-distance water transfer.',

    image: 'assets/images/products/pumps/dhp20e/main.webp',

    gallery: [
      'assets/images/products/pumps/dhp20e/1.webp',
      // 'assets/images/products/pumps/dhp20e/2.webp',
      // 'assets/images/products/pumps/dhp20e/3.webp',
    ],

    features: [
      'High-pressure pumping system',
      'Direct injection diesel engine',
      'Reinforced red pump housing',
      'Optional electric start system',
      'Industrial anti-vibration frame',
    ],

    specs: {
      pump_type: 'High-pressure centrifugal pump',
      suction_discharge_size: '2 inch x 2 inch (50 mm)',
      engine_type: 'Single-cylinder, 4-stroke, direct injection, air-cooled',
      fuel_type: 'Diesel',
      engine_power: '6 HP - 7 HP',
      pump_body_material: 'Reinforced cast iron / aluminum',
      starting_system: 'Manual recoil / Optional electric start',
      structure_type: 'Heavy-duty steel cage frame',
    },
  },

  {
    id: 15,
    name: 'Müller Clean Water Pump 2 Inch',
    category: 'Water Pumps',
    model: 'Müller MWP-200',

    description:
      'Professional clean water pump designed for agricultural irrigation, tank filling, and rapid water transfer.',

    image: 'assets/images/products/pumps/mwp200/main.webp',

    gallery: [
      'assets/images/products/pumps/mwp200/1.webp',
      'assets/images/products/pumps/mwp200/2.webp',
      'assets/images/products/pumps/mwp200/3.webp',
    ],

    features: [
      'High-performance clean water pumping',
      'OHV gasoline engine',
      'Automatic oil protection sensor',
      'Anti-corrosion tubular steel frame',
      'Designed for field operation',
    ],

    specs: {
      equipment_type: 'Horizontal shaft clean water pump',
      inlet_outlet_size: '2 inch (50 mm)',
      engine_type: 'Müller 6.5 HP, single-cylinder, 4-stroke OHV',
      fuel_type: 'Gasoline',
      fuel_tank_capacity: '3.6 L',
      protection_system: 'Automatic low oil sensor',
      support_frame: 'Tubular anti-corrosion steel cage',
    },
  },

  // =========================
  // POWER TILLERS
  // =========================

  {
    id: 16,
    name: 'Müller Compact Power Tiller',
    category: 'Power Tillers',
    model: 'Müller MT-450F',

    description:
      'Compact gasoline power tiller designed for soil preparation in gardens, greenhouses, and small agricultural fields.',

    image: 'assets/images/products/tillers/mt450f/main.webp',

    gallery: [
      'assets/images/products/tillers/mt450f/1.webp',
      // 'assets/images/products/tillers/mt450f/2.webp',
      // 'assets/images/products/tillers/mt450f/3.webp',
    ],

    features: [
      'Adjustable ergonomic handlebar',
      'Integrated rear support wheels',
      'Heavy-duty rotary blade system',
      'Excellent maneuverability',
      'Ideal for soil aeration and cultivation',
    ],

    specs: {
      equipment_type: 'Horizontal shaft power tiller',
      engine_type: 'Single-cylinder, 4-stroke, air-cooled OHV',
      fuel_type: 'Gasoline',
      blade_configuration: '3-4 heavy-duty blade groups',
      support_system: 'Integrated rear wheels',
      transmission_system: 'Reinforced clutch transmission',
      handlebar_type: 'Adjustable ergonomic handlebar',
    },
  },

  {
    id: 17,
    name: 'Müller Agricultural Power Tiller',
    category: 'Power Tillers',
    model: 'Müller MT-80PRO',

    description:
      'Professional gasoline power tiller with optimized tilling width for agricultural fields and greenhouse cultivation.',

    image: 'assets/images/products/tillers/mt80pro/main.webp',

    gallery: [
      'assets/images/products/tillers/mt80pro/1.webp',
      // 'assets/images/products/tillers/mt80pro/2.webp',
      // 'assets/images/products/tillers/mt80pro/3.webp',
    ],

    features: [
      '80 cm tilling width',
      'High torque blade system',
      'Integrated transport wheel',
      'Reinforced transmission system',
      'Suitable for hard soil conditions',
    ],

    specs: {
      equipment_type: 'Reinforced transmission rototiller',
      engine_type: 'Single-cylinder, 4-stroke, air-cooled OHV',
      fuel_type: 'Gasoline',
      tilling_width: '80 cm',
      blade_configuration: '2-4 heavy-duty tine groups',
      drag_bar: '16 mm drag bar included',
      front_wheel: '8 x 1.75 inch front wheel',
    },
  },

  {
    id: 18,
    name: 'Müller Traction Power Tiller',
    category: 'Power Tillers',
    model: 'Müller MT-80TR',

    description:
      'Professional power tiller equipped with agricultural traction tires for improved stability and mobility on uneven terrain.',

    image: 'assets/images/products/tillers/mt80tr/main.webp',

    gallery: [
      'assets/images/products/tillers/mt80tr/1.webp',
      // 'assets/images/products/tillers/mt80tr/2.webp',
      // 'assets/images/products/tillers/mt80tr/3.webp',
    ],

    features: [
      'Agricultural traction tires',
      'High-efficiency cultivation system',
      'Heavy-duty blade groups',
      'Ergonomic safety controls',
      'Optimized field maneuverability',
    ],

    specs: {
      equipment_type: 'Traction power tiller',
      engine_type: 'Single-cylinder, 4-stroke, air-cooled OHV',
      fuel_type: 'Gasoline',
      tilling_width: '80 cm',
      blade_configuration: '3-4 interchangeable blade groups',
      included_tires: '3.50-6 agricultural tires',
      guide_wheel: 'Auxiliary front wheel',
    },
  },

  {
    id: 19,
    name: 'Müller Professional Power Tiller',
    category: 'Power Tillers',
    model: 'Müller MT-950ZX',

    description:
      'High-performance professional power tiller designed for deep soil preparation and intensive agricultural workloads.',

    image: 'assets/images/products/tillers/mt950zx/main.webp',

    gallery: [
      'assets/images/products/tillers/mt950zx/1.webp',
      // 'assets/images/products/tillers/mt950zx/2.webp',
      // 'assets/images/products/tillers/mt950zx/3.webp',
    ],

    features: [
      'Professional heavy-duty configuration',
      'Deep penetration blade system',
      'High-traction agricultural tires',
      'Retractable parking support',
      'Adjustable ergonomic controls',
    ],

    specs: {
      equipment_type: 'Professional heavy-duty power tiller',
      engine_type: 'Single-cylinder, 4-stroke, OHV, air-cooled',
      fuel_type: 'Gasoline',
      blade_configuration: '3-4 high-penetration blade groups',
      included_tires: '3.50-6 agricultural traction tires',
      parking_support: 'Retractable front support leg',
      control_system: 'Adjustable ergonomic controls',
    },
  },

  {
    id: 20,
    name: 'Müller 4WD Rear Rotary Tiller',
    category: 'Professional Tillers',
    model: 'Müller MRT-4DW',

    description:
      'Advanced rear rotary tiller with integrated 4WD traction system designed for professional agricultural soil preparation.',

    image: 'assets/images/products/tillers/mrt4dw/main.webp',

    gallery: [
      'assets/images/products/tillers/mrt4dw/1.webp',
      //  'assets/images/products/tillers/mrt4dw/2.webp', 
      // 'assets/images/products/tillers/mrt4dw/3.webp', 
    ],

    features: [
      'Integrated 4WD traction system',
      'Rear rotary blade assembly',
      'Protective steel blade cover',
      'High-traction agricultural tires',
      'Optimized transmission system',
    ],

    specs: {
      equipment_type: 'Rear rotary tiller with 4WD traction',
      engine_type: 'Single-cylinder, 4-stroke, OHV, air-cooled',
      fuel_type: 'Gasoline',
      cutting_system: '6 rear rotary blades',
      protection_system: 'Steel protective blade cover',
      included_tires: '4.00-7 agricultural tires',
      transmission_system: 'Integrated traction and rear rotation gears',
    },
  },

  {
    id: 21,
    name: 'Müller Professional Diesel Tiller',
    category: 'Diesel Tillers',
    model: 'Müller MDT-1050',

    description:
      'Professional diesel power tiller engineered for hard soil cultivation and continuous agricultural operation.',

    image: 'assets/images/products/tillers/mdt1050/main.webp',

    gallery: [
      'assets/images/products/tillers/mdt1050/1.webp',
      // 'assets/images/products/tillers/mdt1050/2.webp',
      // 'assets/images/products/tillers/mdt1050/3.webp',
    ],

    features: [
      'High-torque diesel engine',
      'Heavy-duty reinforced chassis',
      'Adjustable parking support',
      'Professional ergonomic controls',
      'Optimized fuel efficiency',
    ],

    specs: {
      equipment_type: 'Heavy-duty diesel tiller',
      engine_type: 'Single-cylinder, direct injection diesel, air-cooled',
      fuel_type: 'Diesel',
      blade_configuration: '3-4 reinforced blade groups',
      compatible_tires: '3.50-6 or 4.00-8 agricultural tires',
      parking_support: 'Adjustable retractable front support',
      safety_controls: 'Integrated safety clutch and throttle system',
    },
  },

  {
    id: 22,
    name: 'Müller Industrial Diesel Tiller',
    category: 'Diesel Tillers',
    model: 'Müller MDT-1350X',

    description:
      'Industrial diesel tiller designed for extra-heavy agricultural workloads and large-scale soil preparation.',

    image: 'assets/images/products/tillers/mdt1350x/main.webp',

    gallery: [
      'assets/images/products/tillers/mdt1350x/1.webp',
      // 'assets/images/products/tillers/mdt1350x/2.webp',
      // 'assets/images/products/tillers/mdt1350x/3.webp',
    ],

    features: [
      'Massive diesel torque output',
      'Industrial reinforced transmission',
      'Heavy-duty agricultural tires',
      'Impact-resistant front protection',
      'Fully adjustable ergonomic controls',
    ],

    specs: {
      equipment_type: 'Industrial heavy-duty diesel tiller',
      engine_type: 'Single-cylinder, 4-stroke, direct injection diesel',
      fuel_type: 'Diesel',
      blade_configuration: '4-5 heavy-duty blade groups',
      included_tires: '4.00-8 or 5.00-12 agricultural tires',
      parking_system: 'Heavy-duty retractable front support',
      structure_type: 'Reinforced steel chassis with front protection',
    },
  },

  {
    id: 23,
    name: 'Müller Premium LED Power Tiller',
    category: 'Premium Tillers',
    model: 'Müller MT-LUX',

    description:
      'Premium gasoline power tiller featuring modern protective bodywork, integrated LED headlights, and advanced ergonomic controls.',

    image: 'assets/images/products/tillers/mtlux/main.webp',

    gallery: [
      'assets/images/products/tillers/mtlux/1.webp',
      'assets/images/products/tillers/mtlux/2.webp',
      'assets/images/products/tillers/mtlux/3.webp',
    ],

    features: [
      'Integrated dual LED headlights',
      'Protective aerodynamic hood', 
      'Deep tilling rotary blade system',
      'Advanced ergonomic controls',
      'Premium agricultural design',
    ],

    specs: {
      equipment_type: 'Premium horizontal shaft tiller',
      engine_type: 'Single-cylinder, 4-stroke, OHV, air-cooled',
      fuel_type: 'Gasoline',
      lighting_system: 'Integrated dual LED headlights',
      cutting_configuration: 'Deep tilling rotary blade shaft',
      parking_support: 'Retractable front support leg',
      protection_system: 'Aerodynamic protective hood and rear mudguards',
    },
  },
];
