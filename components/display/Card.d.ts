export interface CardProps {
  children?: React.ReactNode;
  /** px, default 20 */
  padding?: number | string;
  elevated?: boolean;
  /** Hover border + shadow lift */
  interactive?: boolean;
  /** Teal 2px-equivalent ring */
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;