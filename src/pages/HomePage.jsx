import CodeSnippet from "../components/specific/CodeSnippet";
import HeroSection from "../components/specific/HeroSection";
import HowItWorksSection from "../components/specific/HowItWorksSection";
import SetOfProducts from "../components/specific/SetOfProducts";
import VideoSection from "../components/specific/VideoSection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <SetOfProducts />
      <CodeSnippet/>
      <HowItWorksSection/>
      <VideoSection/>
    </main>
  );
}

export default HomePage;
