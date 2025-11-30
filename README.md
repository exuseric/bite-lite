# Bite Lite – Frontend

## Instructions to Run the App

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd bite-lite-frontend
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   Start the app in development mode:
   ```bash
   npm run dev
   ```
   _The app will be available at `http://localhost:3000`._


4. **Build for Production**:
   To create an optimized production build:
   ```bash
   npm run build
   ```

5. **Run the Production Build**:
   After building, you can start the production server:
   ```bash
   npm start
   ```

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - A React-based framework for server-side rendering and static site generation.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- **State Management**: [Zustand](https://zustand.docs.pmnd.rs/) - A small, fast, and scalable state-management solution.
- **API Handling**: Native Fetch API for making HTTP requests.
- **Other Tools**: ESLint, Prettier, and TypeScript for code quality and type safety.

---

## State Management and API Handling

### State Management
The app uses Zustand for state management:

- Product store: holds products, categories, search term/results, and active category filters.
- Cart store: holds cart items with quantity, plus actions to add, update, remove, and clear.
- Persistence: the cart store uses Zustand's `persist` middleware with `localStorage` so the cart survives page refreshes.

### API Handling
The app uses a mocked backend via Next.js Route Handlers with local JSON files under `data/`.

Endpoints:
- `GET /api/products` – returns the list of products from `data/products.json`.
- `GET /api/categories` – returns the list of categories from `data/categories.json`.
- On the client, data is fetched with the native Fetch API. The list page currently hydrates from the bundled JSON for a fast initial load and uses the stores for filtering and search.
---