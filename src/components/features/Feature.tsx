import { FC, ReactNode } from "react"

interface Props {
  children?: ReactNode
}

export const Feature: FC<Props> = ({ children }) => {
  return (
    <article className="w-[279px] h-[327px] bg-[#f0f0f0] flex flex-col gap-4 items-center rounded-xl">
      {children}
    </article>
  )
}