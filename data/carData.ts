export const TOTAL_FRAMES = 188;

export const getFramePath = (index: number): string => {
    const padded = String(index).padStart(3, "0");
    return `/frames/ezgif-frame-${padded}.jpg`;
};

export const carData = {
    name: "Aston Martin Valkyrie",
    tagline: "ENGINEERED BEYOND ROAD LIMITS",
    price: "$3,000,000+",
    year: "2025",

    design: {
        title: "AERODYNAMIC ARCHITECTURE",
        body: "Sculpted entirely around airflow, Valkyrie channels air beneath its chassis through dramatic Venturi tunnels, generating immense downforce while minimizing drag.\n\nCarbon fiber structures, exposed suspension geometry, and a teardrop cockpit blur the line between road car and Formula 1 machine.",
    },

    engine: {
        title: "HYBRID DOMINANCE",
        type: "6.5L NA V12 + Hybrid",
        builder: "Cosworth-built V12 + Rimac electric motor",
        power: "1,139 PS",
        powerHp: "1,123 hp",
        redline: "11,100 RPM",
        construction: "Carbon Fiber Monocoque",
    },

    specs: [
        {
            label: "ENGINE",
            value: "6.5L Naturally Aspirated V12 Hybrid",
            detail: "Cosworth-built + Rimac electric motor",
        },
        {
            label: "POWER OUTPUT",
            value: "1,139 PS (1,123 hp)",
            detail: "Combined hybrid output",
        },
        {
            label: "REDLINE",
            value: "11,100 RPM",
            detail: "Naturally aspirated V12 peak",
        },
        {
            label: "CONSTRUCTION",
            value: "Carbon Fiber Monocoque",
            detail: "Full carbon chassis & body",
        },
        {
            label: "DRY WEIGHT",
            value: "~1,030 kg",
            detail: "Target dry weight",
        },
        {
            label: "PRODUCTION",
            value: "150 Units",
            detail: "Road car production run",
        },
        {
            label: "ENERGY RECOVERY",
            value: "KERS Hybrid System",
            detail: "Kinetic energy recovery system",
        },
        {
            label: "COLLABORATION",
            value: "Red Bull Advanced Technologies",
            detail: "F1-grade engineering partnership",
        },
    ],

    features: [
        {
            title: "VENTURI TUNNEL AERODYNAMICS",
            description:
                "Active aerodynamic surfaces and dramatic Venturi tunnels generate extreme ground-effect downforce without reliance on traditional rear wings.",
            icon: "aero",
        },
        {
            title: "COSWORTH V12 ENGINE",
            description:
                "A bespoke 6.5-litre naturally aspirated V12 engineered by Cosworth, revving to 11,100 RPM — the highest-revving road car engine ever produced.",
            icon: "engine",
        },
        {
            title: "RIMAC HYBRID INTEGRATION",
            description:
                "Rimac-supplied battery-electric motor integrates seamlessly with the V12, providing instant torque fill and kinetic energy recovery.",
            icon: "hybrid",
        },
        {
            title: "F1-DERIVED CARBON MONOCOQUE",
            description:
                "A full carbon fiber monocoque chassis developed with Red Bull Advanced Technologies, targeting a dry weight of approximately 1,030 kg.",
            icon: "chassis",
        },
        {
            title: "TEARDROP COCKPIT CANOPY",
            description:
                "The enclosed cockpit with a fighter-jet-style canopy places the driver at the center of a minimalist, function-driven interior.",
            icon: "cockpit",
        },
        {
            title: "EXPOSED SUSPENSION GEOMETRY",
            description:
                "Inboard rocker-actuated suspension is fully visible through the bodywork, signaling pure motorsport intent and engineering transparency.",
            icon: "suspension",
        },
    ],
} as const;

export type CarData = typeof carData;
