import PublicHome from "@/components/publicHome";
import { Nav } from "@/components/nav";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Nav />        {/* ✅ correct */}
      <PublicHome /> {/* ✅ correct */}
      <Footer />     {/* ✅ correct */}
    </div>
  );
}