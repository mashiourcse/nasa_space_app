"use client";

import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const RightSideBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} style={{ position: 'fixed', right: 10, top: 10, }}>
        Chatbot
      </Button>
      <Drawer
        //title="Chatbot"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={600} // Adjust width as needed
      >
      </Drawer>
    </>
  );
};

export default RightSideBar;
