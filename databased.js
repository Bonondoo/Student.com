// Comprehensive 
            const cropDiseaseDatabase = {
    maize: {
        name: "Maize",
        diseases: [
            {
                id: "maize_blight",
                name: "Northern Corn Leaf Blight",
                symptoms: ["long elliptical gray-green lesions", "lesions with dark borders", "leaves turning brown", "cigar-shaped spots"],
                causes: ["Exserohilum turcicum fungus", "high humidity", "moderate temperatures", "infected crop debris"],
                prevention: ["crop rotation", "resistant varieties", "proper field sanitation", "avoid overhead irrigation"],
                severity: "medium",
                treatments: [
                    {
                        name: "Propiconazole",
                        dosage: "0.1% solution",
                        application: "Foliar spray every 14 days",
                        safety: "Wear protective clothing, avoid inhalation"
                    },
                    {
                        name: "Mancozeb",
                        dosage: "2g per liter",
                        application: "Spray at first sign of disease",
                        safety: "Use gloves, avoid contact with skin"
                    }
                ]
            },
            
            {
                id: "maize_rust",
                name: "Common Rust",
                symptoms: ["small reddish-brown pustules", "pustules on both leaf surfaces", "yellowing leaves", "premature leaf death"],
                causes: ["Puccinia sorghi fungus", "humid conditions", "moderate temperatures", "wind dispersal"],
                prevention: ["resistant hybrids", "balanced fertilization", "proper plant spacing", "field monitoring"],
                severity: "low",
                treatments: [
                    {
                        name: "Tebuconazole",
                        dosage: "250ml per hectare",
                        application: "Spray when disease first appears",
                        safety: "Avoid spray drift, use protective equipment"
                    }
                ]
            },
            {
                id: "maize_smut",
                name: "Common Smut",
                symptoms: ["large galls on ears and tassels", "white to black galls", "distorted plant parts", "silvery membrane covering galls"],
                causes: ["Ustilago maydis fungus", "plant wounds", "mechanical damage", "stressed plants"],
                prevention: ["avoid plant injury", "balanced nutrition", "proper harvesting", "resistant varieties"],
                severity: "medium",
                treatments: [
                    {
                        name: "Copper Sulfate",
                        dosage: "2-3g per liter",
                        application: "Preventive spray before flowering",
                        safety: "Avoid copper buildup, use protective gear"
                    }
                ]
            },
            {
                id: "maize_stalk_rot",
                name: "Stalk Rot",
                symptoms: ["brown discoloration inside stalks", "soft rotting tissue", "lodging plants", "premature death"],
                causes: ["Fusarium species", "stress conditions", "nutrient deficiency", "high plant density"],
                prevention: ["proper plant population", "balanced fertilization", "avoid stress", "timely harvest"],
                severity: "high",
                treatments: [
                    {
                        name: "Carbendazim",
                        dosage: "1g per liter",
                        application: "Soil drench at base of plants",
                        safety: "Toxic to aquatic life, wear gloves"
                    }
                ]
            },
            {
                id: "maize_downy_mildew",
                name: "Downy Mildew",
                symptoms: ["yellow stripes on leaves", "white fungal growth", "stunted plants", "systemic infection"],
                causes: ["Sclerospora graminicola", "high humidity", "cool temperatures", "infected seeds"],
                prevention: ["seed treatment", "resistant varieties", "field sanitation", "proper drainage"],
                severity: "high",
                treatments: [
                    {
                        name: "Metalaxyl",
                        dosage: "2.5ml per liter",
                        application: "Seed treatment and foliar spray",
                        safety: "Pre-harvest interval of 21 days"
                    }
                ]
            },
            {
                id: "maize_armyworm",
                name: "Fall Armyworm",
                symptoms: ["window pane feeding", "holes in leaves", "damaged growing points", "frass in leaf whorls"],
                causes: ["Spodoptera frugiperda larvae", "favorable weather", "continuous cropping", "lack of natural enemies"],
                prevention: ["early planting", "crop rotation", "biological control", "pheromone traps"],
                severity: "high",
                treatments: [
                    {
                        name: "Chlorpyrifos",
                        dosage: "2ml per liter",
                        application: "Spray in early morning or evening",
                        safety: "Highly toxic, use full protective equipment"
                    },
                    {
                        name: "Emamectin Benzoate",
                        dosage: "0.5g per liter",
                        application: "Target young larvae",
                        safety: "Toxic to bees, avoid flowering period"
                    }
                ]
            },
            {
                id: "maize_streak",
                name: "Maize Streak Virus",
                symptoms: ["yellow streaks parallel to veins", "stunted growth", "reduced ear size", "plant yellowing"],
                causes: ["Maize streak virus", "leafhopper vectors", "infected plant material", "continuous cropping"],
                prevention: ["resistant varieties", "vector control", "early planting", "remove infected plants"],
                severity: "high",
                treatments: [
                    {
                        name: "Imidacloprid",
                        dosage: "0.5ml per liter",
                        application: "Control leafhopper vectors",
                        safety: "Toxic to bees, apply in evening"
                    }
                ]
            },
            {
                id: "maize_cutworm",
                name: "Cutworm",
                symptoms: ["cut stems at soil level", "missing seedlings", "plants falling over", "larvae in soil"],
                causes: ["Agrotis species", "high soil moisture", "weedy fields", "organic matter"],
                prevention: ["clean cultivation", "biological control", "early planting", "soil preparation"],
                severity: "medium",
                treatments: [
                    {
                        name: "Carbaryl",
                        dosage: "2g per liter",
                        application: "Soil application around plants",
                        safety: "Toxic to beneficial insects"
                    }
                ]
            },
            {
                id: "maize_aphid",
                name: "Corn Aphid",
                symptoms: ["yellowing leaves", "honeydew on plants", "sooty mold", "stunted growth"],
                causes: ["Rhopalosiphum maidis", "favorable weather", "over-fertilization", "lack of predators"],
                prevention: ["balanced fertilization", "encourage natural enemies", "resistant varieties", "monitoring"],
                severity: "low",
                treatments: [
                    {
                        name: "Dimethoate",
                        dosage: "1ml per liter",
                        application: "Foliar spray when threshold reached",
                        safety: "Highly toxic, use protective equipment"
                    }
                ]
            },
            {
                id: "maize_thrips",
                name: "Maize Thrips",
                symptoms: ["silvering of leaves", "black specks on leaves", "reduced growth", "leaf curling"],
                causes: ["Thrips tabaci", "dry weather", "dusty conditions", "weedy surroundings"],
                prevention: ["maintain field hygiene", "irrigation", "biological control", "reflective mulches"],
                severity: "low",
                treatments: [
                    {
                        name: "Spinosad",
                        dosage: "0.5ml per liter",
                        application: "Early morning spray",
                        safety: "Low toxicity to mammals"
                    }
                ]
            },
            {
                id: "maize_stem_borer",
                name: "Maize Stem Borer",
                symptoms: ["holes in stems", "dead hearts", "boring holes", "frass outside holes"],
                causes: ["Busseola fusca", "Chilo partellus", "favorable weather", "continuous cropping"],
                prevention: ["crop rotation", "destroy crop residues", "biological control", "resistant varieties"],
                severity: "high",
                treatments: [
                    {
                        name: "Carbofuran",
                        dosage: "1kg per hectare",
                        application: "Granular application in whorl",
                        safety: "Extremely toxic, restricted use"
                    }
                ]
            },
            {
                id: "maize_gray_spot",
                name: "Gray Leaf Spot",
                symptoms: ["rectangular gray lesions", "lesions parallel to veins", "yellow margins", "premature leaf death"],
                causes: ["Cercospora zeae-maydis", "high humidity", "warm temperatures", "infected debris"],
                prevention: ["crop rotation", "tillage practices", "resistant hybrids", "field sanitation"],
                severity: "medium",
                treatments: [
                    {
                        name: "Azoxystrobin",
                        dosage: "250ml per hectare",
                        application: "Preventive spray at tasseling",
                        safety: "Avoid aquatic contamination"
                    }
                ]
            },
            {
                id: "maize_earworm",
                name: "Corn Earworm",
                symptoms: ["holes in ears", "damaged kernels", "frass in ears", "larvae feeding"],
                causes: ["Helicoverpa zea", "favorable weather", "continuous corn", "lack of natural enemies"],
                prevention: ["pheromone traps", "biological control", "crop rotation", "early harvest"],
                severity: "medium",
                treatments: [
                    {
                        name: "Bacillus thuringiensis",
                        dosage: "2g per liter",
                        application: "Target young larvae",
                        safety: "Safe for beneficial insects"
                    }
                ]
            },
            {
                id: "maize_bacterial_wilt",
                name: "Bacterial Wilt",
                symptoms: ["wilting plants", "yellow streaks in stalks", "bacterial ooze", "plant death"],
                causes: ["Pantoea stewartii", "flea beetle vectors", "wounded plants", "favorable conditions"],
                prevention: ["insect control", "resistant varieties", "field sanitation", "avoid wounding"],
                severity: "high",
                treatments: [
                    {
                        name: "Streptomycin",
                        dosage: "200ppm solution",
                        application: "Foliar spray and soil drench",
                        safety: "Antibiotic resistance concerns"
                    }
                ]
            },
            {
                id: "maize_anthracnose",
                name: "Anthracnose",
                symptoms: ["water-soaked lesions", "black fruiting bodies", "leaf blight", "stalk rot"],
                causes: ["Colletotrichum graminicola", "warm humid weather", "wounded tissue", "infected debris"],
                prevention: ["resistant varieties", "crop rotation", "balanced nutrition", "field sanitation"],
                severity: "medium",
                treatments: [
                    {
                        name: "Copper Hydroxide",
                        dosage: "3g per liter",
                        application: "Preventive spray program",
                        safety: "May cause leaf burn"
                    }
                ]
            }
        ]
    },
    
    tomato: {
        name: "Tomato",
        diseases: [
            {
                id: "tomato_blight",
                name: "Early Blight",
                symptoms: ["dark brown spots with concentric rings", "yellowing leaves", "defoliation", "fruit lesions"],
                causes: ["Alternaria solani fungus", "warm humid conditions", "stressed plants", "infected plant debris"],
                prevention: ["crop rotation", "resistant varieties", "proper spacing", "mulching"],
                severity: "high",
                treatments: [
                    {
                        name: "Chlorothalonil",
                        dosage: "2ml per liter",
                        application: "Spray every 7-14 days",
                        safety: "Wear protective clothing, avoid inhalation"
                    },
                    {
                        name: "Mancozeb",
                        dosage: "2.5g per liter",
                        application: "Preventive spray program",
                        safety: "Pre-harvest interval of 7 days"
                    }
                ]
            },
            {
                id: "tomato_late_blight",
                name: "Late Blight",
                symptoms: ["water-soaked dark lesions", "white fungal growth", "rapid plant death", "fruit rot"],
                causes: ["Phytophthora infestans", "cool moist conditions", "infected seed", "wind dispersal"],
                prevention: ["certified seed", "proper ventilation", "avoid overhead watering", "field sanitation"],
                severity: "high",
                treatments: [
                    {
                        name: "Metalaxyl + Mancozeb",
                        dosage: "2.5g per liter",
                        application: "Preventive spray before disease",
                        safety: "Follow resistance management"
                    }
                ]
            },
            {
                id: "tomato_wilt",
                name: "Fusarium Wilt",
                symptoms: ["yellowing lower leaves", "wilting during day", "brown vascular tissue", "plant death"],
                causes: ["Fusarium oxysporum", "soil-borne pathogen", "wounded roots", "warm temperatures"],
                prevention: ["resistant varieties", "soil solarization", "crop rotation", "avoid root damage"],
                severity: "high",
                treatments: [
                    {
                        name: "Carbendazim",
                        dosage: "1g per liter",
                        application: "Soil drench around roots",
                        safety: "Systemic fungicide, use carefully"
                    }
                ]
            },
            {
                id: "tomato_bacterial_spot",
                name: "Bacterial Spot",
                symptoms: ["small dark spots on leaves", "yellow halos around spots", "fruit lesions", "defoliation"],
                causes: ["Xanthomonas species", "warm humid weather", "overhead irrigation", "infected seed"],
                prevention: ["pathogen-free seed", "avoid overhead watering", "copper sprays", "field hygiene"],
                severity: "medium",
                treatments: [
                    {
                        name: "Copper Sulfate",
                        dosage: "3g per liter",
                        application: "Weekly spray program",
                        safety: "May cause phytotoxicity"
                    },
                    {
                        name: "Streptomycin",
                        dosage: "200ppm",
                        application: "Use sparingly to avoid resistance",
                        safety: "Restricted use pesticide"
                    }
                ]
            },
            {
                id: "tomato_mosaic",
                name: "Tomato Mosaic Virus",
                symptoms: ["mosaic pattern on leaves", "stunted growth", "malformed fruit", "reduced yield"],
                causes: ["TMV virus", "mechanical transmission", "contaminated tools", "infected plants"],
                prevention: ["virus-free seed", "tool sanitation", "remove infected plants", "resistant varieties"],
                severity: "high",
                treatments: [
                    {
                        name: "No chemical control",
                        dosage: "Prevention only",
                        application: "Remove infected plants immediately",
                        safety: "Focus on prevention and sanitation"
                    }
                ]
            },
            {
                id: "tomato_leaf_mold",
                name: "Leaf Mold",
                symptoms: ["yellow spots on upper leaf surface", "olive-green mold underneath", "leaf curling", "defoliation"],
                causes: ["Passalora fulva", "high humidity", "poor ventilation", "greenhouse conditions"],
                prevention: ["proper ventilation", "reduce humidity", "resistant varieties", "proper spacing"],
                severity: "medium",
                treatments: [
                    {
                        name: "Sulfur",
                        dosage: "3g per liter",
                        application: "Dust or spray application",
                        safety: "Avoid high temperatures"
                    }
                ]
            },
            {
                id: "tomato_septoria",
                name: "Septoria Leaf Spot",
                symptoms: ["small circular spots with dark borders", "tiny black dots in centers", "yellowing leaves", "defoliation"],
                causes: ["Septoria lycopersici", "warm humid conditions", "splash dispersal", "infected debris"],
                prevention: ["mulching", "avoid overhead watering", "crop rotation", "field sanitation"],
                severity: "medium",
                treatments: [
                    {
                        name: "Chlorothalonil",
                        dosage: "2ml per liter",
                        application: "Regular spray program",
                        safety: "Broad spectrum fungicide"
                    }
                ]
            },
            {
                id: "tomato_whitefly",
                name: "Whitefly",
                symptoms: ["yellowing leaves", "honeydew secretion", "sooty mold", "virus transmission"],
                causes: ["Bemisia tabaci", "warm weather", "greenhouse conditions", "continuous cropping"],
                prevention: ["yellow sticky traps", "reflective mulches", "biological control", "resistant varieties"],
                severity: "high",
                treatments: [
                    {
                        name: "Imidacloprid",
                        dosage: "0.5ml per liter",
                        application: "Soil drench or foliar spray",
                        safety: "Toxic to bees, apply carefully"
                    }
                ]
            },
            {
                id: "tomato_hornworm",
                name: "Tomato Hornworm",
                symptoms: ["large holes in leaves", "missing leaves", "green caterpillars", "black droppings"],
                causes: ["Manduca quinquemaculata", "favorable weather", "continuous tomato growing", "lack of natural enemies"],
                prevention: ["hand picking", "biological control", "crop rotation", "beneficial insects"],
                severity: "medium",
                treatments: [
                    {
                        name: "Bacillus thuringiensis",
                        dosage: "2g per liter",
                        application: "Target young larvae",
                        safety: "Safe for beneficial insects"
                    }
                ]
            },
            {
                id: "tomato_aphid",
                name: "Aphid",
                symptoms: ["curled leaves", "honeydew on plants", "stunted growth", "virus transmission"],
                causes: ["Various aphid species", "over-fertilization", "favorable weather", "lack of predators"],
                prevention: ["balanced fertilization", "beneficial insects", "reflective mulches", "monitoring"],
                severity: "low",
                treatments: [
                    {
                        name: "Malathion",
                        dosage: "2ml per liter",
                        application: "Spray when threshold reached",
                        safety: "Moderate toxicity, use protection"
                    }
                ]
            },
            {
                id: "tomato_thrips",
                name: "Thrips",
                symptoms: ["silvering of leaves", "black specks", "distorted growth", "virus transmission"],
                causes: ["Western flower thrips", "warm dry weather", "weedy areas", "continuous cropping"],
                prevention: ["blue sticky traps", "biological control", "weed management", "resistant varieties"],
                severity: "medium",
                treatments: [
                    {
                        name: "Spinosad",
                        dosage: "1ml per liter",
                        application: "Early morning spray",
                        safety: "Selective insecticide"
                    }
                ]
            },
            {
                id: "tomato_nematode",
                name: "Root-knot Nematode",
                symptoms: ["stunted plants", "yellowing leaves", "root galls", "reduced yield"],
                causes: ["Meloidogyne species", "sandy soils", "warm temperatures", "continuous cropping"],
                prevention: ["resistant varieties", "crop rotation", "soil solarization", "organic amendments"],
                severity: "high",
                treatments: [
                    {
                        name: "Carbofuran",
                        dosage: "1kg per hectare",
                        application: "Soil incorporation before planting",
                        safety: "Extremely toxic, restricted use"
                    }
                ]
            },
            {
                id: "tomato_cutworm",
                name: "Cutworm",
                symptoms: ["seedlings cut at soil level", "missing plants", "larvae in soil", "plants falling over"],
                causes: ["Agrotis species", "high soil moisture", "weedy fields", "organic debris"],
                prevention: ["clean cultivation", "collar protection", "biological control", "soil preparation"],
                severity: "medium",
                treatments: [
                    {
                        name: "Chlorpyrifos",
                        dosage: "2ml per liter",
                        application: "Soil application around plants",
                        safety: "Highly toxic, use full protection"
                    }
                ]
            },
            {
                id: "tomato_fruit_worm",
                name: "Fruit Worm",
                symptoms: ["holes in fruits", "larvae inside fruits", "premature fruit drop", "damaged harvest"],
                causes: ["Helicoverpa armigera", "favorable weather", "continuous fruiting", "lack of control"],
                prevention: ["pheromone traps", "biological control", "timely harvest", "field sanitation"],
                severity: "high",
                treatments: [
                    {
                        name: "Cypermethrin",
                        dosage: "1ml per liter",
                        application: "Target flowering and fruiting stages",
                        safety: "Pyrethroid insecticide, toxic to fish"
                    }
                ]
            },
            {
                id: "tomato_leaf_miner",
                name: "Leaf Miner",
                symptoms: ["serpentine mines in leaves", "white trails", "reduced photosynthesis", "leaf drop"],
                causes: ["Liriomyza species", "warm weather", "greenhouse conditions", "continuous cropping"],
                prevention: ["yellow sticky traps", "biological control", "resistant varieties", "field hygiene"],
                severity: "low",
                treatments: [
                    {
                        name: "Abamectin",
                        dosage: "1ml per liter",
                        application: "Systemic spray application",
                        safety: "Highly toxic to aquatic organisms"
                    }
                ]
            }
        ]
    },
    
    beans: {
        name: "Beans",
        diseases: [
            {
                id: "bean_anthracnose",
                name: "Bean Anthracnose",
                symptoms: ["dark sunken lesions on pods", "brown spots on leaves", "stem cankers", "seed infection"],
                causes: ["Colletotrichum lindemuthianum", "cool wet weather", "infected seed", "splash dispersal"],
                prevention: ["certified seed", "crop rotation", "avoid overhead irrigation", "field sanitation"],
                severity: "high",
                treatments: [
                    {
                        name: "Copper Sulfate",
                        dosage: "3g per liter",
                        application: "Preventive spray program",
                        safety: "May cause phytotoxicity in cool weather"
                    },
                    {
                        name: "Mancozeb",
                        dosage: "2g per liter",
                        application: "Weekly sprays during wet periods",
                        safety: "Pre-harvest interval of 7 days"
                    }
                ]
            },
            {
                id: "bean_rust",
                name: "Bean Rust",
                symptoms: ["small reddish-brown pustules", "yellow spots on leaves", "premature defoliation", "reduced yield"],
                causes: ["Uromyces appendiculatus", "humid conditions", "moderate temperatures", "wind dispersal"],
                prevention: ["resistant varieties", "proper spacing", "field sanitation", "avoid late planting"],
                severity: "medium",
                treatments: [
                    {
                        name: "Propiconazole",
                        dosage: "1ml per liter",
                        application: "At first sign of rust",
                        safety: "Systemic fungicide, follow label"
                    }
                ]
            },
            {
                id: "bean_blight",
                name: "Common Bacterial Blight",
                symptoms: ["water-soaked spots on leaves", "brown lesions with yellow halos", "pod lesions", "systemic infection"],
                causes: ["Xanthomonas axonopodis", "warm humid weather", "overhead irrigation", "infected seed"],
                prevention: ["pathogen-free seed", "avoid overhead watering", "crop rotation", "copper sprays"],
                severity: "high",
                treatments: [
                    {
                        name: "Copper Hydroxide",
                        dosage: "2.5g per liter",
                        application: "Weekly preventive sprays",
                        safety: "Avoid copper buildup in soil"
                    }
                ]
            },
            {
                id: "bean_mosaic",
                name: "Bean Common Mosaic",
                symptoms: ["mosaic pattern on leaves", "stunted plants", "malformed pods", "reduced yield"],
                causes: ["Bean common mosaic virus", "aphid transmission", "infected seed", "mechanical transmission"],
                prevention: ["virus-free seed", "aphid control", "resistant varieties", "roguing infected plants"],
                severity: "high",
                treatments: [
                    {
                        name: "Imidacloprid",
                        dosage: "0.5ml per liter",
                        application: "Control aphid vectors",
                        safety: "Systemic insecticide, bee toxic"
                    }
                ]
            },
            {
                id: "bean_powdery_mildew",
                name: "Powdery Mildew",
                symptoms: ["white powdery coating on leaves", "yellowing leaves", "premature defoliation", "reduced photosynthesis"],
                causes: ["Erysiphe polygoni", "high humidity", "moderate temperatures", "poor air circulation"],
                prevention: ["proper spacing", "resistant varieties", "good ventilation", "avoid overhead watering"],
                severity: "medium",
                treatments: [
                    {
                        name: "Sulfur",
                        dosage: "3g per liter",
                        application: "Dust or spray application",
                        safety: "Avoid application in hot weather"
                    },
                    {
                        name: "Triademefon",
                        dosage: "0.5ml per liter",
                        application: "Systemic fungicide spray",
                        safety: "Follow resistance management"
                    }
                ]
            },
            {
                id: "bean_root_rot",
                name: "Root Rot",
                symptoms: ["yellowing plants", "stunted growth", "brown rotting roots", "plant death"],
                causes: ["Fusarium solani", "waterlogged soils", "poor drainage", "wounded roots"],
                prevention: ["improve drainage", "avoid overwatering", "crop rotation", "resistant varieties"],
                severity: "high",
                treatments: [
                    {
                        name: "Carbendazim",
                        dosage: "1g per liter",
                        application: "Soil drench treatment",
                        safety: "Systemic fungicide, handle carefully"
                    }
                ]
            },
            {
                id: "bean_aphid",
                name: "Bean Aphid",
                symptoms: ["curled leaves", "honeydew secretion", "stunted growth", "virus transmission"],
                causes: ["Aphis fabae", "favorable weather", "over-fertilization", "lack of natural enemies"],
                prevention: ["balanced fertilization", "beneficial insects", "reflective mulches", "early detection"],
                severity: "medium",
                treatments: [
                    {
                        name: "Dimethoate",
                        dosage: "1ml per liter",
                        application: "Systemic insecticide spray",
                        safety: "Highly toxic, use protection"
                    }
                ]
            },
            {
                id: "bean_thrips",
                name: "Bean Thrips",
                symptoms: ["silvering of leaves", "black specks on leaves", "distorted growth", "flower damage"],
                causes: ["Megalurothrips sjostedti", "dry weather", "dusty conditions", "continuous cropping"],
                prevention: ["maintain soil moisture", "biological control", "reflective mulches", "field hygiene"],
                severity: "low",
                treatments: [
                    {
                        name: "Spinosad",
                        dosage: "1ml per liter",
                        application: "Target flowering stage",
                        safety: "Selective insecticide, bee-friendly"
                    }
                ]
            },
            {
                id: "bean_pod_borer",
                name: "Pod Borer",
                symptoms: ["holes in pods", "larvae inside pods", "damaged seeds", "reduced quality"],
                causes: ["Maruca vitrata", "favorable weather", "continuous beans", "lack of control"],
                prevention: ["pheromone traps", "biological control", "early harvest", "field sanitation"],
                severity: "high",
                treatments: [
                    {
                        name: "Cypermethrin",
                        dosage: "1ml per liter",
                        application: "Target pod formation stage",
                        safety: "Pyrethroid insecticide, toxic to beneficial insects"
                    }
                ]
            },
            {
                id: "bean_leaf_beetle",
                name: "Bean Leaf Beetle",
                symptoms: ["round holes in leaves", "skeletonized leaves", "pod scarring", "defoliation"],
                causes: ["Cerotoma trifurcata", "warm weather", "continuous beans", "overwintering adults"],
                prevention: ["crop rotation", "early planting", "beneficial insects", "field monitoring"],
                severity: "medium",
                treatments: [
                    {
                        name: "Carbaryl",
                        dosage: "2g per liter",
                        application: "Foliar spray when threshold reached",
                        safety: "Broad spectrum insecticide"
                    }
                ]
            },
            {
                id: "bean_stem_maggot",
                name: "Bean Stem Maggot",
                symptoms: ["wilting plants", "hollow stems", "larvae in stems", "plant death"],
                causes: ["Ophiomyia species", "cool moist conditions", "organic matter", "continuous beans"],
                prevention: ["field sanitation", "crop rotation", "avoid over-irrigation", "resistant varieties"],
                severity: "medium",
                treatments: [
                    {
                        name: "Chlorpyrifos",
                        dosage: "2ml per liter",
                        application: "Soil application at planting",
                        safety: "Organophosphate, highly toxic"
                    }
                ]
            },
            {
                id: "bean_whitefly",
                name: "Bean Whitefly",
                symptoms: ["yellowing leaves", "honeydew secretion", "sooty mold", "virus transmission"],
                causes: ["Bemisia tabaci", "warm weather", "dry conditions", "continuous cropping"],
                prevention: ["yellow sticky traps", "reflective mulches", "biological control", "resistant varieties"],
                severity: "medium",
                treatments: [
                    {
                        name: "Imidacloprid",
                        dosage: "0.5ml per liter",
                        application: "Soil drench or foliar spray",
                        safety: "Neonicotinoid, toxic to pollinators"
                    }
                ]
            },
            {
                id: "bean_cutworm",
                name: "Cutworm",
                symptoms: ["seedlings cut at soil level", "missing plants", "larvae in soil", "stand reduction"],
                causes: ["Agrotis species", "high soil moisture", "weedy conditions", "organic debris"],
                prevention: ["clean cultivation", "collar barriers", "biological control", "soil preparation"],
                severity: "medium",
                treatments: [
                    {
                        name: "Carbofuran",
                        dosage: "1kg per hectare",
                        application: "Granular soil application",
                        safety: "Extremely toxic, restricted use"
                    }
                ]
            },
            {
                id: "bean_spider_mite",
                name: "Two-spotted Spider Mite",
                symptoms: ["stippling on leaves", "fine webbing", "yellowing leaves", "leaf drop"],
                causes: ["Tetranychus urticae", "hot dry weather", "dusty conditions", "stressed plants"],
                prevention: ["maintain soil moisture", "biological control", "avoid dust", "resistant varieties"],
                severity: "low",
                treatments: [
                    {
                        name: "Abamectin",
                        dosage: "1ml per liter",
                        application: "Miticide spray application",
                        safety: "Highly toxic to aquatic life"
                    }
                ]
            },
            {
                id: "bean_nematode",
                name: "Root-knot Nematode",
                symptoms: ["stunted plants", "yellowing leaves", "root galls", "reduced nodulation"],
                causes: ["Meloidogyne species", "sandy soils", "warm temperatures", "continuous legumes"],
                prevention: ["crop rotation", "resistant varieties", "soil solarization", "organic amendments"],
                severity: "high",
                treatments: [
                    {
                        name: "Carbofuran",
                        dosage: "1kg per hectare",
                        application: "Soil incorporation before planting",
                        safety: "Extremely toxic, handle with care"
                    }
                ]
            }
        ]
    }
};
                                                   

