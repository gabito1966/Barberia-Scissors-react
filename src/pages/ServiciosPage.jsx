import { FooterComponent } from "../components/FooterComponent"
import { NavBar } from "../components/NavBar"
import { ServicesContainer } from '../components/ServicesContainer'
import { ServiciosComponent } from "../components/ServiciosComponent"
import './ServiciosPage.css'

export const ServiciosPage = () => {
  return (
    <>
      <NavBar />
      <ServiciosComponent>
        <ServicesContainer />
      </ServiciosComponent>
      <FooterComponent />
    </>
  )
}
