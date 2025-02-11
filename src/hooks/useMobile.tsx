import { useEffect, useState } from "react"

export const useMobile = () => {
  const [isTablet, setTablet] = useState<boolean>(window.innerWidth < 896)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768)

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth < 768)
      setTablet(window.innerWidth < 980)
    }
    window.addEventListener("resize", () => resize())
    return window.removeEventListener("resize", () => resize())
  }, [isMobile, isTablet])
  return { isMobile, isTablet, setIsMobile, setTablet }
}