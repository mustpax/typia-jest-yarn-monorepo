import { assertGuardEquals, validateEquals } from "typia";

describe("dummy test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("sync typia validate", () => {
    interface Schema {
      name: string;
    }
    const data = { name: "foo" };
    const validation = validateEquals<Schema>(data);
    expect(validation.success).toBe(true);
  });

  it("async typia validate", async () => {
    interface Schema {
      name: string;
    }
    const data = { name: "foo" };
    assertGuardEquals<Schema>(data);
  });

  it("sync typia validate", async () => {
    interface Schema {
      name: string;
      other: number;
    }
    const data = { name: "foo" };
    expect(() => assertGuardEquals<Schema>(data)).toThrow();
  });
});
