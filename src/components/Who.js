import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { SearchOutlined, AimOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Who = () => {
  return (
    <Row
      justify={"space-evenly"}
      align={"middle"}
      style={{
        padding: window.innerWidth > 900 ? "70px" : "20px",
        marginBottom: window.innerWidth < 900 && "70px",
      }}
    >
      <Col
        xs={24}
        lg={7}
        xl={7}
        style={{ marginRight: window.innerWidth > 900 && "20px" }}
      >
        <Title style={{ textAlign: "center" }}>¿Qué es Move4it?</Title>

        <Paragraph
          style={{
            textAlign: "justify",
            paddingLeft: "0px",
            paddingRight: "0px",
            textIndent: "20px",
          }}
        >
          Somos la revolución del bienestar laboral, un programa interactivo e
          innovador diseñado para impulsar la salud, la conexión y el
          rendimiento dentro de tu equipo. Con desafíos emocionantes,
          asesoriamiento experto y una comunidad activa, Move4it va más allá de
          la salud física.
        </Paragraph>
      </Col>
      <Col xs={24} lg={16} xl={16}>
        <Row
          align={"middle"}
          justify={window.innerWidth > 900 ? "space-between" : "center"}
        >
          <Col lg={12} xl={12}>
            <Card
              title={
                <>
                  <SearchOutlined style={{ marginRight: "10px" }} />
                  Visión
                </>
              }
              style={{
                width: window.innerWidth > 900 ? "90%" : "300px",
                margin: "10px",
                border: "0.1px solid #ffffff",
                boxShadow:
                  "inset 0px 0px 2px rgba(0, 0, 0, 0.9), -20px 20px 20px 0px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Row>
                <Col>
                  Visualizamos un mundo laboral donde cada individuo está
                  inspirado a moverse, a vivir de forma activa y saludable.
                  Queremos ser la fuerza motriz detrás de un cambio
                  significativo en las empresas
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={12} xl={12}>
            <Card
              title={
                <>
                  <AimOutlined style={{ marginRight: "10px" }} />
                  Mision
                </>
              }
              style={{
                marginTop: window.innerWidth > 900 ? "0px" : "30px",
                width: window.innerWidth > 900 ? "90%" : "300px",
                margin: "10px",
                border: "0.0px solid black",
                boxShadow:
                  "inset 0px 0px 2px rgba(0, 0, 0, 0.9), -20px 20px 20px 0px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Row>
                <Col>
                  Nuestra misión es redefinir el bienestar empresarial. Estamos
                  comprometidos a proporcionar a las empresas herramientas
                  interactivas y motivadoras que inspiren a adoptar un estilo de
                  vida saludable.
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Who;
