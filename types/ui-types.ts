export type T_menuPaths = { label: string; path: string }[];
export type T_menuPosition = { x: number; y: number };

export interface I_submenuProps {
  paths: T_menuPaths;
  position: T_menuPosition;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
