import ServicesHero from "@/components/ServicesPage/ServicesHero"
import ServicesList from "@/components/ServicesPage/ServicesList"
import ServiceProcess from "@/components/ServicesPage/ServiceProcess"
import ServiceCTA from "@/components/ServicesPage/ServiceCTA"

export const metadata = {
  title: "Services",
  description:
    "Explore our comprehensive digital marketing services including SEO, social media marketing, web development, PPC advertising, and content marketing.",
  openGraph: {
    title: "Digital Marketing Services - San Innovation",
    description: "Comprehensive digital marketing services to grow your business online.",
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceCTA />
    </>
  )
}
