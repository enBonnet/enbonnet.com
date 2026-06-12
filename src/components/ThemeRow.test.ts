import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import ThemeRow from "./ThemeRow.astro";

describe("ThemeRow", () => {
  it("renders default non-featured theme row", async () => {
    const root = await renderComponent(ThemeRow, {
      name: "Supabase Theme",
      installs: "1,000",
      marketplace: "500",
      openVsx: "500",
      href: "https://example.com",
      color: "#3ECF8E",
    });
    const a = root.querySelector("a.theme-row");
    expect(a).not.toBeNull();
    expect(a!.getAttribute("href")).toBe("https://example.com");
    expect(a!.getAttribute("target")).toBe("_blank");
    expect(a!.getAttribute("rel")).toBe("noreferrer");
    expect(a!.classList.contains("theme-row-featured")).toBe(false);
    expect(root.querySelector(".theme-name")!.text).toBe("Supabase Theme");
    expect(root.querySelector(".theme-count")!.text).toBe("1,000");
    expect(root.querySelector(".theme-detail")!.text).toBe("Marketplace 500 / Open VSX 500");
    const dot = root.querySelector(".theme-dot");
    expect(dot).not.toBeNull();
    expect(dot!.getAttribute("aria-hidden")).toBe("true");
  });

  it("applies featured class when featured is true", async () => {
    const root = await renderComponent(ThemeRow, {
      name: "Featured Theme",
      installs: "2,000",
      marketplace: "1,000",
      openVsx: "1,000",
      href: "https://example.com",
      color: "#ff9900",
      featured: true,
    });
    const a = root.querySelector("a");
    expect(a!.classList.contains("theme-row-featured")).toBe(true);
  });
});
