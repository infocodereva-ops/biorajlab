export interface ServiceDetail {
  slug: string;
  name: string;
  category: string;
  badge: string;
  heroImage: string;
  overview: string;
  keyBenefits: string[];
  parametersTable: {
    parameter: string;
    method: string;
    regulatoryStandard: string;
  }[];
  samplingGuidelines: string[];
  turnaroundTime: string;
  complianceBody: string;
}

export const servicesDetailedData: Record<string, ServiceDetail> = {
  'environmental-testing': {
    slug: 'environmental-testing',
    name: 'Environmental Testing & Compliance',
    category: 'ENVIRONMENTAL MONITORING WING',
    badge: 'CPCB & MPCB REGULATORY ALIGNED',
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=90',
    overview: 'Comprehensive monitoring and characterization of ambient air, industrial flue gas stack emissions, industrial effluent wastewater, hazardous sludge, and acoustic noise surveys. Led under the scientific guidance of Dr. Raju R. Yadav (CSIR-NEERI alumnus), our protocols produce legally defensible audit dossiers admissible before statutory regulatory tribunals.',
    keyBenefits: [
      'Isokinetic sampling complying strictly with EPA 1986 & CPCB norms',
      'Continuous 24x7 ambient air surveys (PM2.5, PM10, SOx, NOx)',
      'Effluent digestion and bio-assay testing (BOD, COD, Heavy Metals)',
      'Submissible documentation for factory consent renewals & consent-to-operate',
    ],
    parametersTable: [
      { parameter: 'Particulate Matter (PM2.5 / PM10)', method: 'High Volume Air Sampler (Gravimetric)', regulatoryStandard: 'NAAQS / CPCB 2009' },
      { parameter: 'Sulfur Dioxide (SO2) & Nitrogen Oxides (NOx)', method: 'Improved West & Gaeke / Jacob & Hochheiser', regulatoryStandard: 'IS 5182 (Part 2 & 6)' },
      { parameter: 'Biochemical Oxygen Demand (BOD 3-day at 27°C)', method: 'Incubation & Winkler Titration', regulatoryStandard: 'IS 3025 (Part 44)' },
      { parameter: 'Chemical Oxygen Demand (COD)', method: 'Closed Reflux Spectrophotometric Digestion', regulatoryStandard: 'IS 3025 (Part 58)' },
      { parameter: 'Heavy Metals (Pb, Cd, Cr, As, Hg, Ni)', method: 'Atomic Absorption Spectrophotometry (AAS)', regulatoryStandard: 'USEPA Method 7000B' },
      { parameter: 'Total Dissolved Solids (TDS) & pH', method: 'Electrochemical & Gravimetric Profiling', regulatoryStandard: 'IS 3025 (Part 16)' },
    ],
    samplingGuidelines: [
      'Wastewater samples must be collected in amber glass or clean HDPE bottles.',
      'Heavy metal samples are preserved on-site with analytical nitric acid (HNO3) to pH < 2.',
      'Samples are transported immediately in cold-chain containers (2°C - 6°C) to prevent biochemical degradation.',
    ],
    turnaroundTime: '24 to 48 Hours',
    complianceBody: 'MPCB / CPCB / MoEFCC Guidelines',
  },

  'soil-and-agricultural-testing': {
  slug: 'soil-and-agricultural-testing',
  name: 'Soil And Agricultural Testing',
  category: 'AGRICULTURAL & EDAPHIC SCIENCES DIVISION',
  badge: 'FERTILITY & HEAVY METAL SCREENING',
  // High-resolution real green farm & soil testing image:
  heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=90',
  overview: 'Precision edaphic analysis evaluating macronutrients, micro-minerals, salinity hazards, organic carbon, and toxic chemical contamination. Essential for commercial farming enterprises, agrochemical manufacturers, fertilizer blending units, and soil remediation projects.',
  keyBenefits: [
    'Comprehensive NPK (Nitrogen, Phosphorus, Potassium) diagnostic profiling',
    'Trace micronutrient assays (Zinc, Iron, Manganese, Copper, Boron)',
    'Residual pesticide, herbicide, and insecticide degradation screening',
    'Customized fertilizer and soil amendment recommendation cards',
  ],
  parametersTable: [
    { parameter: 'Available Nitrogen (N)', method: 'Alkaline Permanganate Method (Subbiah & Asija)', regulatoryStandard: 'ICAR / FCO Standards' },
    { parameter: 'Available Phosphorus (P)', method: 'Olsen Spectrophotometric Extraction (NaHCO3)', regulatoryStandard: 'IS 2720 (Part 26)' },
    { parameter: 'Available Potassium (K)', method: 'Neutral Ammonium Acetate Flame Photometry', regulatoryStandard: 'IS 2720' },
    { parameter: 'Organic Carbon (OC) %', method: 'Walkley & Black Rapid Wet Oxidation', regulatoryStandard: 'ICAR Method' },
    { parameter: 'Electrical Conductivity (EC) & pH', method: '1:2.5 Soil-Water Suspension Potentiometric', regulatoryStandard: 'IS 2720 (Part 26)' },
    { parameter: 'Heavy Metal Contamination (As, Cd, Pb)', method: 'Acid Digestion via AAS', regulatoryStandard: 'Soil Quality Guidelines' },
  ],
  samplingGuidelines: [
    'Collect composite core samples from 0-15 cm depth in a zigzag pattern across the field.',
    'Air-dry samples in shade away from direct sunlight and contaminants.',
    'Pack approximately 500g of sieved soil in sealed polypropylene bags.',
  ],
  turnaroundTime: '48 to 72 Hours',
  complianceBody: 'Fertilizer Control Order (FCO) / ICAR',
},

  'food-products-testing': {
    slug: 'food-products-testing',
    name: 'Food & Food Products Testing',
    category: 'BIOLOGICAL & NUTRITIONAL SAFETY DIVISION',
    badge: 'FSSAI REGULATORY ALIGNED',
    heroImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1920&q=90',
    overview: 'High-sensitivity microbiological assays, shelf-life verification, food adulteration isolation, and nutritional panel validation. Designed for packaged food processors, commercial bakeries, agricultural exporters, and dairy industries to meet strict FSSAI statutory regulations.',
    keyBenefits: [
      'Pathogen identification (Salmonella, E. coli, Listeria, S. aureus)',
      'Complete nutritional facts panel (Proteins, Fats, Carbs, Energy, Sodium)',
      'Sub-ppm pesticide residue and mycotoxin (Aflatoxin B1/B2) screening',
      'Accelerated shelf-life stability and moisture retention studies',
    ],
    parametersTable: [
      { parameter: 'Pathogenic Coliforms & E. coli', method: 'Membrane Filtration & MPN Technique', regulatoryStandard: 'IS 5401 / FSSAI' },
      { parameter: 'Salmonella Isolation', method: 'Pre-enrichment & Selective Agar Culturing', regulatoryStandard: 'IS 5887 (Part 3)' },
      { parameter: 'Total Plate Count (TPC) & Yeast/Mold', method: 'Pour Plate Colony Counting', regulatoryStandard: 'IS 5402 / IS 5403' },
      { parameter: 'Crude Protein Content', method: 'Micro-Kjeldahl Digestion & Titration', regulatoryStandard: 'AOAC 2001.11 / FSSAI' },
      { parameter: 'Fat & Saturated Fatty Acids', method: 'Soxhlet Solvent Extraction', regulatoryStandard: 'AOAC 920.39' },
      { parameter: 'Aflatoxin & Heavy Metals (Pb, As)', method: 'HPLC & AAS Trace Assays', regulatoryStandard: 'FSSAI Food Safety Regulations' },
    ],
    samplingGuidelines: [
      'Packaged items must be provided in intact, factory-sealed condition.',
      'Perishable or dairy samples must be transported in sterile chilled iceboxes (< 4°C).',
      'Minimum sample quantity: 200g - 500g per batch for complete microbial and chemical matrix.',
    ],
    turnaroundTime: '3 to 5 Days (Microbial Incubation)',
    complianceBody: 'FSSAI Standards & Export Quality Benchmark',
  },

  'chemical-testing': {
    slug: 'chemical-testing',
    name: 'Testing Of Chemicals & Solvents',
    category: 'ANALYTICAL CHEMISTRY WING',
    badge: 'PURITY & MOLECULAR ASSAYS',
    heroImage: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1920&q=90',
    overview: 'Analytical validation of industrial solvents, fine chemical raw materials, active chemical intermediates, and formulation matrices. Employing High-Performance Liquid Chromatography (HPLC), Karl Fischer moisture titrations, and UV-Vis spectrophotometry.',
    keyBenefits: [
      'Purity assay percentages with high calibration precision',
      'Trace volatile solvent residual profiling',
      'Moisture quantification via automated Karl Fischer titrimetry',
      'Heavy metal limits verification for chemical manufacturing raw inputs',
    ],
    parametersTable: [
      { parameter: 'Chemical Assay & Active Content %', method: 'HPLC & Titrimetric Assay Validation', regulatoryStandard: 'IP / BP / ASTM Standard' },
      { parameter: 'Moisture Content (ppm / %)', method: 'Karl Fischer Volumetric Titration', regulatoryStandard: 'ASTM E203 / IS 2362' },
      { parameter: 'Refractive Index & Optical Rotation', method: 'Digital Precision Refractometry', regulatoryStandard: 'ASTM D1218' },
      { parameter: 'Non-Volatile Matter (Residue on Evaporation)', method: 'Gravimetric Oven Drying at 105°C', regulatoryStandard: 'IS 323 / ASTM D1353' },
      { parameter: 'Heavy Metal Contamination (Pb, Fe, Cu)', method: 'AAS / Colorimetric Trace Limit Tests', regulatoryStandard: 'ASTM Standards' },
      { parameter: 'Flash Point & Boiling Range', method: 'Pensky-Martens Closed Cup Tester', regulatoryStandard: 'IS 1448 / ASTM D93' },
    ],
    samplingGuidelines: [
      'Solvents and volatile chemicals must be sampled in airtight PTFE-sealed glass containers.',
      'Hazardous or corrosive reagents must be marked with MSDS hazard stickers.',
      'Minimum quantity: 100 mL liquid or 50g solid for standard testing.',
    ],
    turnaroundTime: '24 to 48 Hours',
    complianceBody: 'ISO 17025 Traceable Protocols & ASTM',
  },

  'contract-research': {
    slug: 'contract-research',
    name: 'Contract Research & Pilot R&D',
    category: 'APEX SCIENTIFIC RESEARCH DIVISION',
    badge: 'DIRECTED BY DR. RAJU R. YADAV (CSIR-NEERI)',
    heroImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1920&q=90',
    overview: 'Collaborative contract research, specialized analytical method development, pilot-scale effluent treatment validation, and statutory compliance research. Backed by Dr. Raju R. Yadav’s doctoral research at CSIR-NEERI, our R&D wing helps industries resolve non-compliance hurdles and optimize industrial treatment systems.',
    keyBenefits: [
      'Custom analytical method development and validation (ICH guidelines)',
      'Pilot-scale testing of advanced industrial wastewater treatment processes',
      'Pollution abatement feasibility studies for MPCB/CPCB compliance',
      'Independent third-party verification for novel chemical compounds',
    ],
    parametersTable: [
      { parameter: 'Analytical Method Development', method: 'Chromatographic & Spectroscopic Optimization', regulatoryStandard: 'ICH Q2 (R1) Guidelines' },
      { parameter: 'Industrial Wastewater Treatability Study', method: 'Bench-Scale Aerobic/Anaerobic Digestion', regulatoryStandard: 'NEERI / CPCB Guidelines' },
      { parameter: 'Solid Waste Leaching & Toxicity (TCLP)', method: 'USEPA Method 1311', regulatoryStandard: 'Hazardous Waste Rules' },
      { parameter: 'Pilot Scale Chemical Synthesis Validation', method: 'Reaction Monitoring via HPLC/UV', regulatoryStandard: 'Custom Client Protocols' },
    ],
    samplingGuidelines: [
      'Contract research projects begin with an NDA and formal technical scoping meeting.',
      'Raw material and wastewater bulk volumes are coordinated through dedicated logistics.',
    ],
    turnaroundTime: 'Project-Specific Timeline',
    complianceBody: 'CSIR-NEERI Academic Rigor & Apex Industry Standards',
  },
};