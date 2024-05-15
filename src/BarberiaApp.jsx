import { Navigate, Route, Routes } from "react-router-dom"
import './BarberiaApp.css'

import { ContactoPage } from "./pages/ContactoPage"
import { HomePage } from "./pages/HomePage"
import { ProductosPage } from "./pages/ProductosPage"
import { ServiciosPage } from "./pages/ServiciosPage"


export const BarberiaApp = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                    <Route path="/productos" element={<ProductosPage></ProductosPage>}></Route>
                    <Route path="/servicios" element={<ServiciosPage></ServiciosPage>}></Route>
                    <Route path="/contacto" element={<ContactoPage></ContactoPage>}></Route>
                    <Route path="/*" element={<Navigate to='/' />}></Route>
                </Routes>
            </div>
        </>
    )
}
