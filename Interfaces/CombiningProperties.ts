//Define an interface Car with the following properties:
// brand (readonly string)
// model (readonly string)
// color (optional string)
// features (optional array of strings)

// Write a function that takes a Car object and attempts to modify its properties. The function should handle missing optional properties gracefully and log appropriate messages.

interface Car2 {
    readonly brand: string;
    readonly model: string;
    color?: string;
    features?: string[];
}

function modifyCar(obj: Car2, color?: string, ...features: string[]) {
    if (color) {
        obj.color = color;
    }

    if (!obj.features) {
        obj.features = [];
    }

    features.forEach((f) => obj.features?.push(f));
}

const myCar2: Car2 = {
    brand: "Tesla",
    model: "Model S",
    color: "Red",
    features: ["Autopilot", "Electric"]
};

modifyCar(myCar2, "Blue", "Autopilot", "ADAS");
console.log(myCar2);