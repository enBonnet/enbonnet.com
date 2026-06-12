import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import LangSwitcher from "./LangSwitcher.astro";

describe("LangSwitcher", () => {
  it("renders language buttons", async () => {
    const root = await renderComponent(LangSwitcher);
    const container = root.querySelector(".lang-switcher");
    expect(container).not.toBeNull();
    expect(container!.getAttribute("aria-label")).toBe("Language selector");
    const buttons = container!.querySelectorAll("button");
    expect(buttons.length).toBe(2);
    expect(buttons[0].text.trim()).toBe("EN");
    expect(buttons[0].getAttribute("data-lang")).toBe("en");
    expect(buttons[0].getAttribute("aria-pressed")).toBe("false");
    expect(buttons[1].text.trim()).toBe("ES");
    expect(buttons[1].getAttribute("data-lang")).toBe("es");
  });
});
