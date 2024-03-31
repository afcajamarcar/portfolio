import { MouseEventHandler } from "react"

export type ButtonProps = {
  text: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | '_unfencedTop';
  onClick?: MouseEventHandler | (() => void) | undefined;
}
