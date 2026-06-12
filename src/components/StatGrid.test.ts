import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import StatGrid from "./StatGrid.astro";

describe("StatGrid", () => {
  it("renders items with values and labels", async () => {
    const items = [
      { value: "10", label: "Themes", i18nKey: "statThemes" },
      { value: "5.2k+", label: "Installs", i18nKey: "statInstalls" },
    ];
    const root = await renderComponent(StatGrid, { items });
    const grid = root.querySelector(".stat-grid");
    expect(grid).not.toBeNull();
    const divs = grid!.querySelectorAll("div");
    expect(divs.length).toBe(2);
    expect(divs[0].querySelector("strong")!.text).toBe("10");
    expect(divs[0].querySelector("span")!.text).toBe("Themes");
    expect(divs[0].querySelector("span")!.getAttribute("data-i18n")).toBe("statThemes");
    expect(divs[1].querySelector("strong")!.text).toBe("5.2k+");
    expect(divs[1].querySelector("span")!.text).toBe("Installs");
  });
});
