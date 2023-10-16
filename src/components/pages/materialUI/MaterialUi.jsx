import { Button, TextField, Typography, Box } from "@mui/material";
const MaterialUi = () => {
  return (
    <div>
      <Typography color={"primary"} variant="h5">
        Estoy aprendiendo MUI
      </Typography>
      <Typography color={"secondary"} variant="h5">
        Este es el segundo parrafo
      </Typography>
      <TextField label="Email" variant="outlined" placeholder="Email">
        Email
      </TextField>
      <Button variant="outlined" color="secondary">
        Contained
      </Button>
    </div>
  );
};

export default MaterialUi;
