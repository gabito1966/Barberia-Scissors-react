import contactoBanner from '../assets/img/contact-bg.jpg';
import { FooterComponent } from '../components/FooterComponent';
import { NavBar } from '../components/NavBar';
import './ContactoPage.css';

export const ContactoPage = () => {
  return (
    <body>
      <NavBar></NavBar>
      <main className="contacto ">
        <div className="container-fluid text-center">
          <img className="img-fluid" width={1200} height={300} src={contactoBanner} />
        </div>
        <h2 className="titulo-secundario mt-5">CONTACTO</h2>
        <form className="formulario" id="formulario">

          {/* Grupo: Nombre */}
          <div className="formulario__grupo" id="grupo__nombre">
            <label htmlFor="nombre" className="formulario__label">Nombre</label>
            <div className="formulario__grupo-input">
              <input type="text" className="formulario__input" name="nombre" id="nombre" placeholder="Juan Perez" />
              <i className="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros,
              letras y guion bajo.</p>
          </div>

          {/* Grupo: Contraseña */}
          <div className="formulario__grupo" id="grupo__password">
            <label htmlFor="password" className="formulario__label">Contraseña</label>
            <div className="formulario__grupo-input">
              <input type="password" className="formulario__input" name="password" id="password" />
              <i className="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p className="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
          </div>

          {/* Grupo: Correo Electronico */}
          <div className="formulario__grupo" id="grupo__correo">
            <label htmlFor="correo" className="formulario__label">Correo Electrónico</label>
            <div className="formulario__grupo-input">
              <input type="email" className="formulario__input" name="correo" id="correo" placeholder="correo@correo.com" />
              <i className="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p className="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.
            </p>
          </div>

          {/* Grupo: Teléfono */}
          <div className="formulario__grupo" id="grupo__telefono">
            <label htmlFor="telefono" className="formulario__label">Teléfono</label>
            <div className="formulario__grupo-input">
              <input type="text" className="formulario__input" name="telefono" id="telefono" placeholder="4491234567" />
              <i className="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p className="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
          </div>

          {/* Grupo: Terminos y Condiciones*/}
          <div className="formulario__grupo " id="grupo__terminos">
            <label className="formulario__label">
              <input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
              Acepto los Terminos y Condiciones
            </label>
          </div>
          <br />
          <div className="formulario__mensaje" id="formulario__mensaje">
            <p><i className="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
          </div>
          <br />

          <div className="form__contact">
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
                <fieldset>
                  <legend>¿En cual horario prefiere ser atendido?</legend>
                  <select>
                    <option>Mañana</option>
                    <option>Tarde</option>
                    <option>Noche</option>
                  </select>
                </fieldset>
          <label className="checkbox"><input type="checkbox" checked />¿Le gustaria recibir novedades de la Barbería
            Scissors?</label>

          <div className="formulario__grupo formulario__grupo-btn-enviar">
            <button className='btn btn-outline-secondary col-4 '>Enviar</button>
          </div>
        </form>
        <div className="horarios">
          <h2>Nuestros horarios</h2>
        </div>
        <table className="table">
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
      </main>
      <script src="../js/formulario.js"></script>
      <FooterComponent></FooterComponent>

    </body >
  )
}
