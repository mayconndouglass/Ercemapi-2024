import { BaseEvents } from "./components/BaseEvents"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Signin } from "./components/Signin"
import { Supporters } from "./components/Supporters"
import { SatelliteEvents } from "./components/SatelliteEvents"
import { VideoSection } from "./components/VIdeoSection"
import { Hero } from "./components/Hero"
import { About } from "./components/About"

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <BaseEvents />
        <SatelliteEvents />
        <Signin />
        <VideoSection />
        <Supporters />
      </main>
      <Footer />
    </>
  )
}