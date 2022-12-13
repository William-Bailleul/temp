import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "../App.js"

function Footer() {
  return (
    <div>
      <div className='pokedex-style-gradient-upward '>
        <div className='pokedex-bot-part-shape'></div>
      </div>
      <MDBFooter className='white-text text-center text-lg-start text-muted color-red'>
        <section>
          <MDBContainer className='text-center text-md-start'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3  " />
                  Company name
                </h6>
                <p className=' '>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </MDBCol>
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4  '>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Angular
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    React
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Vue
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Laravel
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-3" />
                  avollet@gaming.tech
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  wbailleul@gaming.tech
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> +33 06 32 11 86 50
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> +33 07 67 42 90 08
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div className='text-center p-4 color-dark-red' >
          © 2022 Copyright : Vollet Antoine - Bailleul William
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;