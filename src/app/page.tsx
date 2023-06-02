import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Home</h1>
      <Link className="text-orange-500" href="http://localhost:4000/dashboard">
        Old App
      </Link>
    </main>
  );
}
