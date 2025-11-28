import CartItem from "@/components/cart-item"
import CartSummary from "@/components/cart-summary"
const items = [
    {
        id: "burger-classic-001",
        name: "Classic Beef Burger",
        slug: "classic-beef-burger",
        description: "Juicy Kenyan beef patty, melted cheese, lettuce, tomato, and house sauce.",
        price: 650,
        image: "https://picsum.photos/1000",
        quantity: 1,
        rating: 4.6,
        tags: ["beef", "grilled", "popular"],
        prepTimeMin: 12
    },
    {
        id: "burger-0013",
        name: "Classic Beef Burger",
        slug: "classic-beef-burger",
        description: "Juicy Kenyan beef patty, melted cheese, lettuce, tomato, and house sauce.",
        price: 650,
        image: "https://picsum.photos/1000",
        quantity: 1,
        rating: 4.6,
        tags: ["beef", "grilled", "popular"],
        prepTimeMin: 12
    },
    {
        id: "classic-001121",
        name: "Classic Beef Burger",
        slug: "classic-beef-burger",
        description: "Juicy Kenyan beef patty, melted cheese, lettuce, tomato, and house sauce.",
        price: 650,
        image: "https://picsum.photos/1000",
        quantity: 1,
        rating: 4.6,
        tags: ["beef", "grilled", "popular"],
        prepTimeMin: 12
    },
    {
        id: "beef-001121",
        name: "Classic Beef Burger",
        slug: "classic-beef-burger",
        description: "Juicy Kenyan beef patty, melted cheese, lettuce, tomato, and house sauce.",
        price: 650,
        image: "https://picsum.photos/1000",
        quantity: 1,
        rating: 4.6,
        tags: ["beef", "grilled", "popular"],
        prepTimeMin: 12
    }
]


export default function Cart() {

    return (
        <section className="relative section isolate min-h-screen h-full layout-grid">
            <header className="col-span-full">
                <h1>Cart</h1>
            </header>
            <div className="grid grid-cols-subgrid products-list my-12 md:min-h-96 col-span-full">
                <div className="col-span-full md:col-start-1 md:col-end-8">
                    <CartItem items={items} />
                </div>
                <div className="summary md:sticky md:top-8 col-span-full inset-x-0 bottom-0 pt-6 px-4 pb-safe-bottom md:col-start-8 md:-col-end-1 md:max-h-96 rounded-2xl">
                    <CartSummary />
                </div>
            </div>

        </section>
    )
}