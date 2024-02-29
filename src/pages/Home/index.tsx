import { About } from "./components/About"
import { EventSchedule } from "./components/EventSchdule"
import { BaseEvents } from "./components/BaseEvents"
import { Footer } from "./components/Footer"
// import { Presentation2 } from "./components/Presentation2"
import { Header } from "./components/Header"
// import { Presentation } from "./components/Presentation"
import { Signin } from "./components/Signin"
import { Supporters } from "./components/Supporters"
import { SatelliteEvents } from "./components/SatelliteEvents"
import { VideoSection } from "./components/VIdeoSection"
import { Main } from "./components/Main"
// import { Separator } from "./components/Separator"

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        {/* <Separator /> */}
        {/* <Presentation2 /> */}
        <EventSchedule />
        <About />
        <Signin />
        <BaseEvents />
        <SatelliteEvents />
        <VideoSection />
        <Supporters />
      </main>
      <Footer />
    </>
  )
}