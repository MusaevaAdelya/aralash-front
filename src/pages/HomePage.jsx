import CodeSnippet from "../components/specific/CodeSnippet";
import HeroSection from "../components/specific/HeroSection";
import SetOfProducts from "../components/specific/SetOfProducts";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <SetOfProducts />
      <CodeSnippet/>
    </main>
  );
}

export default HomePage;
