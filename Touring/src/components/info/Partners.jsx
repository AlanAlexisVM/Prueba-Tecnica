import React from 'react'
import "../../styles/Info.css";
import Figure from 'react-bootstrap/Figure';
import { Box, Container } from "@mui/material";

const Partners = () => {
    const Partner = ["https://www.turing-ia.com/assets/img/tableau-partner.png","https://www.turing-ia.com/assets/img/salesforce.jpg","https://www.turing-ia.com/assets/img/dell.png","https://www.turing-ia.com/assets/img/hp.png","https://www.turing-ia.com/assets/img/redhat.png","https://www.turing-ia.com/assets/img/microsoft.png","https://www.turing-ia.com/assets/img/kaspersky.png","https://www.turing-ia.com/assets/img/ibm.png"];
    return (
        <Box>
            <Container className="infotextp">
                <h1>NUESTROS SOCIOS DE NEGOCIOS</h1>
            </Container>
            <Container className="infoimagesp" >
                <Figure>
                    <Figure.Image
                    width={100}
                    height={200}
                    alt="100x200"
                    src={Partner[0]}
                    />
                </Figure>
                <Figure>
                        <Figure.Image
                        width={100}
                        height={200}
                        alt="100x200"
                        src={Partner[1]}
                        />
                </Figure>
                <Figure>
                        <Figure.Image
                        width={100}
                        height={200}
                        alt="100x200"
                        src={Partner[2]}
                        />
                </Figure>
                <Figure>
                        <Figure.Image
                        width={100}
                        height={200}
                        alt="100x200"
                        src={Partner[3]}
                        />
                </Figure>
                <Figure>
                    <Figure.Image
                    width={100}
                    height={200}
                    alt="100x200"
                    src={Partner[4]}
                    />
                </Figure>
                <Figure>
                    <Figure.Image
                    width={100}
                    height={200}
                    alt="100x200"
                    src={Partner[5]}
                    />
                </Figure>
                <Figure>
                    <Figure.Image
                    width={100}
                    height={200}
                    alt="100x200"
                    src={Partner[6]}
                    />
                </Figure>
                <Figure>
                    <Figure.Image
                    width={100}
                    height={200}
                    alt="100x200"
                    src={Partner[7]}
                    />
                </Figure>  
            </Container>
        </Box>
    )
}

export default Partners;
