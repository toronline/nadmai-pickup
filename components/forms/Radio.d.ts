export interface RadioOption { value: string; label: string; description?: string; }
export interface RadioProps {
  name?: string;
  options: (string | RadioOption)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: 'row' | 'column';
}
export declare function Radio(props: RadioProps): JSX.Element;