// Function to search diseases based on symptoms and crop
function searchDiseases(symptoms, cropType = null) {
    const results = [];
    const searchTerms = symptoms.toLowerCase().split(/[\s,]+/);
    
    // Determine which crops to search
    const cropsToSearch = cropType ? [cropType] : Object.keys(cropDiseaseDatabase);
    
    cropsToSearch.forEach(crop => {
        if (!cropDiseaseDatabase[crop]) return;
        
        cropDiseaseDatabase[crop].diseases.forEach(disease => {
            let matchScore = 0;
            let matchedSymptoms = [];
            
            // Check symptom matches
            disease.symptoms.forEach(symptom => {
                const symptomWords = symptom.toLowerCase().split(/[\s,]+/);
                const matches = searchTerms.filter(term => 
                    symptomWords.some(word => word.includes(term) || term.includes(word))
                );
                
                if (matches.length > 0) {
                    matchScore += matches.length * 2; // Weight symptom matches highly
                    matchedSymptoms = [...matchedSymptoms, ...matches];
                }
            });
            
            // Check cause matches (lower weight)
            disease.causes.forEach(cause => {
                const causeWords = cause.toLowerCase().split(/[\s,]+/);
                const matches = searchTerms.filter(term =>
                    causeWords.some(word => word.includes(term) || term.includes(word))
                );
                matchScore += matches.length;
            });
            
            // If there's a match, add to results
            if (matchScore > 0) {
                results.push({
                    ...disease,
                    crop: crop,
                    cropName: cropDiseaseDatabase[crop].name,
                    matchScore,
                    confidence: Math.min(matchScore * 15, 95), // Cap at 95%
                    matchedSymptoms: [...new Set(matchedSymptoms)]
                });
            }
        });
    });
    
    // Sort by match score (confidence) descending
    return results.sort((a, b) => b.matchScore - a.matchScore).slice(0, 5);
}

