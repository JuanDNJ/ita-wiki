import { FC, ReactNode } from "react";
import layoutCSS from "./css/layout.module.css"
export const Aside: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <aside className={`${layoutCSS.aside} p-8`} >
      {children}
    </aside>
  )
}