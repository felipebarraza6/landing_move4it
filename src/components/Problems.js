import React from "react";
import { Row, Col, Card, Typography, Carousel, Tag, Button, Steps } from "antd";
import {
  PhoneFilled,
  PlusCircleFilled,
  SmileFilled,
  EditOutlined,
} from "@ant-design/icons";
import { HashLink as Link } from "react-router-hash-link";
const { Title, Paragraph } = Typography;
const Problems = () => {
  const src =
    "https://th.bing.com/th/id/R.a42334ae0f1fe63a524dd804d9b6b3ec?rik=j9DeQFcvKvQc%2fg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fNestle-Logo.png&ehk=mkxHyeOa3dHqtm8PLQzvhzQsDCYGCqXJWGKcXuxiDts%3d&risl=&pid=ImgRaw&r=0";

  const description1 =
    "Nuestros especialistas te brindarán orientación personalizada para descubrir las soluciones que mejor se ajusten a tus requerimientos.";
  const description2 =
    "En el proceso de incorporación, profesionales te guiarán para que comprendas y te conviertas en un conocedor del programa.";
  const description3 =
    "Move4it fortalece tu cultura organizacional y potencia tu recurso más preciado: ¡las personas!";

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Row
      justify={"center"}
      align={"middle"}
      id="who"
      style={{ padding: "50px", paddingBottom: "100px" }}
    >
      <Col>
        <Title style={{ textAlign: "center" }}>
          ¿Listo para vivir la experiencia Move4it?
        </Title>
      </Col>
      <Col span={24} style={{ marginTop: "50px" }}>
        <Steps
          current={3}
          items={[
            {
              title: "Programa una llamada",
              description: (
                <Paragraph style={{ textAlign: "center", fontSize: "13px" }}>
                  {description1}
                </Paragraph>
              ),
              icon: <PhoneFilled style={{ fontSize: "30px" }} />,
            },
            {
              title: "Únete a la experiencia",
              description: (
                <Paragraph style={{ textAlign: "center", fontSize: "12px" }}>
                  {description2}
                </Paragraph>
              ),
              icon: <PlusCircleFilled style={{ fontSize: "30px" }} />,
            },
            {
              title: "Genera un entorno más alegre",
              description: (
                <Paragraph style={{ textAlign: "center", fontSize: "12px" }}>
                  {description3}
                </Paragraph>
              ),
              icon: <SmileFilled style={{ fontSize: "30px" }} />,
            },
          ]}
        />
      </Col>
      <Col>
        <Button
          type="primary"
          icon={<EditOutlined />}
          style={{ marginRight: "50px" }}
        >
          {" "}
          <Link smooth to="#contact" scroll={(el) => scrollWithOffset(el)}>
            Empieza ahora
          </Link>
        </Button>
      </Col>
    </Row>
  );
};

export default Problems;
