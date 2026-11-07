export interface MiniCalendarProps {
  /** Initial visible month, "YYYY-MM" or ISO date */
  month?: string;
  /** Selected date "YYYY-MM-DD" */
  value?: string;
  onChange?: (date: string) => void;
  /** Today "YYYY-MM-DD" — gets a marigold dot */
  today?: string;
  /** 0=Sun … 6=Sat, rendered disabled + struck through */
  closedWeekdays?: number[];
  minDate?: string;
  /** Dates with appointments — teal dot */
  markedDates?: string[];
}
export declare function MiniCalendar(props: MiniCalendarProps): JSX.Element;