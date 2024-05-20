import { FooterComponent } from "../components/FooterComponent"
import { NavBar } from "../components/NavBar"
import { ProductosComponent } from "../components/ProductosComponent"
import { ProductosContainer } from "../components/ProductosContainer"
import './ProductosPage.css'

export const ProductosPage = () => {
  return (
    <>
      <NavBar />
      <ProductosComponent>
        <ProductosContainer />
      </ProductosComponent>
      <FooterComponent />
    </>
  )
}
