import { assertGuardEquals, validateEquals } from "typia";

describe("dummy test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("sync typia validate", async () => {
    interface Schema {
      name: string;
    }
    const data = { name: "foo" };
    const validation = validateEquals<Schema>(data);
    expect(validation.success).toBe(true);
  });

  it("sync typia validate", async () => {
    interface Schema {
      name: string;
    }
    const data = { name: "foo" };
    assertGuardEquals<Schema>(data);
  });
});
