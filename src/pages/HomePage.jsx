import CodeSnippet from "../components/specific/CodeSnippet";
import HeroSection from "../components/specific/HeroSection";
import HowItWorksSection from "../components/specific/HowItWorksSection";
import SetOfProducts from "../components/specific/SetOfProducts";
import VideoSection from "../components/specific/VideoSection";
import ReviewSection from "../components/specific/ReviewSection";

function HomePage() {
  return (
    <main>
      <div className="mx-auto container max-w-[1335px] lg:px-0 px-5">
        <HeroSection />
        <SetOfProducts />
        <CodeSnippet />
        <HowItWorksSection />
        <VideoSection />
      </div>
      <ReviewSection />
    </main>
  );
}

export default HomePage;
