import { FC, ReactNode } from "react";
import { Ctx, GlobalCtx } from ".";
import { useMainMenu } from "../hooks/useMainMenu";
import { useMobile } from "../hooks/useMobile";

interface Props {
  children?: ReactNode,
}

const GLobalCtx: FC<Props> = ({ children }) => {

  const value = {
    ...useMainMenu(),
    ...useMobile()
  } as GlobalCtx

  return <Ctx.Provider value={value}>
    {children}
  </Ctx.Provider>
}

export default GLobalCtx