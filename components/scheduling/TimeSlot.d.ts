export interface TimeSlotProps {
  /** "HH:mm" 24h */
  time: string;
  selected?: boolean;
  disabled?: boolean;
  /** Small line under the time, e.g. "เหลือ 1 ที่" */
  note?: string;
  onClick?: () => void;
}
export declare function TimeSlot(props: TimeSlotProps): JSX.Element;