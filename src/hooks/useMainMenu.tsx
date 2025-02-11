import { useState } from "react";

export const useMainMenu = () => {
  const [isOpenMainMenu, setIsOpenMainMenu] = useState<boolean>();
  const toggleMainMenu = () => {
    setIsOpenMainMenu(state => !state)
  }
  const openMainMenu = () => {
    setIsOpenMainMenu(() => true)
  }
  const closeMainMenu = () => {
    setIsOpenMainMenu(() => false)
  }
  return { isOpenMainMenu, toggleMainMenu, openMainMenu, closeMainMenu }
}