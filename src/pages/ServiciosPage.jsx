import { FooterComponent } from "../components/FooterComponent"
import { NavBar } from "../components/NavBar"
import { ServiciosComponent } from "../components/ServiciosComponent"
import './ServiciosPage.css'

export const ServiciosPage = () => {
  return (
    <body>
      <NavBar />
      <ServiciosComponent />
      <FooterComponent />
    </body>
  )
}
