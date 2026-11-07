export interface TagProps {
  children?: React.ReactNode;
  /** Category colour swatch, e.g. var(--event-rose) */
  color?: string;
  /** Lucide icon name */
  icon?: string;
  onRemove?: () => void;
}
export declare function Tag(props: TagProps): JSX.Element;