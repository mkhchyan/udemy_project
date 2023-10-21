import { Menu } from "antd";
import Link from "next/link";
import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Item } = Menu; //Menu.Item

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Item icon={<HomeOutlined />}>
        <Link href="/" className="text-lg" prefetch={false}>
          Home
        </Link>
      </Item>
      <Item icon={<LoginOutlined />}>
        <Link href="/login" className="text-lg" prefetch={false}>
          Login
        </Link>
      </Item>

      <Item icon={<UserAddOutlined />}>
        <Link href="/register" className="text-lg" prefetch={false}>
          Register
        </Link>
      </Item>
    </Menu>
  );
};

export default Navbar;
