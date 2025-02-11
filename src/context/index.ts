import { createContext } from "react";

export interface GlobalCtx {
  isOpenMainMenu: boolean,
  isMobile: boolean,
  isTablet: boolean,
  setTablet: () => void,
  setIsMobile: () => void
  toggleMainMenu: () => void,
  openMainMenu: () => void,
  closeMainMenu: () => void
}

export const Ctx = createContext<GlobalCtx | null>(null);