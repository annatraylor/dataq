import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/videos/ag.gif";
import img2 from "../../assets/images/videos/bb.gif";
import img3 from "../../assets/images/videos/e.gif";
import img4 from "../../assets/images/videos/ff.gif";
import img5 from "../../assets/images/videos/sw3.gif";
import img6 from "../../assets/images/videos/mmm.gif";

const Websites = () => {
  return (
    <div>
      <div className="spacer">
        <Container id="webdev">
          <Row className="justify-content-center">
            <Col className="text-center">
              <h1 className="title font-bold">BONDS</h1>
              <h6 className="subtitle">
                Mint your bond here...
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
      <Row>
        <Col className="text-center">

            <h4 className="card-title"><a className="btn btn-outline-light m-r-20 btn-md m-t-30" href="#" target="_blank" rel="noreferrer">Mint</a></h4>
            <h6 className="card-subtitle m-t-15 ">Wait for confirmation...</h6>
            <Image
              width={350}
              height={230}
              src={img2}
              alt="img"
              className="img-responsive img-rounded"
            />
            </Col>
            </Row>
      </Container>
    </div>
  );
};

export default Websites;
