import React from "react";
import ItemListWithIcon from "../../atoms/itemListWithIcon/itemListWIthIcon";

function ixonList() {
  return (
    <List>
      {props.children.map((li, index) => {
        <ItemListWithIcon text={li.text} index={index} />;
      })}
    </List>
  );
}

export default ixonList;
