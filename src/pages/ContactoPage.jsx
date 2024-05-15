import contactoBanner from '../assets/img/contact-bg.jpg';
import { FooterComponent } from '../components/FooterComponent';
import { NavBar } from '../components/NavBar';
import './ContactoPage.css';

export const ContactoPage = () => {
  return (
    <body>
      <NavBar></NavBar>
        <div className="container-fluid text-center">
          <img className="img-fluid" width={1200} height={300} src={contactoBanner} />
        </div>
        <div className="container-fluid mt-4 d-flex justify-content-center">
          <div className="contacto ">
            <h2 className="titulo-secundario">CONTACTO</h2>
            {/* Grupo: Usuario */}
            <form className="formulario" id="formulario">
              <div className="row">
                <div className="col-6 formulario__grupo" id="grupo__usuario">
                  <input type="text" className="form-control" placeholder="Nombre" />
                </div>
                <div className="col-6 formulario__grupo">
                  <input type="text" className="form-control" placeholder="Apellido" />
                </div>
                <div className="col-6 formulario__grupo">
                  <input type="password" className="form-control" placeholder='Contraseña' id="password" />
                </div>
              <div className="col-6 formulario__grupo">
                <input type="password" className="form-control" placeholder='Repetir Contraseña' id="password2" />
              </div>
                <div className="col-6 formulario__grupo">
                  <input type="email" className="form-control" placeholder="Email" id="email" />
                </div>
              <div className="col-6 formulario__grupo">
                <input type="text" className="form-control" placeholder="telefono" id="telefono" />
              </div>
              <div className="formulario__grupo" id="grupo__terminos">
                <label className="formulario__label">
                  <input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
                    Acepto los Terminos y Condiciones
                </label>
                <div className="boton">
                  <button className='btn btn-outline-secondary col-3 '>Enviar</button>
                </div>
              </div>
                <div className="form-contact">
                  <div className="row">
                    <div className="col-6">
                      <fieldset>
                        <legend >¿Como le gustaria que lo contactemos?</legend>
                        <div className='d-flex justify-content-between'>
                          <label htmlFor="radio-email"><input type="radio" name="contacto" value="email" id="radio-email" />Email</label>
                          <label htmlFor="radio-telefono"><input type="radio" name="contacto" value="telefono"
                            id="radio-telefono" />Teléfono</label>
                          <label htmlFor="radio-whatsapp"><input type="radio" name="contacto" value="whatsapp" id="radio-whatsapp" />WhatsApp</label>
                        </div>
                      </fieldset>
                    </div>
                    <div className="col-6">
                      <fieldset >
                        <legend>¿En cual horario prefiere ser atendido?</legend>
                        <select>
                          <option>Mañana</option>
                          <option>Tarde</option>
                          <option>Noche</option>
                        </select>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="horarios d-blok mx-auto">
              <div className="text-center mt-3">
                <h2>Nuestros horarios</h2>
              </div>
              <table className="table ">
                <thead>
                  <tr>
                    <th>Día</th>
                    <th>Horario</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lunes</td>
                    <td>08hs-20hs</td>
                  </tr>
                  <tr>
                    <td>Martes</td>
                    <td>08hs-20hs</td>
                  </tr>
                  <tr>
                    <td>Miercoles</td>
                    <td>08hs-20hs</td>
                  </tr>
                  <tr>
                    <td>Jueves</td>
                    <td>08hs-20hs</td>
                  </tr>
                  <tr>
                    <td>Viernes</td>
                    <td>08hs-20hs</td>
                  </tr>
                  <tr>
                    <td>Sabado</td>
                    <td>08hs-20hs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      <script src="../js/formulario.js"></script>
      <FooterComponent></FooterComponent>

    </body>
  )
}
