import React, { JSX } from 'react';
import { StackScreenName } from "../enums/StackScreenName";

export interface Route {
  icon: string;
  label: string;
  route: StackScreenName;
  component: React.NamedExoticComponent | (() => JSX.Element);
}
