export interface StepperProps {
  steps: string[];
  /** 0-indexed current step */
  current?: number;
}
export declare function Stepper(props: StepperProps): JSX.Element;