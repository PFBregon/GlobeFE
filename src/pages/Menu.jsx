import React from "react";
import { MenuLayout } from "../layouts/MenuLayout";
import { MenuComponent } from "../components/MenuComponent"; 

export const Menu = () => {
  return (
    <MenuLayout>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 40 }}>
        <MenuComponent />
      </div>
    </MenuLayout>
  );
};