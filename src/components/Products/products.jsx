const products = [
  {
    id: 2,
    name: "CHUI D-500",
    category: "Footwear",
    image: "/chui.png",  // Update with the correct image path
    description: [
      "UPPER: Water resistant leather 1.8MM",
      "LINING: Breathable 3D air mesh",
      "OUTSOLE: Dual density P.U",
      "TOE CAP: Steel Toecap for 200J impact",
      "SIZE: 39-46",
      "COLOR: Black",
      "SPECS: ISO 20345:2011 S2 SRC"
    ]
  },
  {
    id: 3,
    name: "MAMBA D-501",
    category: "Footwear",
    image: "/Mamba.png",  // Update with the correct image path
    description: [
      "UPPER: Water resistant leather 1.8MM",
      "LINING: Breathable 3D air mesh",
      "OUTSOLE: Dual density P.U",
      "TOE CAP: Steel Toecap for 200J impact",
      "SIZE: 39-46",
      "COLOR: Black",
      "SPECS: ISO 20345:2011 S2 SRC"
    ]
  },
  {
    id: 4,
    name: "SIMBA D-507",
    category: "Footwear",
    image: "/simba.png",  // Update with the correct image path
    description: [
      "UPPER: Water resistant leather 1.8MM",
      "LINING: Breathable 3D air mesh",
      "OUTSOLE: Dual density P.U",
      "TOE CAP: Steel Toecap for 200J impact",
      "SIZE: 39-46",
      "COLOR: Black",
      "SPECS: ISO 20345:2011 S2 SRC"
    ]
  },
  {
    id: 5,
    name: "SINDI D-508",
    category: "Footwear",
    image: "/sindi.png",  // Update with the correct image path
    description: [
      "UPPER: Water resistant leather 1.8MM",
      "LINING: Breathable 3D air mesh",
      "OUTSOLE: Dual density P.U",
      "TOE CAP: Steel Toecap for 200J impact",
      "SIZE: 39-46",
      "COLOR: Black",
      "SPECS: ISO 20345:2011 S2 SRC"
    ]
  },
  {
    id: 6,
    name: "H1101 Gloves",
    category: "Gloves",
    image: "/h1101.png",  // Add the image path for the gloves
    description: [
      "10 gauge",
      "Cut level 5",
      "Heavy duty latex coated",
      "Designed for puncture resistance",
      "Black latex for durability and performance"
    ]
  },
  {
    id: 7,
    name: "H3101 Gloves",
    category: "Gloves",
    image: "/h3101.png",  // Add the image path for the gloves
    description: [
      "13G",
      "Cut level 5",
      "HPPE (High-Performance Polyethylene)",
      "Black PU (Polyurethane) coating for enhanced durability"
    ]
  },
  {
    id: 8,
    name: "N1501 Gloves",
    category: "Gloves",
    image: "/n1501.png",  // Add the image path for the gloves
    description: [
      "13G",
      "White poly-light",
      "Green nitrile coating",
      "Smooth finish for improved grip and comfort"
    ]
  },
  {
    id: 9,
    name: "N1511 Gloves",
    category: "Gloves",
    image: "/n1511.png",  // Add the image path for the gloves
    description: [
      "13G U3",
      "Polyester shell",
      "Nitrile coating",
      "Smooth finish"
    ]
  },
  {
    id: 10,
    name: "N2304 Cotton Gloves",
    category: "Gloves",
    image: "/n2304.png",  // Add the image path for the gloves
    description: [
      "Jersey glove",
      "Nitrile half coated",
      "Safely cut resistant"
    ]
  },
  {
    id: 11,
    name: "N2501 Spandex Gloves",
    category: "Gloves",
    image: "/n2501.png",  // Add the image path for the gloves
    description: [
      "Spandex shell",
      "Microfoam nitrile coated",
      "15G grey nylon"
    ]
  },
  {
    id: 12,
    name: "N2521 Gloves",
    category: "Gloves",
    image: "/n2521.png",  // Add the image path for the gloves
    description: [
      "15G white nylon",
      "Spandex shell",
      "Grey lunar foam nitrile"
    ]
  },
  {
    id: 13,
    name: "L1101 10G High Grade Yarn",
    category: "Gloves",
    image: "/l1101.png",  // Add the image path for the L1101 gloves
    description: [
      "10G high grade yarn",
      "Latex coating",
      "Crinkle finish"
    ]
  },
  {
    id: 14,
    name: "L1202 10G T/C Liner",
    category: "Gloves",
    image: "/l1202.png",  // Add the image path for the L1202 gloves
    description: [
      "10G T/C liner",
      "Best quality natural latex coated",
      "Crinkle sauce finish"
    ]
  },
  {
    id: 15,
    name: "L1803 Interlock Pink Latex",
    category: "Gloves",
    image: "/l1803.png",  // Add the image path for the L1803 gloves
    description: [
      "Interlock pink latex",
      "Rough wrist",
      "1/2 coated"
    ]
  },
  {
    id: 16,
    name: "Sy7102 550gms T/C Knitted Gloves",
    category: "Gloves",
    image: "/sy7102.png",  // Add the image path for the Sy7102 gloves
    description: [
      "550gms weight",
      "10G T/C natural color",
      "Knitted gloves"
    ]
  },
  {
    id: 17,
    name: "Sy7102 550gms T/C Knitted Gloves",
    category: "Gloves",
    image: "/sy71022.png",  // Add the image path for the Sy7102 gloves
    description: [
      "550gms weight",
      "10G T/C natural color",
      "Knitted gloves"
    ]
  },
  {
    id: 18,
    name: "DDAG2550 10G T/C White Bleached Knitted Gloves",
    category: "Gloves",
    image: "/ddag2550.png",  // Add the image path for the DDAG2550 gloves
    description: [
      "10G T/C white bleached knitted gloves",
      "Blue PVC dots coated on both sides"
    ]
  },
  {
    id: 19,
    name: "D5000 Nitrile 3.5g Powder Free",
    category: "Gloves",
    image: "/d5000.png",  // Add the image path for the D5000 gloves
    description: [
      "3.5g nitrile gloves",
      "Powder free for hygienic use",
      "Disposable for single-use applications"
    ]
  },
  {
    id: 20,
    name: "Latex Powdered Gloves AQL 1.5",
    category: "Gloves",
    image: "/latex.png",  // Add the image path for the latex powdered gloves
    description: [
      "Powdered latex gloves",
      "AQL 1.5 for quality assurance",
      "Disposable for single-use applications"
    ]
  },
  {
    id: 21,
    name: "COMBAT 1256",
    category: "Footwear",
    image: "/combat.png", // Add the image path for the Combat 1256 footwear
    description: [
      "Leather 1.8MM",
      "Cleated outsole, heat resistant",
      "Rubber (DVP) outsole",
      "Height: 8.5 inches",
      "Available sizes: 5-12",
      "Color: Black",
      "ISO 20347:2012 OB certified"
    ]
  },
  {
    id: 22,
    name: "PARADE 1298",
    category: "Footwear",
    image: "/parade.png", // Add the image path for the Parade 1298 footwear
    description: [
      "Leather 1.8MM",
      "Cleated outsole, heat resistant",
      "Rubber (DVP) outsole",
      "Height: 8.5 inches",
      "Available sizes: 5-12",
      "Color: Black",
      "ISO 20347:2012 OB certified"
    ]
  },
  {
    id: 23,
    name: "LADIES OFFICER 1490",
    category: "Footwear",
    image: "/ladies.png", // Add the image path for the Ladies Officer 1490 footwear
    description: [
      "Leather 1.5MM",
      "TPR outsole",
      "Available sizes: 5-12",
      "Color: Black",
      "ISO 20347:2012 OB certified"
    ]
  },
  {
    id: 24,
    name: "OXFORD 1263",
    category: "Footwear",
    image: "/oxford.png", // Add the image path for the Oxford 1263 footwear
    description: [
      "Leather 1.5MM",
      "TPR outsole",
      "Available sizes: 5-12",
      "Color: Black",
      "ISO 20347:2012 OB certified"
    ]
  },
  {
    id: 25,
    name: "NYATI D-512",
    category: "Footwear",
    image: "/nyati.png", // Add the image path for the Nyati D-512 footwear
    description: [
      "Water Resistant Leather 1.8MM",
      "Breathable 3D Air Mesh lining",
      "P.U. outsole",
      "Steel toecap for 200J impact protection",
      "Available sizes: 40-46",
      "ISO 20347:2011 S2 certified"
    ]
  },
  {
    id: 26,
    name: "DERBY 1262",
    category: "Footwear",
    image: "/derby.png", // Add the image path for the Derby 1262 footwear
    description: [
      "Leather 1.5MM",
      "TPR outsole",
      "Available sizes: 5-12",
      "Color: Black",
      "ISO 20347:2012 OB certified"
    ]
  },
  {
    id: 27,
    name: "JOGGER EXECUTIVE SHOES",
    category: "Footwear",
    image: "/jogger.png", // Add the image path for the Jogger Executive Shoes
    description: [
      "Leather 1.5MM",
      "TPR outsole",
      "Available sizes: 5-12",
      "Color: Black",
      "ISO 20347:2012 OB certified"
    ]
  },
  {
    id: 28,
    name: "COMBAT CAMO 1304",
    category: "Footwear",
    image: "/combatcamo.png", // Add the image path for the Combat Camo 1304
    description: [
      "Leather 1.8mm",
      "Cleated Outsole, Heat Resistant",
      "Rubber (DVP) outsole",
      "Height: 8.5 Inches",
      "Available sizes: 5-12",
      "Color: Multicolor",
      "ISO 20347:2012 OB certified"
    ]
  },
  {
    id: 29,
    name: "ACE MARA GUMBOOTS 1514",
    category: "Footwear",
    image: "/mara.png", // Add the image path for the Ace Mara Gumboots 1514
    description: [
      "PVC upper",
      "Polyester Woven lining",
      "PVC outsole",
      "Steel Toecap for 200J Impact",
      "Available sizes: 6-11",
      "Color: Black",
      "ISO 20345:2011 SB certified"
    ]
  },
  {
    id: 30,
    name: "ACE TSAVO SAFETY 1287",
    category: "Footwear",
    image: "/tsavo.png", // Add the image path for the Ace Tsavo Safety 1287
    description: [
      "PVC upper",
      "Polyester Woven lining",
      "PVC outsole",
      "Steel Toecap for 200J Impact",
      "Available sizes: 6-11",
      "Color: Black",
      "ISO 20345:2011 SB certified"
    ]
  },
  {
    id: 31,
    name: "SAFETY JACKET2",
    category: "Protective Gear",
    image: "/sj2.png", // Add the image path for the Safety Jacket2
    description: [
      "2-Line Cloth Safety Jacket",
      "100gsm polyester",
      "Knitted fabric"
    ]
  },
  {
    id: 32,
    name: "SJ 4 Line Cloth",
    category: "Protective Gear",
    image: "/sj4.png", // Add the image path for SJ 4 Line Cloth
    description: [
      "4-Line Cloth Safety Jacket",
      "120gsm polyester",
      "Knitted fabric"
    ]
  },
  {
    id: 33,
    name: "VWJK04 Bomber Jacket",
    category: "Protective Gear",
    image: "/bomber.png", // Add the image path for VWJK04 Bomber Jacket
    description: [
      "Bomber Jacket",
      "100% Poly 300D Oxford with polyurethane coating",
      "180gsm Polyester quilt lining"
    ]
  },
  {
    id: 34,
    name: "SJ 22 3M",
    category: "Protective Gear",
    image: "/sj22.png", // Add the image path for SJ 22 3M
    description: [
      "120gsm Polyester knied fabric",
      "3M reflective material"
    ]
  },
  {
    id: 35,
    name: "TAHA T/C COVERALL 65/35",
    category: "Protective Gear",
    image: "/taha.png", // Add the image path for Taha T/C Coverall
    description: [
      "65% Polyester, 35% Cotton blend",
      "135gsm Poplin material"
    ]
  },
  {
    id: 36,
    name: "RAINSUIT POLY REF",
    category: "Protective Gear",
    image: "/polyref.png", // Add the image path for Rainsuit Poly Ref
    description: [
      "0.18mm thickness",
      "170g Taeta Polyester/PVC material"
    ]
  },
  {
    id: 37,
    name: "RAINSUIT PVC",
    category: "Protective Gear",
    image: "/rainpvc.png", // Add the image path for Rainsuit PVC
    description: [
      "0.28mm thickness",
      "PVC/Polyester material"
    ]
  },
  {
    id: 38,
    name: "RAINSUIT PVC 0.28mm",
    category: "Protective Gear",
    image: "/rainpvc2.png", // Add the image path for Rainsuit PVC 0.28mm
    description: [
      "0.28mm thickness",
      "PVC/Polyester material"
    ]
  },
  {
    id: 39,
    name: "RAINCOAT POLY",
    category: "Protective Gear",
    image: "/poly.png", // Add the image path for Raincoat Poly
    description: [
      "0.18mm thickness",
      "170 Taeta Polyester/PVC material"
    ]
  },
  {
    id: 40,
    name: "RAINCOAT POLY REF",
    category: "Protective Gear",
    image: "/polyref2.png", // Add the image path for Raincoat Poly Ref
    description: [
      "0.18mm thickness",
      "170 Taeta Polyester/PVC material"
    ]
  },
  {
    id: 41,
    name: "WORKMAN 100% COTTON 2 PC SUIT",
    category: "Protective Gear",
    image: "/workman.png", // Add the image path for Workman 2 PC Suit
    description: [
      "100% Cotton",
      "195gsm Twill Material"
    ]
  },
  {
    id: 42,
    name: "AP 2 PC SUIT",
    category: "Protective Gear",
    image: "/ap2pc.png", // Add the image path for AP 2 PC Suit
    description: [
      "100% Cotton",
      "195gsm Twill Material"
    ]
  },
  {
    id: 43,
    name: "AQ Jacket & Trouser",
    category: "Protective Gear",
    image: "/aqjacket.png", // Add the image path for AQ Jacket & Trouser
    description: [
      "65/35 Polyester/Cotton",
      "240gsm"
    ]
  },
  {
    id: 44,
    name: "TAHA PYROVATEX FR COVERALL",
    category: "Protective Gear",
    image: "/tahapyrovatex.png", // Add the image path for TAHA PYROVATEX FR COVERALL
    description: [
      "100% Cotton",
      "270gsm"
    ]
  },
  {
    id: 45,
    name: "TAHA PROTEX FR COVERALL",
    category: "Protective Gear",
    image: "/tahaprotex.png", // Add the image path for TAHA PROTEX FR COVERALL
    description: [
      "180gsm",
      "55% Modacrylic, 43% Cotton, 2% Carbon fibers"
    ]
  },
  {
    id: 46,
    name: "TAHA T/C COVERALL",
    category: "Protective Gear",
    image: "/tahacoverall.png", // Add the image path for TAHA T/C COVERALL
    description: [
      "65% Polyester, 35% Cotton",
      "135gsm Poplin material"
    ]
  },
  {
    id: 47,
    name: "TAHA T/C COVERALL",
    category: "Protective Gear",
    image: "/tahacoverall2.png", // Add the image path for TAHA T/C COVERALL
    description: [
      "65% Polyester, 35% Cotton",
      "135gsm Poplin material"
    ]
  },
  {
    id: 48,
    name: "POWER COVERALL",
    category: "Protective Gear",
    image: "/powercoverall.png", // Add the image path for POWER COVERALL
    description: [
      "65% Polyester, 35% Cotton",
      "250gsm Twill material"
    ]
  },
  {
    id: 49,
    name: "NEO COVERALL",
    category: "Protective Gear",
    image: "/neocoverall.png", // Add the image path for NEO COVERALL
    description: [
      "65% Polyester, 35% Cotton",
      "267gsm material"
    ]
  },
  {
    id: 50,
    name: "RIPSTOP BIBPANTS",
    category: "Protective Gear",
    image: "/ripstopbibpants.png", // Add the image path for RIPSTOP BIBPANTS
    description: [
      "65% Polyester, 35% Cotton",
      "240gsm Ripstop material"
    ]
  },
  {
    id: 51,
    name: "VAULTEX Safety Helmet",
    category: "Head and Eye and Ear Protection",
    image: "/vaultex.png", // Add the image path for VAULTEX Safety Helmet
    description: [
      "Durable safety helmet for head protection",
      "Adjustable headband for secure fit",
      "Compliant with safety standards"
    ]
  },
  {
    id: 52,
    name: "PROTECTA Safety Helmet",
    category: "Head and Eye and Ear Protection",
    image: "/protecta.png", // Add the image path for PROTECTA Safety Helmet
    description: [
      "High-quality safety helmet for head protection",
      "Adjustable chin strap for better fit",
      "Impact-resistant shell and breathable design",
      "Meets international safety standards"
    ]
  },
  {
    id: 53,
    name: "JSP Safety Helmet",
    category: "Head and Eye and Ear Protection",
    image: "/jsp.png", // Add the image path for JSP Safety Helmet
    description: [
      "Durable and lightweight safety helmet",
      "Adjustable harness for comfort and secure fit",
      "High-impact resistant shell",
      "Ventilation holes for breathability",
      "Meets European safety standards EN 397"
    ]
  },
  {
    id: 54,
    name: "Bump Cap",
    category: "Head and Eye and Ear Protection",
    image: "/bumpcap.png", // Add the image path for the Bump Cap
    description: [
      "Polyurethane-coated",
      "Polyamide lined",
      "Polyethylene construction for durability",
      "Provides protection against light head impacts"
    ]
  },
  {
    id: 55,
    name: "VE Air Colton Cap",
    category: "Head and Eye and Ear Protection",
    image: "/vecap.png", // Add the image path for the VE Air Colton Cap
    description: [
      "Polyurethane-coated",
      "Polyamide construction",
      "Lightweight design for comfort",
      "Ventilated for airflow",
      "Ideal for use in environments with low risk of head impact"
    ]
  },
  {
    id: 56,
    name: "WK FFP1",
    category: "Head and Eye and Ear Protection",
    image: "/wkffp1.png", // Add the image path for the WK FFP1
    description: [
      "FFP1 Respirator",
      "Protects against low-risk dusts and aerosols",
      "Comfortable and lightweight design",
      "Elasticated straps for secure fit",
      "Conforms to EN 149:2001 standard"
    ]
  },
  {
    id: 57,
    name: "WK FFP1 V",
    category: "Head and Eye and Ear Protection",
    image: "/wkffp1v.png", // Add the image path for the WK FFP1 V
    description: [
      "FFP1 Respirator with Valve",
      "Protects against low-risk dusts and aerosols",
      "Valve for enhanced breathability and comfort",
      "Elasticated straps for secure fit",
      "Conforms to EN 149:2001 standard"
    ]
  },
  {
    id: 58,
    name: "WK FFP1 CARBON",
    category: "Head and Eye and Ear Protection",
    image: "/wkffp1carbon.png", // Add the image path for the WK FFP1 CARBON
    description: [
      "FFP1 Respirator with Activated Carbon",
      "Protects against low-risk dusts, aerosols, and fumes",
      "Activated carbon layer for odor and gas filtration",
      "Elasticated straps for secure fit",
      "Conforms to EN 149:2001 standard"
    ]
  },
  {
    id: 59,
    name: "WK FFP1 FLAT V",
    category: "Head and Eye and Ear Protection",
    image: "/wkffp1flat.png", // Add the image path for the WK FFP1 FLAT V
    description: [
      "FFP1 Respirator with Flat V Design",
      "Protects against low-risk dusts, aerosols, and fumes",
      "Flat V design for comfort and secure fit",
      "Elasticated straps for ease of use",
      "Conforms to EN 149:2001 standard"
    ]
  },
  {
    id: 60,
    name: "DELTAPLUS FFP1 VALVE",
    category: "Head and Eye and Ear Protection",
    image: "/deltaplus.png", // Add the image path for the DELTAPLUS FFP1 VALVE
    description: [
      "FFP1 Respirator with Valve for Enhanced Comfort",
      "Protects against low-risk dusts, aerosols, and fumes",
      "Built-in valve for reduced exhalation resistance",
      "Elasticated straps for a secure fit",
      "Conforms to EN 149:2001 standard"
    ]
  },
  {
    id: 61,
    name: "WK Cm1001 S Chemical Mask",
    category: "Head and Eye and Ear Protection",
    image: "/wkcm1001.png", // Add the image path for the WK Cm1001 S Chemical Mask
    description: [
      "Chemical mask designed for protection against hazardous chemicals",
      "Equipped with high-performance filters for optimal safety",
      "Adjustable straps for a secure and comfortable fit",
      "Made from durable, lightweight materials for ease of use",
      "Conforms to safety standards for chemical protection"
    ]
  },
  {
    id: 62,
    name: "WK CM 1002 D Chemical Mask",
    category: "Head and Eye and Ear Protection",
    image: "/wkam1002.png", // Add the image path for the WK CM 1002 D Chemical Mask
    description: [
      "Chemical mask designed for protection against hazardous chemicals",
      "Features dual filters for enhanced protection",
      "Adjustable head straps for a secure and customized fit",
      "Lightweight and durable construction for comfort during prolonged use",
      "Meets safety standards for chemical protection in various environments"
    ]
  },
  {
    id: 63,
    name: "M6300 JUPITER Thermo-plastic Elastomer Half Mask",
    category: "Head and Eye and Ear Protection",
    image: "/m6300.png", // Add the image path for the M6300 JUPITER Thermo-plastic Elastomer Half Mask
    description: [
      "Thermo-plastic elastomer half mask for effective respiratory protection",
      "Ergonomic design for comfort and secure fit",
      "Compatible with a wide range of filters for various environments",
      "Durable and lightweight construction",
      "Offers superior resistance to chemicals and abrasion",
      "Adjustable straps for a customizable fit"
    ]
  },
  {
    id: 64,
    name: "NORTH 550030 Thermo-plastic Elastomer Half Mask",
    category: "Head and Eye and Ear Protection",
    image: "/550030.png", // Add the image path for the NORTH 550030 Thermo-plastic Elastomer Half Mask
    description: [
      "Thermo-plastic elastomer half mask for durable and comfortable fit",
      "Flexible design for all-day wear without discomfort",
      "Offers excellent chemical and particulate protection",
      "Compatible with various North filters for versatility",
      "Lightweight and robust construction",
      "Adjustable head straps for a secure and customized fit"
    ]
  },
  {
    id: 65,
    name: "VENUS MASK Thermo-plastic Half Mask",
    category: "Head and Eye and Ear Protection",
    image: "/venusmask.png", // Add the image path for the Venus Mask Thermo-plastic Half Mask
    description: [
      "Thermo-plastic half mask for comfort and durability",
      "Provides reliable protection against dust and airborne particles",
      "Flexible and lightweight for extended use",
      "Adjustable straps for a secure fit",
      "Compatible with a range of Venus filters for enhanced protection"
    ]
  },
  {
    id: 66,
    name: "WK WS 2004 Taiwan Type Welding Mask",
    category: "Head and Eye and Ear Protection",
    image: "/wkws2004.png", // Add the image path for the WK WS 2004 Welding Mask
    description: [
      "High-quality PP material for durability",
      "Taiwan type welding mask designed for professional use",
      "Provides protection from welding sparks, heat, and UV radiation",
      "Adjustable headgear for comfort during extended use",
      "Lightweight design to reduce strain on the user"
    ]
  },
  {
    id: 68,
    name: "WK WS 3001 American Type Welding Mask",
    category: "Head and Eye and Ear Protection",
    image: "/wkws3001.png", // Update with actual image path
    description: [
      "High-quality PP material for durability",
      "American type welding mask designed for professional use",
      "Protects from welding sparks, heat, and UV radiation",
      "Comfortable and adjustable headgear",
      "Lightweight design"
    ]
  },
  {
    id: 69,
    name: "WK FS 5001 PC Face Shield",
    category: "Head and Eye and Ear Protection",
    image: "/wkfs5001.png", // Update with actual image path
    description: [
      "PC (Polycarbonate) face shield for high impact resistance",
      "Provides full face protection from flying debris and sparks",
      "Adjustable headgear for a secure and comfortable fit",
      "Lightweight and durable design",
      "Ideal for industrial, construction, and welding applications"
    ]
  },
  {
    id: 70,
    name: "WK FS 5003 PMMA Face Shield",
    category: "Head and Eye and Ear Protection",
    image: "/wkfs5003.png", // Update with actual image path
    description: [
      "PMMA (Acrylic) face shield with excellent optical clarity",
      "Provides full face protection from flying debris and sparks",
      "Moulded design for enhanced comfort and durability",
      "Offers superior viewing for precision tasks",
      "Ideal for industrial, construction, and welding applications"
    ]
  },
  {
    id: 71,
    name: "WK EM 5001 ECO Ear Defender",
    category: "Head and Eye and Ear Protection",
    image: "/wkem5001.png", // Update with actual image path
    description: [
      "28 dB noise reduction rating (NRR)",
      "ABS construction with synthetic foam cups for comfort",
      "Eco-friendly materials",
      "Adjustable headband for a secure fit",
      "Ideal for reducing noise in loud environments like construction sites, workshops, and factories"
    ]
  },
  {
    id: 72,
    name: "WK EM 5003 ECO Ear Defender",
    category: "Head and Eye and Ear Protection",
    image: "/wkem5003.png", // Update with actual image path
    description: [
      "25 dB noise reduction rating (NRR)",
      "Polystyrene (PS) construction with synthetic foam cups",
      "Eco-friendly materials",
      "Adjustable headband for a secure fit",
      "Designed for use in environments with moderate to high noise levels"
    ]
  },
  {
    id: 73,
    name: "SPA 3 28dB Ear Defender",
    category: "Head and Eye and Ear Protection",
    image: "/spa3.png", // Update with actual image path
    description: [
      "28 dB noise reduction rating (NRR)",
      "Polystyrene (PS) construction with synthetic foam cups",
      "Designed for maximum noise attenuation",
      "Adjustable headband for a comfortable fit",
      "Perfect for high-noise environments"
    ]
  },
  {
    id: 74,
    name: "SEPANG 29 dB Ear Defender",
    category: "Head and Eye and Ear Protection",
    image: "/sepang29.png", // Update with actual image path
    description: [
      "29 dB noise reduction rating (NRR)",
      "ABS construction with synthetic foam cups",
      "Provides superior noise protection",
      "Adjustable headband for a secure and comfortable fit",
      "Ideal for high-noise industrial environments"
    ]
  },
  {
    id: 75,
    name: "CONICCO 200 Polyurethane Earplugs",
    category: "Head and Eye and Ear Protection",
    image: "/conicco200.png", // Update with actual image path
    description: [
      "Polyurethane earplugs with plastic cord",
      "12mm size for optimal fit",
      "37 dB noise reduction rating (NRR)",
      "Ideal for use in high-noise environments",
      "Reusable and durable design"
    ]
  },
  {
    id: 76,
    name: "WL09 100CMS",
    category: "Other Safety Gear",
    image: "/wl09.png", // Add the image path for WL09 100CMS
    description: [
      "HDPE cone body",
      "PVC base",
      "Weight: 5kgs",
      "Height: 100cm",
      "Ideal for traffic and safety management"
    ]
  },
  {
    id: 77,
    name: "WL 10 75CMS",
    category: "Other Safety Gear",
    image: "/wl10.png", // Add the image path for WL 10 75CMS
    description: [
      "HDPE cone body",
      "PVC base",
      "Weight: 2.5kgs",
      "Height: 75cm",
      "Ideal for traffic and safety management"
    ]
  },
  {
    id: 78,
    name: "WL 11 50CMS",
    category: "Other Safety Gear",
    image: "/wl11.png", // Add the image path for WL 11 50CMS
    description: [
      "HDPE cone body",
      "PVC base",
      "Weight: 2kgs",
      "Height: 50cm",
      "Ideal for traffic and safety management"
    ]
  },
  {
    id: 79,
    name: "WL 12 70CMS",
    category: "Other Safety Gear",
    image: "/wl12.png", // Add the image path for WL 12 70CMS
    description: [
      "HDPE red cone body",
      "PVC base",
      "Weight: 2.3kg",
      "Height: 70cm",
      "Ideal for traffic and safety management"
    ]
  },
  {
    id: 80,
    name: "WL 13 90CMS",
    category: "Other Safety Gear",
    image: "/wl13.png", // Add the image path for WL 13 90CMS
    description: [
      "HDPE red cone body",
      "PVC base",
      "Weight: 4kg",
      "Height: 90cm",
      "Ideal for traffic and safety management"
    ]
  },
  {
    id: 81,
    name: "WL 14 75 CMS PU",
    category: "Other Safety Gear",
    image: "/wl14.png", // Add the image path for WL 14 75 CMS PU
    description: [
      "PU flexible post",
      "Height: 75cm",
      "Weight: 1.4kg",
      "Ideal for safety, traffic management, and temporary barricades"
    ]
  },
  {
    id: 82,
    name: "WL 26, WL 27 WARNING CHAIN",
    category: "Other Safety Gear",
    image: "/wl26.png", // Add the image path for the warning chain
    description: [
      "Plastic warning chain",
      "Made from PE (Polyethylene) material",
      "Used for demarcation and safety barriers"
    ]
  },
  {
    id: 83,
    name: "Warning Tapes",
    category: "Other Safety Gear",
    image: "/warningtapes.png", // Add the image path for the warning tapes
    description: [
      "Durable, high-visibility safety tape",
      "Used for demarcating hazardous areas",
      "Available in various colors: Yellow, Red, Black, and more",
      "Ideal for indoor and outdoor use"
    ]
  },
  {
    id: 84,
    name: "FS 018 Office Kit",
    category: "Other Safety Gear",
    image: "/fs018.png", // Add the image path for the office kit
    description: [
      "Comprehensive office safety kit",
      "Includes essential safety tools and accessories",
      "Ideal for workplace first aid and emergency situations",
      "Compact and easy to store"
    ]
  },
  {
    id: 85,
    name: "FS 033 Medical Kit",
    category: "Other Safety Gear",
    image: "/fs033.png", // Add the image path for the medical kit
    description: [
      "Comprehensive medical kit for workplace emergencies",
      "Includes a variety of first aid supplies",
      "Compact and organized for easy access",
      "Ideal for offices, factories, and other workplaces"
    ]
  },
  {
    id: 86,
    name: "FS 037 Multi Kit",
    category: "Other Safety Gear",
    image: "/fs037.png", // Add the image path for the multi kit
    description: [
      "Versatile multi-purpose safety kit",
      "Includes essential safety gear for various situations",
      "Compact and portable design",
      "Suitable for multiple industries and workplaces"
    ]
  },
  {
    id: 87,
    name: "FS 013 Home Care Kit",
    category: "Other Safety Gear",
    image: "/fs013.png", // Add the image path for the home care kit
    description: [
      "Complete home care safety kit",
      "Includes first aid essentials and personal protective equipment",
      "Compact and easy to store",
      "Ideal for home and small office environments"
    ]
  },
  {
    id: 88,
    name: "Fibre Glass A-type Double Sided Ladder",
    category: "Other Safety Gear",
    image: "/fibredouble.png", // Add the image path for the ladder
    description: [
      "Durable fibre glass construction",
      "Double-sided design for easy access",
      "Non-conductive, ideal for electrical work",
      "Lightweight and easy to maneuver",
      "Available in multiple sizes for various heights"
    ]
  },
  {
    id: 89,
    name: "Aluminum Platform",
    category: "Other Safety Gear",
    image: "/al.png", // Add the image path
    description: [
      "Durable aluminum construction",
      "Lightweight and easy to carry",
      "Slip-resistant surface",
      "Various sizes available for different needs"
    ]
  },
  {
    id: 90,
    name: "Aluminum Platform",
    category: "Other Safety Gear",
    image: "/al2.png", // Add the image path
    description: [
      "Durable aluminum construction",
      "Lightweight and portable",
      "Slip-resistant surface",
      "Ideal for use in various work environments"
    ]
  },
  {
    id: 91,
    name: "Aluminum Platform Double-sided",
    category: "Other Safety Gear",
    image: "/aldouble.png", // Add the image path
    description: [
      "Durable double-sided aluminum platform",
      "Lightweight and easy to move",
      "Slip-resistant surface on both sides",
      "Ideal for various work environments"
    ]
  },
  {
    id: 92,
    name: "Fiberglass A-type Ladder",
    category: "Other Safety Gear",
    image: "/fibre.png", // Add the image path
    description: [
      "Fiberglass A-type ladder for increased stability",
      "Non-conductive material for electrical safety",
      "Slip-resistant feet for added safety",
      "Lightweight and portable design"
    ]
  },
  {
    id: 93,
    name: "WK SC 30 Disposable Nonwoven Fabric",
    category: "Other Safety Gear",
    image: "/wksc30.png", // Add the image path
    description: [
      "Made from high-quality nonwoven fabric",
      "Disposable for single-use applications",
      "Lightweight and breathable material",
      "Provides basic protection in various environments"
    ]
  },
  {
    id: 94,
    name: "WK SC PE Disposable Nonwoven Fabric",
    category: "Other Safety Gear",
    image: "/wkscpe.png", // Add the image path
    description: [
      "Made from durable PE material",
      "Disposable for single-use applications",
      "Lightweight and breathable",
      "Provides basic protection in various environments"
    ]
  },
  {
    id: 95,
    name: "SURCHPE Polyethylene 30 u",
    category: "Other Safety Gear",
    image: "/surchpe.png", // Add the image path
    description: [
      "Made from high-quality Polyethylene (PE) material",
      "30 microns thickness for effective protection",
      "Durable and flexible for various safety applications",
      "Provides barrier protection against dirt and contamination"
    ]
  },
  {
    id: 96,
    name: "PO 110 Non-woven Polypropylene",
    category: "Other Safety Gear",
    image: "/po110.png", // Add the image path
    description: [
      "Made from high-quality Non-woven Polypropylene material",
      "Durable and lightweight for a variety of applications",
      "Provides effective protection against dust, dirt, and liquids",
      "Ideal for disposable safety gear"
    ]
  },
  {
    id: 97,
    name: "WK MC 10 Polypropylene",
    category: "Other Safety Gear",
    image: "/wkmc10.png", // Add the image path
    description: [
      "Made from durable Polypropylene material",
      "Lightweight and flexible for comfort",
      "Provides effective protection in various environments",
      "Ideal for disposable safety applications"
    ]
  },
  {
    id: 98,
    name: "PO 110 Non-woven Polypropylene",
    category: "Other Safety Gear",
    image: "/po110.png", // Add the image path
    description: [
      "Constructed with durable Non-woven Polypropylene material",
      "Lightweight and breathable for comfort",
      "Suitable for disposable protective applications",
      "Provides effective barrier protection"
    ]
  },
  {
    id: 99,
    name: "DT 117",
    category: "Other Safety Gear",
    image: "/dt117.png", // Add the image path
    description: [
      "Made of 50% Polypropylene and 50% Polyethylene",
      "Durable and resistant to wear",
      "Lightweight and comfortable for extended use",
      "Suitable for protective safety applications"
    ]
  },
  {
    id: 100,
    name: "WK DC 1040",
    category: "Other Safety Gear",
    image: "/wkdc1040.png", // Add the image path
    description: [
      "Made of Polypropylene",
      "Non-woven fabric with 40 gsm thickness",
      "Lightweight and breathable material",
      "Ideal for safety and protective applications"
    ]
  },
  {
    id: 101,
    name: "WK DC 2055",
    category: "Other Safety Gear",
    image: "/wkdc2055.png", // Add the image path
    description: [
      "Made of SMS (Spunbond Meltblown Spunbond) fabric",
      "55 gsm thickness",
      "Type 5/6 protective clothing",
      "Offers protection against particles and liquids"
    ]
  },
  {
    id: 102,
    name: "WK DC 3055",
    category: "Other Safety Gear",
    image: "/wkdc3055.png", // Add the image path
    description: [
      "Made of Microporous Spunbond Laminate material",
      "55 gsm thickness",
      "Type 5/6 protective clothing",
      "Offers protection against particles and liquids"
    ]
  },
  {
    id: 103,
    name: "WK DC 63gsm",
    category: "Other Safety Gear",
    image: "/wkdc63.png", // Add the image path
    description: [
      "Made of Microporous Spray Tight Spunbond Polyethylene material",
      "63 gsm thickness",
      "Type 4/5/6 protective clothing",
      "Offers protection against particles, liquids, and sprays"
    ]
  },
  {
    id: 104,
    name: "WK 05 Belt PE",
    category: "Other Safety Gear",
    image: "/wk05belt.png", // Add the image path
    description: [
      "Made with durable polyethylene material",
      "Includes belt and rope for safety",
      "Adjustable for comfort and secure fit",
      "Designed for use in fall protection and safety applications"
    ]
  },
  {
    id: 105,
    name: "WK 08 Harness Fall Arrester",
    category: "Other Safety Gear",
    image: "/wk08harness.png", // Add the image path
    description: [
      "Fall arrester designed for safety in high-risk work environments",
      "Made with durable polyethylene material",
      "Includes belt and rope for added security",
      "Adjustable harness for a secure and comfortable fit"
    ]
  },
  {
    id: 106,
    name: "WK 25 Harness Fall Arrester",
    category: "Other Safety Gear",
    image: "/wk25harness.png", // Add the image path
    description: [
      "Fall arrester designed for use in high-risk working conditions",
      "Constructed with strong polyethylene material",
      "Comes with belt and rope for enhanced safety",
      "Adjustable harness for secure fit and comfort"
    ]
  },
  {
    id: 107,
    name: "WK 15 Lanyard with Energy Absorber",
    category: "Other Safety Gear",
    image: "/wk15lanyard.png", // Add the image path
    description: [
      "Lanyard designed for fall protection",
      "Equipped with energy absorber for safe impact distribution",
      "Comes with one karabiner for secure attachment",
      "Durable and high-quality materials for maximum safety"
    ]
  },
  {
    id: 108,
    name: "WK SG 3001",
    category: "Head and Eye and Ear Protection",
    image: "/wksg3001.png", // Add the image path
    description: [
      "High-quality safety goggles for eye protection",
      "Designed for optimal comfort and secure fit",
      "Impact-resistant lens for protection against debris and particles",
      "Ideal for industrial and construction environments"
    ]
  },
  {
    id: 109,
    name: "WK SG 3002",
    category: "Head and Eye and Ear Protection",
    image: "/wksg3002.png", // Add the image path
    description: [
      "Durable and high-quality safety goggles",
      "Offers protection against dust, chemicals, and flying particles",
      "Comfortable design with adjustable straps",
      "Anti-fog coating for clear visibility"
    ]
  },
  {
    id: 110,
    name: "WK SG 3003",
    category: "Head and Eye and Ear Protection",
    image: "/wksg3003.png", // Add the image path
    description: [
      "Professional-grade safety goggles",
      "Provides protection against chemicals, dust, and debris",
      "Comfortable, adjustable straps for a secure fit",
      "Anti-scratch and anti-fog lenses for clear vision"
    ]
  },
  {
    id: 111,
    name: "WK SG 3005",
    category: "Head and Eye and Ear Protection",
    image: "/wksg3005.png", // Add the image path
    description: [
      "Heavy-duty safety goggles",
      "Protects against impact, chemicals, and UV light",
      "Anti-scratch and anti-fog lens coating for clear vision",
      "Adjustable strap for a comfortable, secure fit"
    ]
  },
  {
    id: 112,
    name: "WK SG 71003",
    category: "Head and Eye and Ear Protection",
    image: "/wksg71003.png", // Add the image path
    description: [
      "High-quality safety goggles",
      "Impact-resistant lens for enhanced protection",
      "Anti-fog and scratch-resistant coating",
      "Designed for use in hazardous environments",
      "Adjustable head strap for a secure and comfortable fit"
    ]
  },
  {
    id: 113,
    name: "WK SG 3001",
    category: "Head and Eye and Ear Protection",
    image: "/wksg30012.png", // Add the image path
    description: [
      "Durable safety goggles",
      "Anti-fog and scratch-resistant lenses",
      "Provides clear vision in high-risk environments",
      "Adjustable head strap for a customized fit",
      "Lightweight and comfortable design"
    ]
  },
  {
    id: 114,
    name: "WK WG 1002",
    category: "Head and Eye and Ear Protection",
    image: "/wkwg1002wk.png", // Add the image path
    description: [
      "High-quality welding gloves",
      "Made with durable leather for superior protection",
      "Soft cotton lining for comfort",
      "Heat-resistant material",
      "Protects hands from sparks, molten metal, and heat"
    ]
  },
  {
    id: 145,
    name: "CO2 Fire Extinguisher",
    category: "Other Safety Gear", // Corrected category
    image: "/co2fire.png", // Add the image path
    description: [
      "Carbon dioxide extinguishers, best for electrical fires and flammable liquids (Class B)",
      "Effective for use in offices, server rooms, and workshops",
      "Lightweight and easy to operate",
      "Environmentally friendly and leaves no residue"
    ]
  },
  {
    id: 146, // Next ID
    name: "9L Water Fire Extinguisher",
    category: "Other Safety Gear", // Same category
    image: "/9l.png", // Add the image path
    description: [
      "Water extinguishers, used for Class A fires (solid materials like wood and paper)",
      "Ideal for homes, schools, and offices",
      "Environmentally friendly with no chemicals",
      "Easy to operate and maintain"
    ]
  },
  {
    id: 147, // Next ID
    name: "Wet Chemical Fire Extinguisher",
    category: "Other Safety Gear",
    image: "/wet.png", // Add the image path
    description: [
      "Designed for kitchen fires, especially effective on Class F fires (cooking oils)",
      "Highly effective at cooling and extinguishing fires caused by hot oil or grease",
      "Suitable for use in restaurants, catering facilities, and domestic kitchens",
      "Compact and easy to use"
    ]
  },
  {
    id: 148, // Next ID
    name: "Foam Fire Extinguishers 6L & 9L",
    category: "Other Safety Gear",
    image: "/foam.png", // Add the image path
    description: [
      "Foam extinguishers, ideal for flammable liquids (Class B) and solids (Class A)",
      "Suitable for use in homes, offices, and workshops",
      "Effective at forming a blanket over liquid fires to suppress vapors",
      "Lightweight and easy to handle"
    ]
},
{
  id: 149, // Next ID
  name: "9, 6, 4 KG DP Fire Extinguisher",
  category: "Other Safety Gear",
  image: "/9.6.png", // Add the correct image path
  description: [
    "Dry Chemical Powder extinguishers, effective for Class A, B, and C fires",
    "Versatile and suitable for homes, offices, and industrial settings",
    "Compact and easy to operate",
    "Reliable for tackling a range of fire types"
  ]
},
{
  id: 150, // Next ID
  name: "Fire Exit Sign",
  category: "Safety Signages",
  image: "/fireexit.png", // Add the correct image path
  description: [
    "Highly visible fire exit sign for emergency escape routes",
    "Glow-in-the-dark material for visibility in low-light conditions",
    "Durable and weather-resistant for indoor and outdoor use",
    "Meets safety regulations and compliance standards",
    "Easy installation on walls, doors, or ceilings"
  ]
}
  
];




const categories = [
  "Footwear",
  "Gloves",
  "Protective Gear",
  "Head and Eye and Ear Protection",
  "Safety Signages",
  "Other Safety Gear",
];

export { products, categories };
