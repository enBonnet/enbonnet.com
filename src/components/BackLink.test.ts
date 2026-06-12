import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import BackLink from "./BackLink.astro";

describe("BackLink", () => {
  it("renders an anchor with default href and text", async () => {
    const root = await renderComponent(BackLink);
    const a = root.querySelector("a");
    expect(a).not.toBeNull();
    expect(a!.getAttribute("href")).toBe("/");
    expect(a!.text).toContain("Back");
    expect(a!.classList.contains("back-link")).toBe(true);
  });

  it("applies custom href", async () => {
    const root = await renderComponent(BackLink, { href: "/projects" });
    const a = root.querySelector("a");
    expect(a!.getAttribute("href")).toBe("/projects");
  });

  it("applies custom class", async () => {
    const root = await renderComponent(BackLink, { class: "extra-class" });
    const a = root.querySelector("a");
    expect(a!.classList.contains("extra-class")).toBe(true);
    expect(a!.classList.contains("back-link")).toBe(true);
  });

  it("sets data-i18n attribute", async () => {
    const root = await renderComponent(BackLink, { "data-i18n": "customBack" });
    const a = root.querySelector("a");
    expect(a!.getAttribute("data-i18n")).toBe("customBack");
  });
});
