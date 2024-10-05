"use client";

import { Menu } from 'antd';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <Menu mode="horizontal" theme="dark" className="flex">
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="exoplanets">
          <Link href="/Allplanets">Exoplanets</Link>
        </Menu.Item>
        {/* <Menu.Item key="chatbot">
          <Link href="/chatbot">Chatbot</Link>
        </Menu.Item> */}
        <Menu.Item key="about">
          <Link href="/About">About</Link>
        </Menu.Item>
        <Menu.Item key="about">
        
        </Menu.Item>
        
      </Menu>
    </nav>
  );
};

export default Navbar;
