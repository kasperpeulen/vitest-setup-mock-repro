import { expect, test } from "vitest";
import { getWeather } from "./weather.ts";

test("gets the mock from the setup file", () => {
  expect(getWeather()).toBe("sunny");
});
