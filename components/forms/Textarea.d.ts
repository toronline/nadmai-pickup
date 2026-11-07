export interface TextareaProps {
  label?: string;
  hint?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  rows?: number;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export declare function Textarea(props: TextareaProps): JSX.Element;