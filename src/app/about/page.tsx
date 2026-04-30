import { AboutHero } from '@/components/sections/about-hero'
import { MissionVision } from '@/components/sections/mission-vision'
import { CoreValues } from '@/components/sections/core-values'
import { Offices } from '@/components/sections/offices'
import { AboutCTA } from '@/components/sections/about-cta'

export const metadata = {
  title: 'About Pinkelle Adventures',
  description:
    'Learn about Pinkelle Adventures — a trusted travel company offering Dubai tours, visas, and global travel experiences.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <Offices />
      <AboutCTA />
    </>
  )
}