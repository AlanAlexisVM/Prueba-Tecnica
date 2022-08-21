import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  
  return (
    //Componente que muestra el footer de la pagina utiiizando MDBReact
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100072141934213' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/IaTuring' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/ia_turing/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/company/turing-inteligencia-artificial/?originalSubdomain=mx' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Inscríbete a nuestro newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start='12'>
                <MDBInput id="domTextElement" contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribir
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Turing Inteligencia Artificial</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Av. Insurgentes 601
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Col. Napoles, Benito Juarez
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Ciudad de México, México
                  </a>
                </li>
                <h5 className='text-uppercase'>Telefono de contacto:</h5>
                <li>
                  <a href='#!' className='text-white'>
                  +52 (722) 936-96-65
                  </a>
                </li>
                <h5 className='text-uppercase'>Telefono de contacto:</h5>
                <li>
                  <a href='#!' className='text-white'>
                    contacto@turing-ia.com
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Nuestros servicios</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Implementación de Proyectos (Business Analyst)
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Workshop (Blue Print)
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Capacitación
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Venta de Software
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Venta de Hardware
                  </a>
                </li>
                <li>
                    <a href='#!' className='text-white'>
                        Desarrollo de Aplicaciones
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Balanced Scorecard
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Mapa de sitio</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Servicios
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Tableau
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white'>
          Alexis Velasco
        </a>
      </div>
    </MDBFooter>
  );
}