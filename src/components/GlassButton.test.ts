import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import GlassButton from "./GlassButton.astro";

describe("GlassButton", () => {
  it("renders as button by default", async () => {
    const root = await renderComponent(GlassButton, { children: "Click me" });
    const btn = root.querySelector("button");
    expect(btn).not.toBeNull();
    expect(btn!.classList.contains("glass-button")).toBe(true);
    expect(btn!.classList.contains("glass-button--default")).toBe(true);
  });

  it("renders as anchor when href is provided", async () => {
    const root = await renderComponent(GlassButton, {
      href: "https://example.com",
      children: "Link",
    });
    const a = root.querySelector("a");
    expect(a).not.toBeNull();
    expect(a!.getAttribute("href")).toBe("https://example.com");
    expect(a!.classList.contains("glass-button")).toBe(true);
  });

  it("applies variant classes", async () => {
    for (const variant of ["default", "primary", "danger"] as const) {
      const root = await renderComponent(GlassButton, { variant, children: "Test" });
      const btn = root.querySelector("button");
      expect(btn!.classList.contains(`glass-button--${variant}`)).toBe(true);
    }
  });

  it("applies pill class when pill is true", async () => {
    const root = await renderComponent(GlassButton, { pill: true, children: "Pill" });
    const btn = root.querySelector("button");
    expect(btn!.classList.contains("glass-button--pill")).toBe(true);
  });

  it("applies custom class", async () => {
    const root = await renderComponent(GlassButton, { class: "extra", children: "Test" });
    const btn = root.querySelector("button");
    expect(btn!.classList.contains("extra")).toBe(true);
  });

  it("forwards target and rel", async () => {
    const root = await renderComponent(GlassButton, {
      href: "https://example.com",
      target: "_blank",
      rel: "noopener",
      children: "Test",
    });
    const a = root.querySelector("a");
    expect(a!.getAttribute("target")).toBe("_blank");
    expect(a!.getAttribute("rel")).toBe("noopener");
  });
});
