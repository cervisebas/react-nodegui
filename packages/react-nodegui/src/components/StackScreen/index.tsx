import React from "react";
import { StackedItem } from "../StackedItem";

export interface StackScreenProps {
  name: string;
  style?: string;
  children?: React.ReactNode;
}

export function StackScreen(props: StackScreenProps) {
  return (
    <StackedItem
      name={props.name}
      style={props.style}
    >
      {props.children}
    </StackedItem>
  );
}