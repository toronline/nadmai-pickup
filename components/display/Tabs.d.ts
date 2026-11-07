export interface TabItem { value: string; label: string; count?: number; }
export interface TabsProps {
  items: (string | TabItem)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** underline for page sections; segmented for view toggles (วัน/สัปดาห์/เดือน) */
  variant?: 'underline' | 'segmented';
}
export declare function Tabs(props: TabsProps): JSX.Element;