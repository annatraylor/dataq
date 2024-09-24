import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
import Image from "next/image";


const About = (props) => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const toggle1 = () => {
    setModal1(!modal1);
  };

  const toggle2 = () => {
    setModal2(!modal2);
  };

  return (
      <div className="spacer" id="about">
      <Container>
        <Row>
          <Col className="text-center">
          <h1 className="title font-bold">ABOUT</h1>
          <h6 className="subtitle">
                Hey there! We are a team of professionals in a new evolving cryptospace. Get to know each of us here. <br/><br/>
          </h6>
              <a
              type="button"
              onClick={toggle.bind(null)}
              className="btn btn-outline-light m-1"
            >
              CRYPTO BONDS
            </a>
            <Modal
              size="lg"
              isOpen={modal}
              toggle={toggle.bind(null)}
              className={props.className}
            >
              <ModalHeader className="bg-black" toggle={toggle.bind(null)}>Technical Writing</ModalHeader>
              <ModalBody className="bg-black text-white">
              Here on the website you can find wallet connection and bond minting page. But you can always educate yourself with our news feed on Twitter.
              </ModalBody>
              <ModalFooter className="bg-black">
                <a href="https://twitter.com/DeFiDiscovered" target="_blank" rel="noreferrer" className="btn btn-outline-light" onClick={toggle.bind(null)}>
                  Connect
                </a>
                <a className="btn btn-outline-light" onClick={toggle.bind(null)}>
                  Cancel
                </a>
              </ModalFooter>
            </Modal>
            <a
              type="button"
              onClick={toggle1.bind(null)}
              className="btn btn-outline-light m-1"
            >
              TECHNICAL SUPPORT
            </a>
            <Modal
              size="lg"
              isOpen={modal1}
              toggle={toggle.bind(null)}
              className={props.className}
            >
              <ModalHeader className="bg-black" toggle={toggle1.bind(null)}>Web Design</ModalHeader>
              <ModalBody className="bg-black text-white">
              Meet our technical support on telegram. Ask anything anywhere anytime.
              </ModalBody>
              <ModalFooter className="bg-black">
                <a href="#" target="_blank" rel="noreferrer"  className="btn btn-outline-light"  onClick={toggle1.bind(null)}>
                  Connect
                </a>
                <a className="btn btn-outline-light" onClick={toggle1.bind(null)}>
                  Cancel
                </a>
              </ModalFooter>
            </Modal>
            <a
              type="button"
              onClick={toggle2.bind(null)}
              className="btn btn-outline-light m-1"
            >
              OUR WHITEPAPER
            </a>
            <Modal
              size="lg"
              isOpen={modal2}
              toggle={toggle.bind(null)}
              className={props.className}
            >
              <ModalHeader className="bg-black" toggle={toggle2.bind(null)}>Graphic Design</ModalHeader>
              <ModalBody className="bg-black text-white">
                We want to be as sincere as we only can. Therefore, we present you our whitepaper where you can find out more about our ideas and plans.
              </ModalBody>
              <ModalFooter className="bg-black">
                <a href="/models/Keyvian-Whitepaper.pdf/" target="_blank" rel="noreferrer" className="btn btn-outline-light" onClick={toggle1.bind(null)}>
                  Connect
                </a>
                <a className="btn btn-outline-light" target="_blank" onClick={toggle2.bind(null)}>
                  Cancel
                </a>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
