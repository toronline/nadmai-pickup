export interface AvatarProps {
  name?: string;
  src?: string;
  size?: number;
  /** Background for initials */
  color?: string;
  ink?: string;
}
export declare function Avatar(props: AvatarProps): JSX.Element;