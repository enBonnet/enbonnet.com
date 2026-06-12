import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import OssCard from "./OssCard.astro";

describe("OssCard", () => {
  it("renders with required props", async () => {
    const root = await renderComponent(OssCard, {
      repo: "repo-name",
      title: "Some Title",
      type: "Code",
      year: "2024",
      href: "https://github.com/repo",
      index: 1,
    });
    const a = root.querySelector("a.oss-card");
    expect(a).not.toBeNull();
    expect(a!.getAttribute("href")).toBe("https://github.com/repo");
    expect(a!.getAttribute("target")).toBe("_blank");
    expect(a!.getAttribute("rel")).toBe("noreferrer");
    expect(a!.text).toContain("repo-name");
    expect(a!.text).toContain("2024");
    expect(a!.text).toContain("Some Title");
    const titleEl = a!.querySelector("h3");
    expect(titleEl!.getAttribute("data-i18n")).toBe("ossTitle1");
    expect(a!.text).toContain("Code");
    expect(a!.text).toContain("contribution");
  });

  it("uses ossTypeDocs for non-code types", async () => {
    const root = await renderComponent(OssCard, {
      repo: "repo-name",
      title: "Docs Title",
      type: "Docs",
      year: "2023",
      href: "https://github.com/repo",
      index: 2,
    });
    const typeSpan = root.querySelector("[data-i18n='ossTypeDocs']");
    expect(typeSpan).not.toBeNull();
  });
});
