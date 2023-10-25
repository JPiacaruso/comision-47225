import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInfo.nombre.length < 5 || !userInfo.email.includes("@")) {
      if (userInfo.nombre.length < 5) {
        setErrors({
          ...errors,
          nombre: "El nombre debe tener al menos 5 caracteres",
        });
      }
      if (!userInfo.email.includes("@")) {
        setErrors({ ...errors, email: "No corresponde a un email válido" });
      }
      return;
    }

    console.log(userInfo);
  };

  return (
    <div>
      <h1>Estoy en el Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          placeholder="nombre"
        />
        <span style={{ color: "crimson" }}>{errors.nombre}</span>
        <input
          type="text"
          name="apellido"
          onChange={handleChange}
          placeholder="apellido"
        />
        <span style={{ color: "crimson" }}>{errors.apellido}</span>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <span style={{ color: "crimson" }}>{errors.email}</span>
        <button type="submit">Enviar</button>
        <button type="button" onClick={() => console.log("se cancelo")}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
