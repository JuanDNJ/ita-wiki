import { FC, ReactNode } from "react"
import layoutCSS from "./css/layout.module.css"
export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className={`${layoutCSS.main}`} >
      {children}
    </main>
  )
}