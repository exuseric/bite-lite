import data from "@/data/categories.json";

export async function GET() {
  await new Promise((r) => setTimeout(r, 300));
  return Response.json(data.categories);
}