// Function to get disease by ID
function getDiseaseById(diseaseId) {
    for (const crop in cropDiseaseDatabase) {
        const disease = cropDiseaseDatabase[crop].diseases.find(d => d.id === diseaseId);
        if (disease) {
            return {
                ...disease,
                crop: crop,
                cropName: cropDiseaseDatabase[crop].name
            };
        }
    }
    return null;
}

// Function to get all diseases for a specific crop
function getDiseasesForCrop(cropType) {
    if (!cropDiseaseDatabase[cropType]) return [];
    
    return cropDiseaseDatabase[cropType].diseases.map(disease => ({
        ...disease,
        crop: cropType,
        cropName: cropDiseaseDatabase[cropType].name
    }));
}

// Function to get disease statistics
function getDiseaseStats() {
    const stats = {
        totalDiseases: 0,
        diseasesByCrop: {},
        severityDistribution: { low: 0, medium: 0, high: 0 }
    };
    
    Object.keys(cropDiseaseDatabase).forEach(crop => {
        const diseases = cropDiseaseDatabase[crop].diseases;
        stats.diseasesByCrop[crop] = diseases.length;
        stats.totalDiseases += diseases.length;
        
        // Count severity distribution
        diseases.forEach(disease => {
            stats.severityDistribution[disease.severity]++;
        });
    });
    
    return stats;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cropDiseaseDatabase,
        searchDiseases,
        getDiseaseById,
        getDiseasesForCrop,
        getDiseaseStats
    };
}
