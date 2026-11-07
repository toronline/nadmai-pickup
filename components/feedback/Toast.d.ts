export interface ToastProps {
  tone?: 'success' | 'info' | 'warning' | 'danger' | 'sync';
  title: string;
  description?: string;
  /** Action label, e.g. "เลิกทำ" */
  action?: string;
  onAction?: () => void;
  onClose?: () => void;
}
export declare function Toast(props: ToastProps): JSX.Element;