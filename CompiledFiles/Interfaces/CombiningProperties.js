"use strict";
//Define an interface Car with the following properties:
// brand (readonly string)
// model (readonly string)
// color (optional string)
// features (optional array of strings)
function modifyCar(obj, color, ...features) {
    if (color) {
        obj.color = color;
    }
    if (!obj.features) {
        obj.features = [];
    }
    features.forEach((f) => { var _a; return (_a = obj.features) === null || _a === void 0 ? void 0 : _a.push(f); });
}
const myCar2 = {
    brand: "Tesla",
    model: "Model S",
    color: "Red",
    features: ["Autopilot", "Electric"]
};
modifyCar(myCar2, "Blue", "Autopilot", "ADAS");
console.log(myCar2);
