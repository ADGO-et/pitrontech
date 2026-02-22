import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Careers | PitronTech" };

export default function AboutCareersPage() {
    redirect("/careers");
}
