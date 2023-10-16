import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Grid,
  TextField,
  Box,
  FormControl,
  OutlinedInput,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

const PruebaResponsive = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const cambiarEstado = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return (
    <Box
      sx={{
        padding: "10px",
      }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        spacing={2}
      >
        <Grid item xs={12} sm={8} md={6} spacing={5}>
          <TextField label="email" fullWidth />

          <FormControl
            sx={{ m: 1, display: "flex", justifyContent: "center" }}
            variant="outlined"
            fullWidth
            spacing={2}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={mostrarPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={cambiarEstado}
                    edge="end"
                  >
                    {mostrarPassword ? (
                      <VisibilityOff color={"primary"} />
                    ) : (
                      <Visibility color={"primary"} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid
          item
          sm={8}
          md={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button variant={"contained"} color={"primary"}>
            Ingresar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PruebaResponsive;
