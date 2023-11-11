import React from "react";
import "./FooterFinal.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Box, Typography } from "@mui/material";

const FooterFinal = () => {
  return (
    <div className="footer">
      <div className="sb_footer_section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>SOCIOS</h4>
            <a href="">
              <p>Ceramicas del norte</p>
            </a>
            <a href="">
              <p>Jikkan ceramica</p>
            </a>
            <a href="">
              <p>Ceramicas Lourdess</p>
            </a>
            <a href="">
              <p>Inalcan</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>COMPAÑIA</h4>
            <a href="">
              <p>Sobre Nosotros</p>
            </a>
            <a href="">
              <p>Media</p>
            </a>
            <a href="">
              <p>Contacto</p>
            </a>
          </div>
          <div className="sb_footer-links_div2">
            <h4> REDES SOCIALES</h4>
            <div className="socialmedia">
              <a
                href="https://www.facebook.com/tu-pagina-de-facebook"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/tu-cuenta-de-twitter"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/tu-cuenta-de-instagram"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/tu-perfil-de-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} Piantao. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="">
              <p>Terminos y Condiciones</p>
            </a>
            <a href="">
              <p>Privacidad</p>
            </a>
            <a href="">
              <p>Seguridad</p>
            </a>
            <a href="">
              <p>Declaraciones</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFinal;
