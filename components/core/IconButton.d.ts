export interface IconButtonProps {
  /** Lucide icon name */
  icon: string;
  /** Accessible label (also tooltip) */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'secondary';
  active?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;