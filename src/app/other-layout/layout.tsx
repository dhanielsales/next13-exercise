import "@/shared/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Outro</div>
      {children}
    </>
  );
}
