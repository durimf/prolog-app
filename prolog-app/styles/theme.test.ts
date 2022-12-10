import { theme, color } from "./theme";

test("color utility function", () => {
  const gray100 = color("gray", 100)({ theme });
  expect(gray100).toBe(`#f2f4f7`);
});

export {};
