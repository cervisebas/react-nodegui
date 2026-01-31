import React from "react";
import { StackedItem } from "../StackedItem";
import { StackedItemProps } from "../StackedItem/interfaces/StackedItemProps";

export interface StackScreenProps extends StackedItemProps {
  name: string;
  children?: React.ReactNode;
}

export function StackScreen(props: StackScreenProps) {
  return (
    <StackedItem
      {...props}
      name={props.name}
    >
      {props.children}
    </StackedItem>
  );
}