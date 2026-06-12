import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import BeatCard from "./BeatCard.astro";

describe("BeatCard", () => {
  it("renders with required props", async () => {
    const root = await renderComponent(BeatCard, {
      title: "Projects",
      text: "8 projects shipped",
      ariaLabel: "beatProjects",
      i18nTitle: "beatTitleProjects",
      i18nText: "beatTextProjects",
    });
    const section = root.querySelector("section.beat-card");
    expect(section).not.toBeNull();
    expect(section!.getAttribute("aria-label")).toBe("Projects");
    expect(section!.getAttribute("data-i18n-attr")).toBe("aria-label:beatProjects");
    expect(section!.querySelector("span")!.getAttribute("data-i18n")).toBe("beatTitleProjects");
    expect(section!.querySelector("p")!.getAttribute("data-i18n")).toBe("beatTextProjects");
    expect(section!.text).toContain("8 projects shipped");
  });
});
