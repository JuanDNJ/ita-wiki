import { FC, ReactNode } from "react";
import layoutCSS from "./css/layout.module.css"
export const Content: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className={`${layoutCSS.content} bg-white rounded-xl m-0 lg:mr-8 `}>
      {children}
    </section>
  )
}