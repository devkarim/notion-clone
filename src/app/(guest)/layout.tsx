import Navbar from './components/navbar';
import Footer from './components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-28">
        {children}
        <Footer />
      </main>
    </div>
  );
}
