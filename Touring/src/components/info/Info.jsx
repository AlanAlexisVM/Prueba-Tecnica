import React from "react";
import "../../styles/Info.css";
import Figure from 'react-bootstrap/Figure';
import { Box, Container } from "@mui/material";

function Info(props) {
  return (
    //Componente reutilizable que muestra informacion
    <Box className="info">
      <Container className="infoimages" >
    <Figure>
      <Figure.Image
        width={500}
        height={600}
        alt="500x600"
        src={props.image}
      />
    </Figure>
    </Container>
    <Container className="infotext">
      <h1>{props.title}</h1>
    {props.tex}
    </Container>
    </Box>
  );
}

export default Info;
