import React from "react";
import { Row, Col, Typography } from "antd";
import p1 from "../assets/img/b_empleados.png";
import p2 from "../assets/img/b_empresas.png";
import m1 from "../assets/img/m1.jpg";
import m2 from "../assets/img/m2.png";

const { Title, Paragraph } = Typography;

const Ready = () => {
  const src =
    "https://th.bing.com/th/id/R.a42334ae0f1fe63a524dd804d9b6b3ec?rik=j9DeQFcvKvQc%2fg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fNestle-Logo.png&ehk=mkxHyeOa3dHqtm8PLQzvhzQsDCYGCqXJWGKcXuxiDts%3d&risl=&pid=ImgRaw&r=0";

  return (
    <Row
      justify={"center"}
      align={"middle"}
      id="who"
      style={{
        padding: "50px",
        paddingBottom: "50px",
        backgroundColor: "white",
      }}
    >
      <Col span={24}>
        <Title
          style={{
            textAlign: "center",
            marginBottom: window.innerWidth > 900 && "50px",
          }}
        >
          Move4it potencia a todo tu equipo
        </Title>
      </Col>
      <Col xs={24} lg={12} xl={12} style={{ textAlign: "center" }}>
        <img
          src={window.innerWidth > 900 ? p1 : m1}
          alt="logo"
          style={{
            width: window.innerWidth > 900 ? "90%" : "100%",
            borderRadius: "20px",
            marginBottom: window.innerWidth < 900 && "10px",
          }}
        />
      </Col>
      <Col xs={24} lg={12} xl={12} style={{ textAlign: "center" }}>
        <img
          src={window.innerWidth > 900 ? p2 : m2}
          alt="logo"
          style={{
            width: window.innerWidth > 900 ? "90%" : "100%",
            borderRadius: "20px",
          }}
        />
      </Col>
    </Row>
  );
};

export default Ready;
