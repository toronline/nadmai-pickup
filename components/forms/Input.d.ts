export interface InputProps {
  label?: string;
  hint?: string;
  /** Error message — replaces hint and turns border red */
  error?: string;
  required?: boolean;
  /** Lucide icon name */
  iconLeft?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'tel' | 'password' | 'search';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  id?: string;
}
export declare function Input(props: InputProps): JSX.Element;