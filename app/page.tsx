import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import FeaturedTech from "@/components/home/FeaturedTech";
import WorkflowSection from "@/components/home/WorkflowSection";
import LifecycleSection from "@/components/home/LifecycleSection";
import SelectedProjects from "@/components/home/SelectedProjects";
import CultureHighlight from "@/components/home/CultureHighlight";
import PartnersSection from "@/components/home/PartnersSection";
// import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "PitronTech — Enterprise Software Engineering Excellence",
  description:
    "PitronTech delivers ERP systems, scalable SaaS platforms, fintech-grade applications, and cloud-native solutions for forward-thinking organizations.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <FeaturedTech />
      <WorkflowSection />
      <LifecycleSection />
      <SelectedProjects />
      <PartnersSection />
      <CultureHighlight />
      {/* <Testimonials /> */}
      <CTASection />
    </>
  );
}
