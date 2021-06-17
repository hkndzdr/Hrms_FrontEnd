import React, { useState } from "react";
import { Icon, Menu, Container } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top" size="large" color="grey">
        <Container>
          <Menu.Item as={NavLink} to="/" name="Hrms">
            <Icon name="user md" size="large" />
            İnsan Kaynakları Yönetim Sistemi
          </Menu.Item>

          <Menu.Item
            position="right"
            as={NavLink}
            to="/jobAdvertPost"
            name="user plus"
          >
            <Icon name="user plus" /> İş İlanı Ekle
          </Menu.Item>

          <Menu.Item
            position=""
            as={NavLink}
            to="/jobAdvertConfirm"
            name="clipboard check"
          >
            <Icon name="clipboard check" /> İş İlanı Talepleri
          </Menu.Item>

          <Menu.Menu position="right">
            {isAuthenticated?<SignedIn signOut={handleSignOut}/>
            :<SignedOut signIn={handleSignIn}/>}  
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
