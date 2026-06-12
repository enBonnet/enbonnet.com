import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import SocialLinks from "./SocialLinks.astro";

const socials = [
  { label: "GitHub", href: "https://github.com", icon: "<svg>gh</svg>" },
  { label: "Email", href: "mailto:test@example.com", icon: "<svg>mail</svg>" },
  { label: "Twitter", href: "https://twitter.com" },
];

describe("SocialLinks", () => {
  it("renders grid layout by default", async () => {
    const root = await renderComponent(SocialLinks, { socials });
    const div = root.querySelector("div.socials");
    expect(div).not.toBeNull();
    const links = div!.querySelectorAll("a");
    expect(links.length).toBe(3);
    expect(links[0].text).toBe("GitHub");
    expect(links[0].getAttribute("target")).toBe("_blank");
  });

  it("renders list layout", async () => {
    const root = await renderComponent(SocialLinks, { socials, layout: "list" });
    const ul = root.querySelector("ul.social-list");
    expect(ul).not.toBeNull();
    const lis = ul!.querySelectorAll("li");
    expect(lis.length).toBe(3);
  });

  it("renders icons in list layout", async () => {
    const root = await renderComponent(SocialLinks, { socials, layout: "list" });
    const icons = root.querySelectorAll(".social-icon");
    expect(icons.length).toBe(2);
  });

  it("uses email label in list layout", async () => {
    const root = await renderComponent(SocialLinks, { socials, layout: "list" });
    const labels = root.querySelectorAll(".social-label");
    expect(labels[1].text).toBe("ender@enbonnet.com");
  });

  it("omits target/rel for email in list layout", async () => {
    const root = await renderComponent(SocialLinks, { socials, layout: "list" });
    const emailLink = root.querySelectorAll(".social-link")[1];
    expect(emailLink.getAttribute("target")).toBeFalsy();
    expect(emailLink.getAttribute("rel")).toBeFalsy();
  });
});
