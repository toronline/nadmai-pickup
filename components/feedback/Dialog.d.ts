export interface DialogProps {
  open?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  /** Buttons, right-aligned */
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  /** Render without fixed overlay (for previews) */
  inline?: boolean;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;