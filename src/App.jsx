import { Navigate, Route, Routes } from "react-router-dom"
import { HomeComponent } from "./components/HomeComponent"
import { NavBar } from "./components/NavBar"
import { CarritoProvider } from "./context/CarritoProvider"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoPage } from "./pages/CarritoPage"
import { Contact } from "./routes/Contact"
import { Home } from "./routes/Home"
import { Products } from "./routes/Products"
import { Services } from "./routes/Services"

export const App = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
      <HomeComponent />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
        <Route path="/*" element={<Navigate to={'/'} />}></Route>
      </Routes>
      </CarritoProvider>
    </ProductosProvider>
  )
}
