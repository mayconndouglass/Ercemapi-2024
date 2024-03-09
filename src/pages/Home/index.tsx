import { BaseEvents } from "./components/BaseEvents"
import { Signin } from "./components/Signin"
import { Supporters } from "./components/Supporters"
import { SatelliteEvents } from "./components/SatelliteEvents"
import { VideoSection } from "./components/VIdeoSection"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { useEffect } from "react"

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Signin />
      <BaseEvents />
      <SatelliteEvents />
      <VideoSection />
      <Supporters />
    </>
  )
}