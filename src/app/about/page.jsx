import AboutHero from "@/components/AboutPage/AboutHero"
import OurVision from "@/components/AboutPage/OurVision"
import OurTeam from "@/components/AboutPage/OurTeam"
import OurJourney from "@/components/AboutPage/OurJourney"

export const metadata = {
  title: "About Us",
  description:
    "Learn about San Innovation - our vision, mission, and the passionate team behind our digital marketing success in Ranchi.",
  openGraph: {
    title: "About San Innovation - Digital Marketing Experts",
    description: "Learn about our vision, mission, and the passionate team behind our success.",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurVision />
      <OurTeam />
      <OurJourney />
    </>
  )
}
