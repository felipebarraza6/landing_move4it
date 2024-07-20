import React from "react";
import { Button, Row, Col, Modal, Collapse, Menu, Burge } from "antd";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const MenuNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      key: "1",
      label: "¿En qué consiste el juego? ",
      children: (
        <p align="justify">
          Es una competencia en equipos donde semanalmente tendrán que lograr
          distintas pruebas relacionadas con hábitos de vida sana.
          <br />
          <br />
          La realización de las pruebas otorgará puntos con los cuales los
          equipos serán rankeados y se determinara el ganador.
        </p>
      ),
    },
    {
      key: "2",
      label: "¿Quiénes pueden participar?",
      children: (
        <p align="justify">
          Cualquier persona perteneciente a la empresa sin importar sexo o edad.
          Si algún jugador presenta alguna discapacidad, las pruebas semanales
          se pueden adaptar. El objetivo es que todos participen.
        </p>
      ),
    },
    {
      key: "3",
      label: "¿Cómo se forman los equipos? ",
      children: (
        <p align="justify">
          Los equipos se inscriben de manera voluntaria y deben tener 4
          jugadores donde deben designar un líder.
          <br />
          <br />
          Si no tienes equipo, no te preocupes buscaremos la forma de que
          participes. Recuerda, el objetivo es que todos participen
        </p>
      ),
    },
    {
      key: "4",
      label: "¿Qué pasa si un participante se va de la empresa?",
      children: (
        <p align="justify">
          No te preocupes, el equipo puede continuar compitiendo y no se verá
          perjudicado.
        </p>
      ),
    },
    {
      key: "5",
      label: "¿Qué modalidades de Move4it existen? ",
      children: (
        <p align="justify">
          Actualmente solo está disponible la versión corporativa. Próximamente
          implementaremos una versión freemium para que todos participen.
          <br />
          <br />
          Esta versión corporativa cuenta con 2 opciones:
          <br />
          <br />
          a) Evento Move4it: La empresa paga por un programa que dura un
          determinado periodo de tiempo (desde 2 meses) y por una cantidad de
          empleados. <br />
          <br />
          b) Suscripción Move4it: La empresa paga una suscripción mensual por
          empleado. El programa dura todo el año y es parte de un beneficio
          entregado por la empresa.
        </p>
      ),
    },
  ];

  const FAQ = () => {
    Modal.info({
      title: "FAQ",
      width: "750px",
      content: <Collapse accordion items={items} />,
    });
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Row align="middle" justify="end">
      {window.innerWidth > 900 ? (
        <>
          <Col>
            <Button
              type={location.hash === "" ? "primary" : "link"}
              style={{
                ...styles.btn,
                color: location.hash === "" ? "white" : "black",
              }}
            >
              <Link smooth to="#">
                Inicio
              </Link>
            </Button>
          </Col>
          <Col>
            <Button
              type={location.hash === "#what" ? "primary" : "link"}
              style={{
                ...styles.btn,
                color: location.hash === "#what" ? "white" : "black",
              }}
            >
              <Link smooth to="#what" scroll={(el) => scrollWithOffset(el)}>
                ¿Qué es Move4it?
              </Link>
            </Button>
          </Col>
          <Col>
            <Button
              type={location.hash === "#benefits" ? "primary" : "link"}
              style={{
                ...styles.btn,
                color: location.hash === "#benefits" ? "white" : "black",
              }}
            >
              <Link smooth to="#benefits" scroll={(el) => scrollWithOffset(el)}>
                Beneficios
              </Link>
            </Button>
          </Col>
          <Col>
            <Button
              type={location.hash === "#faq" ? "primary" : "link"}
              style={{
                ...styles.btn,
                color: location.hash === "#faq" ? "white" : "black",
              }}
              onClick={FAQ}
            >
              FAQ
            </Button>
          </Col>

          <Col style={{ marginTop: window.innerWidth < 900 && "-22px" }}>
            <Button
              type={location.hash === "#contact" ? "primary" : "link"}
              style={{
                ...styles.btn,
                color: location.hash === "#contact" ? "white" : "black",
              }}
            >
              <Link smooth to="#contact" scroll={(el) => scrollWithOffset(el)}>
                Contacto
              </Link>
            </Button>
          </Col>
          <Col style={{ marginTop: window.innerWidth < 900 && "-22px" }}>
            <Button
              type={"primary"}
              style={{ ...styles.btn, marginLeft: "10px" }}
              onClick={() => window.open("http://186.64.113.30:4200/")}
              icon={<UserOutlined />}
            >
              Portal Cliente
            </Button>
          </Col>
        </>
      ) : (
        <>
          <Button
            type={"primary"}
            style={{ ...styles.btn, marginLeft: "10px" }}
            onClick={() => navigate("#portal")}
            icon={<UserOutlined />}
          >
            Portal Cliente
          </Button>
          <Menu
            inlineCollapsed={true}
            mode="vertical"
            style={{
              borderRadius: "10px",
              width: "60px",
              backgroundColor: "white",
              borderColor: "white",
            }}
          >
            <Menu.SubMenu
              icon={<MenuOutlined style={{ color: "rgb(0, 21, 41)" }} />}
            >
              <Menu.Item key="1">
                <Link smooth to="#">
                  Inicio
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link smooth to="#what" scroll={(el) => scrollWithOffset(el)}>
                  ¿Qué es Move4it?
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link
                  smooth
                  to="#benefits"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Beneficios
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link onClick={FAQ}>FAQ</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link
                  smooth
                  to="#contact"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Contacto
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </>
      )}
    </Row>
  );
};

const styles = {
  btn: {
    color: "white",
  },
  menu: {
    width: window.innerWidth > 900 ? "100%" : "200px",
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default MenuNav;
