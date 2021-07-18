const environment = process.env.NODE_ENV;
export const isDevelopment = environment === "development";
export const isProduction = environment === "production";
export const algoliaId = process.env.ALGOLIA_ID || "";
export const algoliaKey = process.env.ALGOLIA_KEY || "";
export const algoliaPublicId = process.env.NEXT_PUBLIC_ALGOLIA_ID || "";
export const algoliaPublicKey = process.env.NEXT_PUBLIC_ALGOLIA_KEY || "";
export const indexName = isProduction ? "blog_enbonnet" : "dev_blog_enbonnet";
