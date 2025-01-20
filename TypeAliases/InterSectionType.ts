type Employee3 = { id: number; name: string };
type Manager = { team: string[] };

type ManagerEmployee = Employee3 & Manager;

const manager: ManagerEmployee = {
    id: 1,
    name: "Sparsh",
    team: ["Rakshit", "Raghav"]
};

console.log(manager);
