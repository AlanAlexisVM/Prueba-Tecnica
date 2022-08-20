import React from 'react';
import "../../styles/Customers.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Car = () => {
  return (
    <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className='CardsCustomers'>
            <Card.Img variant="top" src="https://www.turing-ia.com/assets/img/grupopetersenfallback.jpg" />
            <Card.Body>
              <Card.Text>
              Grupo Petersen crea una cultura de datos con Tableau
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='CardsCustomers'>
            <Card.Img variant="top" src="https://www.turing-ia.com/assets/img/redhatteaser.jpg"/>
            <Card.Body>
              <Card.Text>
              Red Hat adopta el Blueprint de Tableau y Tableau Online, y profundiza en la cultura de datos con más de 4500 empleados en menos de un año
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='CardsCustomers'>
            <Card.Img variant="top" src="https://www.turing-ia.com/assets/img/verizon-homepage-tile-final-2x.jpg"/>
            <Card.Body>
              <Card.Text>
              Verizon usa Tableau para reducir las llamadas de soporte en un 43 % y así mejorar la experiencia del
                  cliente
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='CardsCustomers'>
            <Card.Img variant="top" src="https://www.turing-ia.com/assets/img/wholefoodsteaser1.jpg" />
            <Card.Body>
              <Card.Text>
              Whole Foods Market democratiza el acceso a los datos en sus 460 tiendas para 18 000 empleados
                  gracias a Tableau
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='CardsCustomers'>
            <Card.Img variant="top" src="https://www.turing-ia.com/assets/img/mondelezteaser.jpg"/>
            <Card.Body>
              <Card.Text>
              Mondelez International digitaliza la adquisición para integrar más de 160 campos de datos, 28 000 proveedores y generar millones en ahorro de costos
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='CardsCustomers'>
            <Card.Img variant="top" src="https://www.turing-ia.com/assets/img/header_jpmc_1.jpg"/>
            <Card.Body>
              <Card.Text>
              JPMorgan Chase elige Tableau para ofrecer análisis de autoservicio y seguir el vertiginoso ritmo de los cambios en el sector
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  )
}

export default Car;