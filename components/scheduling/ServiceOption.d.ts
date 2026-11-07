export interface ServiceOptionProps {
  title: string;
  description?: string;
  /** e.g. "45 นาที" */
  duration?: string;
  /** e.g. "฿450" */
  price?: string;
  /** Category colour, var(--event-*) */
  color?: string;
  selected?: boolean;
  onClick?: () => void;
}
export declare function ServiceOption(props: ServiceOptionProps): JSX.Element;