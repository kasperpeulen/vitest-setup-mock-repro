import { vi } from "vitest";

vi.mock("./weather.ts", () => ({ getWeather: () => "sunny" }));
