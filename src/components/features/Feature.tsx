import { FC, ReactNode } from "react"

interface Props {
  children?: ReactNode
}

export const Feature: FC<Props> = ({ children }) => {
  return (
    <article className="bg-[#f0f0f0] h-full max-h-96 flex flex-col items-center rounded-xl gap-8 ">
      {children}
    </article>
  )
}