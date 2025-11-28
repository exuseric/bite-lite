"use client";
import { Button } from "react-aria-components";

export default function Home() {
  return (
    <div className="menu min-h-screen layout-grid">
      <header className="col-span-full p-32">
        <Button className="btn-icon btn-primary">Dive</Button>
      </header>
    </div>
  );
}
