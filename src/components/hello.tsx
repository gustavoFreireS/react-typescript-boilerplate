import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => (
  <h1>Hello from gustavo Freire {props.compiler} and {props.framework}!</h1>
);