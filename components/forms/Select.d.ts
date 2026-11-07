export interface SelectOption { value: string; label: string; }
export interface SelectProps {
  label?: string;
  options: (string | SelectOption)[];
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Lucide icon name */
  iconLeft?: string;
  disabled?: boolean;
  id?: string;
}
export declare function Select(props: SelectProps): JSX.Element;