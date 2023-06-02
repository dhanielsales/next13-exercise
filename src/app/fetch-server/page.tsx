const url = `${process.env.NEXT_PUBLIC_SERVER_API_URL}/breeds/image/random`;
// const url = '';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const getData = async () => {
  await delay(2000);

  const res = await fetch(url, {
    // cache: "no-store",
  });

  return (await res.json()) as { message: string; status: string };
};

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <h1>Fetch Server</h1>
      <img src={data.message} alt="Dog" />
    </main>
  );
}
