import { MouseEventHandler } from "react"

export type ButtonProps = {
  text: string;
  href?: string;
  onClick?: MouseEventHandler | (() => void) | undefined;
}
