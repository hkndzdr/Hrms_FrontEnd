import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      
      <Menu inverted icon="labeled" vertical color="grey">

      <Menu.Item as={NavLink} to="/staffs" name="user">
          <Icon name="user doctor" />
          Hrms Personelleri
        </Menu.Item>

        <Menu.Item as={NavLink} to="/employers" name="user">
          <Icon name="user secret" />
          İşverenler
        </Menu.Item>

        <Menu.Item as={NavLink} to="/jobSeekers" name="user">
          <Icon name="user circle" />
          İş Arayanlar
        </Menu.Item>

        

        <Menu.Item as={NavLink} to="/jobAdverts" name="bullhorn">
          <Icon name="bullhorn" />
          İş İlanları
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          to="/jobPositions"
          name="list alternate outline"
        >
          <Icon name="list alternate outline" />
          İş Pozisyonları
        </Menu.Item>
      </Menu>
    </div>
  );
}
