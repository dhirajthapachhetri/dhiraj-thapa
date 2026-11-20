import { describe, expect, it } from "vitest";
import { buildMailto, contactSchema } from "@/lib/contact";

const valid = {
  name: "Asha Rai",
  email: "asha@example.com",
  subject: "Collaboration",
  message: "Hello Dhiraj, let's talk about a project.",
};

describe("contact form", () => {
  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid email address", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a message shorter than 10 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "Hi" }).success).toBe(false);
  });

  it("addresses the email to Dhiraj with subject and body filled in", () => {
    const url = buildMailto("dhirajthapa.mail@gmail.com", valid);
    expect(url.startsWith("mailto:dhirajthapa.mail@gmail.com?subject=Collaboration&body=")).toBe(true);
    expect(decodeURIComponent(url)).toContain("asha@example.com");
  });
});
