export interface CalendarSyncProps {
  status?: 'connected' | 'syncing' | 'error' | 'disconnected';
  /** Google account email */
  account?: string;
  calendarName?: string;
  /** e.g. "ซิงก์ล่าสุด 2 นาทีที่แล้ว" */
  lastSync?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
}
export declare function CalendarSync(props: CalendarSyncProps): JSX.Element;