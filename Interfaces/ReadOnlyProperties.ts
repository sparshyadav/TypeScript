// Readonly Properties
interface Config {
    readonly apiKey: string;
    readonly version: number;
}

const config: Config = { apiKey: "23423", version: 1 };
// config.version=3; // Error