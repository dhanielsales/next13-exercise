export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>With Params {params.id}</h1>
    </main>
  );
}
