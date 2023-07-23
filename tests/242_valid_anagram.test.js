import { describe, expect } from "vitest";
import { isAnagram } from "../problems/242_valid_anagram";
import { it } from "vitest";

describe("contains duplicate function", () => {
  const testCases = [
    {
      s: "anagram",
      t: "nagaram",
      expected: true,
    },
    {
      s: "rat",
      t: "car",
      expected: false,
    },
  ];

  testCases.forEach(({ s, t, expected }) => {
    it(`should return ${expected} for s = "${s}" and t = "${t}"`, () => {
      const result = isAnagram(s, t);
      expect(result).toBe(expected);
    });
  });
});