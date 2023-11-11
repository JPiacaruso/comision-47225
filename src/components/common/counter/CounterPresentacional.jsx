import * as React from "react";
import { Box, Button, Container } from "@mui/material";

const CounterPresentacional = ({ sumar, restar, contador, onAdd }) => {
  return (
    <Container>
      <Box sx={{ display: "grid", gap: 1 }}>
        <Button
          variant="contained"
          style={{
            maxWidth: "50px",
            maxHeight: "30px",
            minWidth: "50px",
            minHeight: "30px",
          }}
          onClick={sumar}
        >
          +
        </Button>
        <Button
          variant="outlined"
          style={{
            maxWidth: "50px",
            maxHeight: "30px",
            minWidth: "50px",
            minHeight: "30px",
          }}
        >
          {contador}
        </Button>
        <Button
          variant="contained"
          style={{
            maxWidth: "50px",
            maxHeight: "30px",
            minWidth: "50px",
            minHeight: "30px",
          }}
          onClick={restar}
        >
          -
        </Button>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Button
          variant="contained"
          style={{
            maxWidth: "70px",
            maxHeight: "70px",
            minWidth: "70px",
            minHeight: "70px",
            fontSize: "11px",
          }}
          onClick={() => onAdd(contador)}
        >
          Agregar al Carrito
        </Button>
      </Box>
    </Container>
  );
};

export default CounterPresentacional;
