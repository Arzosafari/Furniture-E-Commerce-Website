import HeroSection from '../components/HeroSection.jsx'
import CategoryNavigation from '../components/CategoryNavigation.jsx'
import RoomGrid from '../components/RoomGrid.jsx'
import BestsellerGrid from '../components/BestsellerGrid.jsx'
import EditorialBanners from '../components/EditorialBanners.jsx'
import StyledByYouCarousel from '../components/StyledByYouCarousel.jsx'
import ServiceBenefits from '../components/ServiceBenefits.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container">
        <CategoryNavigation />
      </div>
      <RoomGrid />
      <BestsellerGrid />
      <EditorialBanners />
      <StyledByYouCarousel />
      <ServiceBenefits />
    </>
  )
}
