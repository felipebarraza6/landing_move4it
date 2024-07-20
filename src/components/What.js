import React from "react";
import { Row, Col, Card, Typography, Carousel, Tag, Button } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const What = () => {
  const src =
    "https://th.bing.com/th/id/R.a42334ae0f1fe63a524dd804d9b6b3ec?rik=j9DeQFcvKvQc%2fg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fNestle-Logo.png&ehk=mkxHyeOa3dHqtm8PLQzvhzQsDCYGCqXJWGKcXuxiDts%3d&risl=&pid=ImgRaw&r=0";
  return (
    <Row
      justify={"center"}
      align={"middle"}
      id="who"
      style={{ padding: "50px", zIndex: "0" }}
    >
      <Col>
        <Title style={{ textAlign: "center", marginBottom: "50px" }}>
          Ellos ya vivieron la experiencia Move4it
        </Title>
      </Col>
      <Col span={24}>
        <Row align={"middle"}>
          {window.innerWidth > 900 && (
            <Col span={1}>
              <Button
                type={"primary"}
                shape={"circle"}
                icon={<ArrowLeftOutlined />}
              />
            </Col>
          )}
          {window.innerWidth > 900 ? (
            <Col span={22}>
              <Carousel autoplay>
                <div>
                  <Row justify={"space-evenly"}>
                    <Col
                      style={{
                        marginBottom: window.innerWidth < 900 && "10px",
                      }}
                    >
                      <Card
                        hoverable
                        style={{ width: "200px" }}
                        cover={
                          <Row justify={"center"}>
                            <img
                              width="200px"
                              style={{ margin: "10px" }}
                              src={src}
                            />
                          </Row>
                        }
                      >
                        <Card.Meta
                          description={
                            <>
                              <Paragraph style={{ textAlign: "left" }}>
                                The passage experienced a surge in popularity
                                during the 1960s when Letraset used it on their
                                dry-transfer sheets, and again during the 90s.
                              </Paragraph>
                              <Paragraph>
                                <Tag
                                  color="blue-inverse"
                                  style={{ marginBottom: "10px" }}
                                >
                                  Sandra Rivas
                                </Tag>
                                <Tag color="blue-inverse">
                                  Jefa de calidad de vida
                                </Tag>
                              </Paragraph>
                            </>
                          }
                        ></Card.Meta>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        hoverable
                        style={{ width: "200px" }}
                        cover={
                          <Row justify={"center"}>
                            <img
                              width="200px"
                              style={{ margin: "10px" }}
                              src={src}
                            />
                          </Row>
                        }
                      >
                        <Card.Meta
                          description={
                            <>
                              <Paragraph style={{ textAlign: "left" }}>
                                The passage experienced a surge in popularity
                                during the 1960s when Letraset used it on their
                                dry-transfer sheets, and again during the 90s.
                              </Paragraph>
                              <Paragraph>
                                <Tag
                                  color="blue-inverse"
                                  style={{ marginBottom: "10px" }}
                                >
                                  Sandra Rivas
                                </Tag>
                                <Tag color="blue-inverse">
                                  Jefa de calidad de vida
                                </Tag>
                              </Paragraph>
                            </>
                          }
                        ></Card.Meta>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        hoverable
                        style={{ width: "200px" }}
                        cover={
                          <Row justify={"center"}>
                            <img
                              width="200px"
                              style={{ margin: "10px" }}
                              src={src}
                            />
                          </Row>
                        }
                      >
                        <Card.Meta
                          description={
                            <>
                              <Paragraph style={{ textAlign: "left" }}>
                                The passage experienced a surge in popularity
                                during the 1960s when Letraset used it on their
                                dry-transfer sheets, and again during the 90s.
                              </Paragraph>
                              <Paragraph>
                                <Tag
                                  color="blue-inverse"
                                  style={{ marginBottom: "10px" }}
                                >
                                  Sandra Rivas
                                </Tag>
                                <Tag color="blue-inverse">
                                  Jefa de calidad de vida
                                </Tag>
                              </Paragraph>
                            </>
                          }
                        ></Card.Meta>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        hoverable
                        style={{ width: "200px" }}
                        cover={
                          <Row justify={"center"}>
                            <img
                              width="200px"
                              style={{ margin: "10px" }}
                              src={src}
                            />
                          </Row>
                        }
                      >
                        <Card.Meta
                          description={
                            <>
                              <Paragraph style={{ textAlign: "left" }}>
                                The passage experienced a surge in popularity
                                during the 1960s when Letraset used it on their
                                dry-transfer sheets, and again during the 90s.
                              </Paragraph>
                              <Paragraph>
                                <Tag
                                  color="blue-inverse"
                                  style={{ marginBottom: "10px" }}
                                >
                                  Sandra Rivas
                                </Tag>
                                <Tag color="blue-inverse">
                                  Jefa de calidad de vida
                                </Tag>
                              </Paragraph>
                            </>
                          }
                        ></Card.Meta>
                      </Card>
                    </Col>
                    {window.innerWidth > 900 && (
                      <Col>
                        <Card
                          hoverable
                          style={{ width: "200px" }}
                          cover={
                            <Row justify={"center"}>
                              <img
                                width="200px"
                                style={{ margin: "10px" }}
                                src={src}
                              />
                            </Row>
                          }
                        >
                          <Card.Meta
                            description={
                              <>
                                <Paragraph style={{ textAlign: "left" }}>
                                  The passage experienced a surge in popularity
                                  during the 1960s when Letraset used it on
                                  their dry-transfer sheets, and again during
                                  the 90s.
                                </Paragraph>
                                <Paragraph>
                                  <Tag
                                    color="blue-inverse"
                                    style={{ marginBottom: "10px" }}
                                  >
                                    Sandra Rivas
                                  </Tag>
                                  <Tag color="blue-inverse">
                                    Jefa de calidad de vida
                                  </Tag>
                                </Paragraph>
                              </>
                            }
                          ></Card.Meta>
                        </Card>
                      </Col>
                    )}{" "}
                  </Row>
                </div>
                <div>
                  <Row justify={"space-evenly"}>
                    <Col
                      style={{
                        marginBottom: window.innerWidth < 900 && "10px",
                      }}
                    >
                      <Card
                        hoverable
                        style={{ width: "200px" }}
                        cover={
                          <Row justify={"center"}>
                            <img
                              width="200px"
                              style={{ margin: "10px" }}
                              src={src}
                            />
                          </Row>
                        }
                      >
                        <Card.Meta
                          description={
                            <>
                              <Paragraph style={{ textAlign: "left" }}>
                                The passage experienced a surge in popularity
                                during the 1960s when Letraset used it on their
                                dry-transfer sheets, and again during the 90s.
                              </Paragraph>
                              <Paragraph>
                                <Tag
                                  color="blue-inverse"
                                  style={{ marginBottom: "10px" }}
                                >
                                  Sandra Rivas
                                </Tag>
                                <Tag color="blue-inverse">
                                  Jefa de calidad de vida
                                </Tag>
                              </Paragraph>
                            </>
                          }
                        ></Card.Meta>
                      </Card>
                    </Col>
                    <Col
                      style={{
                        marginBottom: window.innerWidth < 900 && "10px",
                      }}
                    >
                      <Card
                        hoverable
                        style={{ width: "200px" }}
                        cover={
                          <Row justify={"center"}>
                            <img
                              width="200px"
                              style={{ margin: "10px" }}
                              src={src}
                            />
                          </Row>
                        }
                      >
                        <Card.Meta
                          description={
                            <>
                              <Paragraph style={{ textAlign: "left" }}>
                                The passage experienced a surge in popularity
                                during the 1960s when Letraset used it on their
                                dry-transfer sheets, and again during the 90s.
                              </Paragraph>
                              <Paragraph>
                                <Tag
                                  color="blue-inverse"
                                  style={{ marginBottom: "10px" }}
                                >
                                  Sandra Rivas
                                </Tag>
                                <Tag color="blue-inverse">
                                  Jefa de calidad de vida
                                </Tag>
                              </Paragraph>
                            </>
                          }
                        ></Card.Meta>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        hoverable
                        style={{ width: "200px" }}
                        cover={
                          <Row justify={"center"}>
                            <img
                              width="200px"
                              style={{ margin: "10px" }}
                              src={src}
                            />
                          </Row>
                        }
                      >
                        <Card.Meta
                          description={
                            <>
                              <Paragraph style={{ textAlign: "left" }}>
                                The passage experienced a surge in popularity
                                during the 1960s when Letraset used it on their
                                dry-transfer sheets, and again during the 90s.
                              </Paragraph>
                              <Paragraph>
                                <Tag
                                  color="blue-inverse"
                                  style={{ marginBottom: "10px" }}
                                >
                                  Sandra Rivas
                                </Tag>
                                <Tag color="blue-inverse">
                                  Jefa de calidad de vida
                                </Tag>
                              </Paragraph>
                            </>
                          }
                        ></Card.Meta>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        hoverable
                        style={{ width: "200px" }}
                        cover={
                          <Row justify={"center"}>
                            <img
                              width="200px"
                              style={{ margin: "10px" }}
                              src={src}
                            />
                          </Row>
                        }
                      >
                        <Card.Meta
                          description={
                            <>
                              <Paragraph style={{ textAlign: "left" }}>
                                The passage experienced a surge in popularity
                                during the 1960s when Letraset used it on their
                                dry-transfer sheets, and again during the 90s.
                              </Paragraph>
                              <Paragraph>
                                <Tag
                                  color="blue-inverse"
                                  style={{ marginBottom: "10px" }}
                                >
                                  Sandra Rivas
                                </Tag>
                                <Tag color="blue-inverse">
                                  Jefa de calidad de vida
                                </Tag>
                              </Paragraph>
                            </>
                          }
                        ></Card.Meta>
                      </Card>
                    </Col>
                    {window.innerWidth > 900 && (
                      <Col>
                        <Card
                          hoverable
                          style={{ width: "200px" }}
                          cover={
                            <Row justify={"center"}>
                              <img
                                width="200px"
                                style={{ margin: "10px" }}
                                src={src}
                              />
                            </Row>
                          }
                        >
                          <Card.Meta
                            description={
                              <>
                                <Paragraph style={{ textAlign: "left" }}>
                                  The passage experienced a surge in popularity
                                  during the 1960s when Letraset used it on
                                  their dry-transfer sheets, and again during
                                  the 90s.
                                </Paragraph>
                                <Paragraph>
                                  <Tag
                                    color="blue-inverse"
                                    style={{ marginBottom: "10px" }}
                                  >
                                    Sandra Rivas
                                  </Tag>
                                  <Tag color="blue-inverse">
                                    Jefa de calidad de vida
                                  </Tag>
                                </Paragraph>
                              </>
                            }
                          ></Card.Meta>
                        </Card>
                      </Col>
                    )}{" "}
                  </Row>
                </div>
              </Carousel>
            </Col>
          ) : (
            <>
              <Col span={24}>
                <Carousel autoplay>
                  <div>
                    <Card
                      hoverable
                      style={{ width: "100%" }}
                      cover={
                        <Row justify={"center"}>
                          <img
                            width="100%"
                            style={{ margin: "10px" }}
                            src={src}
                          />
                        </Row>
                      }
                    >
                      <Card.Meta
                        description={
                          <>
                            <Paragraph style={{ textAlign: "left" }}>
                              The passage experienced a surge in popularity
                              during the 1960s when Letraset used it on their
                              dry-transfer sheets, and again during the 90s.
                            </Paragraph>
                            <Paragraph>
                              <Tag
                                color="blue-inverse"
                                style={{ marginBottom: "10px" }}
                              >
                                Sandra Rivas
                              </Tag>
                              <Tag color="blue-inverse">
                                Jefa de calidad de vida
                              </Tag>
                            </Paragraph>
                          </>
                        }
                      ></Card.Meta>
                    </Card>
                  </div>
                  <div>
                    <Card
                      hoverable
                      style={{ width: "100%" }}
                      cover={
                        <Row justify={"center"}>
                          <img
                            width="100%"
                            style={{ margin: "10px" }}
                            src={src}
                          />
                        </Row>
                      }
                    >
                      <Card.Meta
                        description={
                          <>
                            <Paragraph style={{ textAlign: "left" }}>
                              The passage experienced a surge in popularity
                              during the 1960s when Letraset used it on their
                              dry-transfer sheets, and again during the 90s.
                            </Paragraph>
                            <Paragraph>
                              <Tag
                                color="blue-inverse"
                                style={{ marginBottom: "10px" }}
                              >
                                Sandra Rivas
                              </Tag>
                              <Tag color="blue-inverse">
                                Jefa de calidad de vida
                              </Tag>
                            </Paragraph>
                          </>
                        }
                      ></Card.Meta>
                    </Card>
                  </div>
                </Carousel>
              </Col>
            </>
          )}

          {window.innerWidth > 900 && (
            <Col span={1}>
              <Button
                type={"primary"}
                shape={"circle"}
                icon={<ArrowRightOutlined />}
              />
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default What;
