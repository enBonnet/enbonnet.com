const BASE_URL = "https://enbonnet-cms.herokuapp.com";
const ALL_POSTS = `${BASE_URL}/articles`;

const fetchAPI = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;
};

export const getAllPosts = async () => {
  const data = await fetchAPI(`${ALL_POSTS}?_sort=created_at:desc`);

  return data;
};
