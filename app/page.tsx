import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import FeaturedTech from "@/components/home/FeaturedTech";
import WorkflowSection from "@/components/home/WorkflowSection";
import LifecycleSection from "@/components/home/LifecycleSection";
import SelectedProjects from "@/components/home/SelectedProjects";
import CultureHighlight from "@/components/home/CultureHighlight";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "PitronTech — Enterprise Software Development Company",
  description:
    "PitronTech builds world-class enterprise software: web apps, mobile apps, SaaS platforms, ERP systems, and cloud infrastructure for ambitious companies.",
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
      <CultureHighlight />
      <Testimonials />
      <CTASection />
    </>
  );
}
