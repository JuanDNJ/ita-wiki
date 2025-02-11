import { useContext } from "react";
import { Ctx } from "../context";

export const useGlobalCtx = () => {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("Contexto no definido")
  return ctx
}