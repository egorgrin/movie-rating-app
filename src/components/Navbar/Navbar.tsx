import s from './Navbar.module.css'

import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
      <Menu fixed={"top"} size={"huge"}>
        <Menu.Item className={s.link} as={Link} to={"/"}> Home </Menu.Item>
        <Menu.Item className={s.link} as={Link} to={"/rated"}> Rated </Menu.Item>

        <Menu.Menu position={"right"}>
          <Menu.Item className={s.link} as={Link} to={"/auth"}> Auth </Menu.Item>
        </Menu.Menu>
      </Menu>
  );
};