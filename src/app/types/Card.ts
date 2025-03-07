import { BadgeProps } from "./Badge";

export type CardProps = {
  items?: string[];
  note?: string;
  subtitle?: string;
  title: string;
  upperNote?: string;
  badges?: BadgeProps[];
}
