import { AddToCartButton } from "@/components/add-to-cart-button"


export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = {
        "id": "burger-classic-001",
        "name": "Classic Beef Burger",
        "slug": "classic-beef-burger",
        "description": "Juicy Kenyan beef patty, melted cheese, lettuce, tomato, and house sauce.",
        "price": 650,
        "image": "https://picsum.photos/1000",
        "inventory": 18,
        "rating": 4.6,
        "tags": ["beef", "grilled", "popular"],
        "prepTimeMin": 12
    }

    return (
        <section className="section">
            <div className="layout-grid h-fit">
                <div className="col-span-full md:col-start-1 md:col-end-7 aspect-square bg-background-elevated-1 min-h-80">

                </div>
                <div className="col-span-full md:col-start-8  md:-col-end-1 flex flex-col gap-y-6">
                    <header className="mb-2">
                        <h1 className="mb-2">{product.name}</h1>
                        <p className="text-2xl max-w-prose">KSh {product.price}</p>
                    </header>
                    <p>{product.description}</p>
                    <AddToCartButton productId={product.id} />
                </div>
            </div>
        </section>
    )
}