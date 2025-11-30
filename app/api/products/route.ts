import products from "@/data/products.json";

export async function GET() {
  await new Promise((r) => setTimeout(r, 300));

  return Response.json(products.products);
}
