import React, { useEffect, useState } from "react";
import { Row, Col, Card, Typography, Spin } from "antd";
import { SearchOutlined, AimOutlined } from "@ant-design/icons";
import ContentService from "../services/content.service";

const { Title, Paragraph } = Typography;

const Who = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ContentService.getWhoContent().then((response) => {
      setContent(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Row justify="center" style={{ padding: "100px" }}>
        <Spin size="large" />
      </Row>
    );
  }

  return (
    <Row
      className="section-fade-in"
      justify="space-evenly"
      align="middle"
      style={{
        padding: "50px 20px", // Simplified padding
      }}
    >
      <Col xs={24} lg={7} xl={7} style={{ marginBottom: "30px" }}>
        <Title
          style={{
            textAlign: "center",
            color: "#0A5FE0",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
          }}
        >
          ¿Qué es Move4IA?
        </Title>

        <Paragraph
          style={{
            textAlign: "justify",
            textIndent: "20px",
          }}
        >
          {content?.description}
        </Paragraph>
      </Col>
      <Col xs={24} lg={16} xl={16}>
        <Row gutter={[16, 16]} align="middle" justify="center">
          <Col xs={24} lg={12} xl={12}>
            <Card
              title={
                <>
                  <SearchOutlined style={{ marginRight: "10px" }} />
                  Visión
                </>
              }
              style={{
                width: "100%",
                border: "1px solid rgba(10, 95, 224, 0.1)",
                boxShadow: "0 4px 12px rgba(10, 95, 224, 0.08)",
                borderRadius: "12px",
              }}
            >
              <Row>
                <Col>
                  Visualizamos un mundo laboral donde cada individuo está
                  inspirado a moverse, a vivir de forma activa y saludable.
                  Queremos ser la fuerza motriz detrás de un cambio
                  significativo en las empresas.
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} lg={12} xl={12}>
            <Card
              title={
                <>
                  <AimOutlined style={{ marginRight: "10px" }} />
                  Misión
                </>
              }
              style={{
                width: "100%",
                border: "1px solid rgba(10, 95, 224, 0.1)",
                boxShadow: "0 4px 12px rgba(10, 95, 224, 0.08)",
                borderRadius: "12px",
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
