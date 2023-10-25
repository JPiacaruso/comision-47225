import { Padding } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", apellido: "", email: "" },
    onSubmit: (data) => {
      console.log("Se envió");
      console.log(data);
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo es obligatorio")
        .min(5, "Escribe al menos 5 caracteres")
        .max(20, "20 caracteres máximo"),
      apellido: Yup.string()
        .required("El campo es obligatorio")
        .min(2, "Escribe al menos 2 caracteres")
        .max(20, "20 caracteres máximo"),
      email: Yup.string()
        .email("Escribe un email válido")
        .required("El campo es obligatorio"),
    }),
  });

  console.log(errors);

  return (
    <div style={{ padding: "30px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <Button variant="contained" type="submit">
          {" "}
          Enviar
        </Button>
        <Button variant="outlined" type="button">
          {" "}
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default CheckoutFormik;
