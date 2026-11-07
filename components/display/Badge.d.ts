export interface BadgeProps {
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'accent';
  dot?: boolean;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;