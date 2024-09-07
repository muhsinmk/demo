import Hero from "@/components/Hero";
import GraduationCard from "@/components/GraduationCard";
import LayoutCard from "@/components/LayoutCard";
import CardGrid from "@/components/CardGrid";
import StatsContainer from "@/components/StatsContainer";
import CardContainer from "@/components/CardContainer";
import GradientComponent from "@/components/GradientComponent";
import LatestInsights from "@/components/LatestInsights";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <GraduationCard />
      <LayoutCard />
      <CardGrid />
      <StatsContainer />
      <CardContainer />
      <GradientComponent />
      <LatestInsights />
      <CallToAction />
      <Footer />
    </main>
  );
}
