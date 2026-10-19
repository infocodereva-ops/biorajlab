// src/data/content.ts
export const siteConfig = {
  name: "Bioraj Laboratories",
  tagline: "Quality is our asset - Leading Environmental & Analytical Testing Laboratory",
  founder: {
    name: "Dr. Raju R. Yadav",
    qualification: "Ph.D. from CSIR - NEERI, Nagpur",
    experience: "Serving industries over a decade",
    desc: "Established in Sep 2015, Bioraj Laboratories was founded by Dr. Raju Yadav (CSIR-NEERI). We offer high-accuracy analytical services in Environmental Monitoring, Food Analysis, Agricultural Testing & Regulatory Legal Compliances."
  },
  contact: {
    phone: "+91-9579010521",
    email: "biorajlabsngp@gmail.com",
    address: "SR No. 125, Rajhans Colony, Nr Tirupati Nagar, Warje, Pune - 411058 (Maharashtra)",
  },
  certifications: [
    { title: "NABL", full: "National Accreditation Board for Testing and Calibration Laboratories" },
    { title: "MoEFCC", full: "Ministry of Environment, Forest and Climate Change" },
    { title: "FSSAI", full: "Food Safety and Standards Authority of India" },
  ],
  services: [
    {
      id: "env-services",
      title: "Environmental Testing",
      desc: "Comprehensive ambient air, stack emissions, wastewater, groundwater, and noise level monitoring adhering to CPCB/SPCB guidelines.",
      icon: "Wind"
    },
    {
      id: "soil-agri-services",
      title: "Soil & Agricultural Testing",
      desc: "Soil fertility, macronutrients, micronutrients, heavy metals, pesticide residues, and bio-fertilizer quality testing.",
      icon: "Sprout"
    },
    {
      id: "food-services",
      title: "Food & Food Products Testing",
      desc: "Nutritional profiling, microbial contamination, shelf-life studies, pesticide and adulterant screening according to FSSAI norms.",
      icon: "Apple"
    },
    {
      id: "chemical-testing",
      title: "Testing of Chemicals",
      desc: "Purity assays, solvent analysis, trace metal detection, physical-chemical parameter profiling for raw materials.",
      icon: "FlaskConical"
    },
    {
      id: "contract-research",
      title: "Contract Research (R&D)",
      desc: "Customized analytical protocol development, environmental impact research, and tailored pilot-scale testing solutions.",
      icon: "Microscope"
    }
  ]
};