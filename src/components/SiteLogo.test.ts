import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import SiteLogo from "./SiteLogo.astro";

describe("SiteLogo", () => {
  it("renders the logo container with accessible label", async () => {
    const root = await renderComponent(SiteLogo);
    const div = root.querySelector(".site-logo");

    expect(div).not.toBeNull();
    expect(div?.getAttribute("role")).toBe("img");
    expect(div?.getAttribute("aria-label")).toBe("Ender Bonnet logo");
    expect(div?.getAttribute("data-i18n-attr")).toBe("aria-label:logoAriaLabel");
  });

  it("renders the logo image with custom dimensions", async () => {
    const root = await renderComponent(SiteLogo, {
      src: "/custom.svg",
      width: 200,
      height: 200,
    });
    const img = root.querySelector(".site-logo img");

    expect(img).not.toBeNull();
    expect(img?.getAttribute("src")).toBe("/custom.svg");
    expect(img?.getAttribute("width")).toBe("200");
    expect(img?.getAttribute("height")).toBe("200");
    expect(img?.getAttribute("aria-hidden")).toBe("true");
  });
});
