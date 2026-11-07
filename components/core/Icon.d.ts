export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "calendar-check") */
  name: string;
  size?: number;
  color?: string;
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;