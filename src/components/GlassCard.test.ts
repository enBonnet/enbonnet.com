import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import GlassCard from "./GlassCard.astro";

describe("GlassCard", () => {
  it("renders with default props", async () => {
    const root = await renderComponent(GlassCard, { children: "Content" });
    const section = root.querySelector("section");
    expect(section).not.toBeNull();
    expect(section!.classList.contains("glass-card")).toBe(true);
    expect(section!.getAttribute("style")).toContain("padding");
  });

  it("renders with custom tag", async () => {
    const root = await renderComponent(GlassCard, { as: "div", children: "Content" });
    expect(root.querySelector("div.glass-card")).not.toBeNull();
  });

  it("applies variant classes", async () => {
    const variants = ["default", "error", "masthead", "lead", "theme", "danger"] as const;
    for (const variant of variants) {
      const doc = await renderComponent(GlassCard, { variant, children: "Content" });
      const el = doc.querySelector(".glass-card");
      if (variant === "default") {
        expect(el!.classList.contains("glass-card--default")).toBe(false);
      } else {
        expect(el!.classList.contains(`glass-card--${variant}`)).toBe(true);
      }
    }
  });

  it("applies custom padding", async () => {
    const root = await renderComponent(GlassCard, { padding: "2rem", children: "Content" });
    const el = root.querySelector(".glass-card");
    expect(el!.getAttribute("style")).toBe("padding: 2rem;");
  });

  it("applies custom class", async () => {
    const root = await renderComponent(GlassCard, { class: "my-class", children: "Content" });
    const el = root.querySelector(".glass-card");
    expect(el!.classList.contains("my-class")).toBe(true);
  });
});
