import { FC, ReactNode } from "react"
import { createPortal } from "react-dom"

interface Props {
  children?: ReactNode
}

export const Modal: FC<Props> = ({ children }) => {
  return createPortal(children, document.body)
}