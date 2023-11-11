import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Box } from "@mui/material";
import "./Login.css";

const Login = () => {
  const [nombreUsuario, setNombreUsuario] = useState(
    localStorage.getItem("nombreUsuario") || ""
  );
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  useEffect(() => {
    if (!nombreUsuario) {
      setShowLoginDialog(true);
    }
  }, [nombreUsuario]);

  const handleLogin = () => {
    Swal.fire({
      title: "Por favor, ingresa tu nombre de usuario",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      showLoaderOnConfirm: true,
      preConfirm: (nombre) => {
        return new Promise((resolve, reject) => {
          if (nombre) {
            localStorage.setItem("nombreUsuario", nombre.toUpperCase());
            setNombreUsuario(nombre.toUpperCase());
            resolve();
          } else {
            reject("Debes ingresar un nombre de usuario");
          }
        });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Bienvenido/a!: " + ` ${nombreUsuario}`,
          icon: "success",
        });
      }
    });
  };

  return (
    <Box className="mensajeBienvenida">
      {nombreUsuario ? (
        <p>¡Bienvenido/a! {nombreUsuario}</p>
      ) : (
        <button onClick={handleLogin}>Ingrese su Nombre</button>
      )}

      {showLoginDialog && handleLogin()}
    </Box>
  );
};

export default Login;
