import data from "@/data/products.json";

export async function GET({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = data.products.find((product) => product.id === id);
  await new Promise((r) => setTimeout(r, 1000));
  return Response.json(product);
}
