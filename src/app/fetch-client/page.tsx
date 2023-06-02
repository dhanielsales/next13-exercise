"use client";

import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: "dog" as any,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API_URL}/breeds/image/random`
      );
      const json = await res.json();
      return json as { message: string; status: string };
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Fetch Client</h1>
      <img src={data?.message} alt="Dog" />

      <Suspense fallback={"Load server component"}>
        {/* @ts-expect-error Async Server Component */}
        <ServerComponent url="https://dog.ceo/api/breeds/image/random" />
      </Suspense>
    </main>
  );
}

async function getUrl(url: string) {
  return await fetch(url, { cache: "no-store" }).then((res) => res.json());
}

export async function ServerComponent({ url }: { url: string }) {
  const data = await getUrl(url);

  return (
    <main className="border-1 border-sky-400">
      <h1>Server Component</h1>
      {JSON.stringify(data)}
    </main>
  );
}
