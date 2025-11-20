import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CategoryNav />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
