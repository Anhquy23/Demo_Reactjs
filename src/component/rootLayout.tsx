import React from "react";
import { Outlet } from "react-router-dom"

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <div>
      <header>header</header>
        <Outlet/>
      <footer>footer</footer>
    </div>
  );
};

export default RootLayout;
