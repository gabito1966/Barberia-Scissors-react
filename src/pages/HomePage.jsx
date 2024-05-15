import { FooterComponent } from "../components/FooterComponent"
import { MainComponent } from "../components/MainComponent"
import { NavBar } from "../components/NavBar"

export const HomePage = () => {

  return (
    <>
      <NavBar></NavBar>
      <MainComponent></MainComponent>
      <FooterComponent></FooterComponent>
    </>
  )
}
