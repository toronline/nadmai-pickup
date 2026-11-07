export interface AppointmentCardProps {
  service: string;
  /** Short date, e.g. "ศ. 14 พ.ย." */
  dateLabel: string;
  /** "HH:mm" */
  time: string;
  customer?: string;
  staff?: string;
  location?: string;
  status?: 'confirmed' | 'pending' | 'ready' | 'cancelled' | 'completed';
  /** Override the default Thai status label (e.g. "รอเตรียม", "รับแล้ว") */
  statusLabel?: string;
  /** Lucide icon for the staff/shop row, default "user-round" */
  staffIcon?: string;
  /** Whether the event exists in Google Calendar */
  synced?: boolean;
  color?: string;
  compact?: boolean;
  actions?: React.ReactNode;
  onClick?: () => void;
}
export declare function AppointmentCard(props: AppointmentCardProps): JSX.Element;