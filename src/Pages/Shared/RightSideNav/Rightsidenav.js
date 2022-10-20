import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGooglePlus,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Rightsidenav = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider).then((result) => {
      const user = result.user;
    });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGooglePlus></FaGooglePlus> Login With Google
        </Button>
        <Button className="mb-2" variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook>Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaWhatsapp></FaWhatsapp>
            Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default Rightsidenav;
