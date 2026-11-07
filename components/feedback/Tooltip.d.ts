export interface TooltipProps {
  label: string;
  children: React.ReactNode;
  placement?: 'top' | 'bottom';
  /** Force open (previews) */
  open?: boolean;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;