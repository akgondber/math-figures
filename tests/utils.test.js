import { vi, expect, test } from "vitest";
import { writeCur, writeRel } from "../source/utils.js";

test("writeRel prints a symbol in relative position", async () => {
  const spyNow = vi.spyOn(process.stdout, "write").mockImplementation(() => {});
  const printable = "d";

  writeRel(0, 0, printable);
  expect(spyNow.mock.calls[0]).toEqual([expect.any(String)]);
  expect(spyNow.mock.calls[1]).toEqual(["d"]);
});

test("writeCur prints an input to stdout", () => {
  const spyNow = vi.spyOn(process.stdout, "write").mockImplementation(() => {});
  const printable = "d";

  writeCur(printable);
  expect(spyNow.mock.calls[0]).toEqual([printable]);
});
