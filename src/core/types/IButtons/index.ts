import { MouseEventHandler } from "react";

export interface IButtons {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}