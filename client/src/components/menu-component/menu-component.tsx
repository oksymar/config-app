import React from "react";
import { Menu } from "semantic-ui-react";

type PropsType = {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
};

export const MenuComponent: React.FC<PropsType> = props => {
  const handleItemClick = (e: React.MouseEvent, { name }: any) =>
    props.setActiveItem(name);

  return (
    <Menu fluid widths={3}>
      <Menu.Item
        name="device1"
        active={props.activeItem === "device1"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="device2"
        active={props.activeItem === "device2"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="device3"
        active={props.activeItem === "device3"}
        onClick={handleItemClick}
      />
    </Menu>
  );
};
