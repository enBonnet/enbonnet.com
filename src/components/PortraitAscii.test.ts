import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import PortraitAscii from "./PortraitAscii.astro";

describe("PortraitAscii", () => {
  it("renders the aside with portrait classes and aria-hidden", async () => {
    const root = await renderComponent(PortraitAscii);
    const aside = root.querySelector("aside");
    expect(aside).not.toBeNull();
    expect(aside!.classList.contains("paper-ascii")).toBe(true);
    expect(aside!.classList.contains("portrait-filler")).toBe(true);
    expect(aside!.getAttribute("aria-hidden")).toBe("true");
    const pre = aside!.querySelector("pre.portrait-ascii");
    expect(pre).not.toBeNull();
  });
});
