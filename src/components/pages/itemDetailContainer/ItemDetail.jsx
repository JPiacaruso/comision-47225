import CounterContainer from "../../common/counter/CounterContainer";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <Container
      fixed
      maxWidth="xl"
      sx={{
        padding: 2,
        marginBottom: 13,
        marginTop: 7,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          boxShadow: 3,
          margin: 5,
          padding: 2,
          borderRadius: 2,
          border: 1,
          backgroundColor: "rgb(236, 240, 241)",
        }}
      >
        <Box>
          <img
            src={productSelected.img}
            alt={productSelected.title}
            height={350}
            width={300}
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={7}
        >
          <Typography variant="h4" marginBottom={3} textAlign={"center"}>
            {productSelected.title}
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            {productSelected.description}
          </Typography>
          <Typography variant="h5" marginTop={3}>
            {" "}
            ${productSelected.price}.-
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {initial && (
            <Typography
              variant="body2"
              textAlign={"center"}
              paddingTop={"1rem"}
            >
              <Typography variant="h7">Ya tienes {initial} Unidades</Typography>
            </Typography>
          )}

          {showCounter ? (
            <Box>
              <CounterContainer
                stock={productSelected.stock}
                onAdd={onAdd}
                initial={initial}
              />
            </Box>
          ) : (
            <Button
              variant="contained"
              style={{
                maxWidth: "60px",
                maxHeight: "50px",
                minWidth: "60px",
                minHeight: "50px",
                fontSize: "10px",
                textAlign: "center",
                marginLeft: "7px",
                marginTop: "5px",
              }}
              component={Link}
              to={"../cart"}
            >
              Terminar compra
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};
