import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import Masthead from "./Masthead.astro";

describe("Masthead", () => {
  it("renders edition and i18n fields", async () => {
    const root = await renderComponent(Masthead);
    const section = root.querySelector(".masthead");
    expect(section).not.toBeNull();
    expect(section!.getAttribute("aria-label")).toBe("Site masthead");
    expect(section!.text).toContain("enbonnet.com");
    expect(section!.querySelector("[data-i18n='mastCategory']")).not.toBeNull();
    expect(section!.querySelector("[data-i18n='mastLocation']")).not.toBeNull();
    expect(section!.querySelector(".lang-switcher")).not.toBeNull();
  });
});
