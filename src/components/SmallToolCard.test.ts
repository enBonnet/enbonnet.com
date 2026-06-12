import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import SmallToolCard from "./SmallToolCard.astro";

describe("SmallToolCard", () => {
  it("renders with required props", async () => {
    const root = await renderComponent(SmallToolCard, {
      name: "CLI Tool",
      description: "A useful CLI",
      href: "https://github.com/tool",
      index: 1,
    });
    const a = root.querySelector("a.small-card");
    expect(a).not.toBeNull();
    expect(a!.getAttribute("href")).toBe("https://github.com/tool");
    expect(a!.getAttribute("target")).toBe("_blank");
    expect(a!.getAttribute("rel")).toBe("noreferrer");
    expect(root.querySelector("h3")!.text).toBe("CLI Tool");
    const p = root.querySelector("p");
    expect(p!.text).toBe("A useful CLI");
    expect(p!.getAttribute("data-i18n")).toBe("smallDesc1");
  });
});
