import { FooterComponent } from "../components/FooterComponent"
import { NavBar } from "../components/NavBar"
import { ProductosComponent } from "../components/ProductosComponent"

import './ProductosPage.css'

export const ProductosPage = () => {
  
  return (
    <>
      <NavBar />
      <ProductosComponent />
      <FooterComponent />
    </>
  )
}
