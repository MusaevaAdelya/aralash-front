import CodeSnippet from "../components/specific/CodeSnippet";
import HeroSection from "../components/specific/HeroSection";
import HowItWorksSection from "../components/specific/HowItWorksSection";
import SetOfProducts from "../components/specific/SetOfProducts";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <SetOfProducts />
      <CodeSnippet/>
      <HowItWorksSection/>
    </main>
  );
}

export default HomePage;
