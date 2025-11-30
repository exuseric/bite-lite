bite-lite-frontend\README.md
```

# Bite Lite Frontend

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
   The app will be available at `http://localhost:3000`.

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
- **State Management**: Zustand - A small, fast, and scalable state-management solution.
- **API Handling**: Native Fetch API for making HTTP requests.
- **Other Tools**: ESLint, Prettier, and TypeScript for code quality and type safety.

---

## State Management and API Handling

### State Management
The app uses Zustand for state management, providing a simple and scalable solution for managing global state. Zustand's lightweight API ensures minimal boilerplate and excellent performance.

### API Handling
API requests are managed using the native Fetch API. This approach leverages modern JavaScript capabilities to handle HTTP requests efficiently, with custom utility functions for consistent error handling and response parsing.
