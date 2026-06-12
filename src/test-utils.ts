import { experimental_AstroContainer as AstroContainer } from "astro/container";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import { parse } from "node-html-parser";

export async function renderComponent(
  Component: AstroComponentFactory,
  props: Record<string, unknown> = {},
) {
  const container = await AstroContainer.create();
  const html = await container.renderToString(Component, { props });
  return parse(html);
}
