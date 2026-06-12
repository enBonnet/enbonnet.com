import { describe, expect, it } from "vitest";
import { renderComponent } from "../test-utils";
import ProjectCard from "./ProjectCard.astro";

const baseProject = {
  name: "My Project",
  eyebrow: "Open Source",
  description: "A great project.",
  links: [
    { label: "GitHub", href: "https://github.com" },
    { label: "Site", href: "https://example.com" },
  ],
  tags: ["React", "TypeScript"],
  metric: "1,000 installs",
  visual: "rtk",
  layout: "wide",
};

describe("ProjectCard", () => {
  it("renders project name, description, and metric", async () => {
    const root = await renderComponent(ProjectCard, { project: baseProject, index: 1 });
    const article = root.querySelector("article");
    expect(article).not.toBeNull();
    expect(article!.classList.contains("project-wide")).toBe(true);
    expect(article!.classList.contains("project-rtk")).toBe(true);
    expect(root.querySelector("h3")!.text).toBe("My Project");
    expect(root.querySelector("[data-i18n='p1Desc']")!.text).toBe("A great project.");
    expect(root.querySelector("[data-i18n='p1Metric']")!.text).toBe("1,000 installs");
  });

  it("renders tags list with correct aria-label", async () => {
    const root = await renderComponent(ProjectCard, { project: baseProject, index: 2 });
    const ul = root.querySelector("ul.tags");
    expect(ul).not.toBeNull();
    expect(ul!.getAttribute("aria-label")).toBe("My Project technologies");
    const lis = ul!.querySelectorAll("li");
    expect(lis.length).toBe(2);
    expect(lis[0].text).toBe("React");
    expect(lis[1].text).toBe("TypeScript");
  });

  it("renders links", async () => {
    const root = await renderComponent(ProjectCard, { project: baseProject, index: 3 });
    const links = root.querySelectorAll(".project-links a");
    expect(links.length).toBe(2);
    expect(links[0].getAttribute("href")).toBe("https://github.com");
    expect(links[1].getAttribute("href")).toBe("https://example.com");
  });

  it("renders translated Site label", async () => {
    const root = await renderComponent(ProjectCard, { project: baseProject, index: 4 });
    const siteLink = root.querySelector("a [data-i18n='linkSite']");
    expect(siteLink).not.toBeNull();
  });
});
