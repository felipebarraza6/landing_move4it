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
              type={location.hash === "" ? "primary" : "text"}
              style={{
                ...styles.btn,
                color: location.hash === "" ? "white" : "white",
                fontWeight: location.hash === "" ? 600 : 400,
                border: location.hash === "" ? "none" : "none",
                background: location.hash === "" ? "rgba(255, 255, 255, 0.2)" : "transparent",
                backdropFilter: location.hash === "" ? "blur(10px)" : "none",
              }}
            >
              <Link smooth to="#">
                Inicio
              </Link>
            </Button>
          </Col>
          <Col>
            <Button
              type={location.hash === "#what" ? "primary" : "text"}
              style={{
                ...styles.btn,
                color: "white",
                fontWeight: location.hash === "#what" ? 600 : 400,
                border: "none",
                background: location.hash === "#what" ? "rgba(255, 255, 255, 0.2)" : "transparent",
                backdropFilter: location.hash === "#what" ? "blur(10px)" : "none",
              }}
            >
              <Link smooth to="#what" scroll={(el) => scrollWithOffset(el)}>
                ¿Qué es Move4IA?
              </Link>
            </Button>
          </Col>
          <Col>
            <Button
              type={location.hash === "#benefits" ? "primary" : "text"}
              style={{
                ...styles.btn,
                color: "white",
                fontWeight: location.hash === "#benefits" ? 600 : 400,
                border: "none",
                background: location.hash === "#benefits" ? "rgba(255, 255, 255, 0.2)" : "transparent",
                backdropFilter: location.hash === "#benefits" ? "blur(10px)" : "none",
              }}
            >
              <Link smooth to="#benefits" scroll={(el) => scrollWithOffset(el)}>
                Beneficios
              </Link>
            </Button>
          </Col>
          <Col>
            <Button
              type={location.hash === "#faq" ? "primary" : "text"}
              style={{
                ...styles.btn,
                color: "white",
                fontWeight: location.hash === "#faq" ? 600 : 400,
                border: "none",
                background: location.hash === "#faq" ? "rgba(255, 255, 255, 0.2)" : "transparent",
                backdropFilter: location.hash === "#faq" ? "blur(10px)" : "none",
              }}
              onClick={FAQ}
            >
              FAQ
            </Button>
          </Col>

          <Col style={{ marginTop: window.innerWidth < 900 && "-22px" }}>
            <Button
              type={"primary"}
              style={{
                ...styles.btn,
                marginLeft: "10px",
                background: "rgba(255, 255, 255, 0.25)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => window.open("https://app.move4it.cl/")}
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
            style={{
              ...styles.btn,
              marginLeft: "10px",
              background: "rgba(255, 255, 255, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => window.open("https://app.move4it.cl/")}
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
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Menu.SubMenu
              icon={<MenuOutlined style={{ color: "white", fontSize: "20px" }} />}
            >
              <Menu.Item key="1">
                <Link smooth to="#">
                  Inicio
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link smooth to="#what" scroll={(el) => scrollWithOffset(el)}>
                  ¿Qué es Move4IA?
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
    borderRadius: "8px",
    padding: "6px 16px",
    height: "auto",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  menu: {
    width: window.innerWidth > 900 ? "100%" : "200px",
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default MenuNav;
