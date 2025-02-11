import { FC } from "react";
import layoutCSS from "./css/layout.module.css"
import menu from "../assets/svg/Vector-7.svg";
import logo from "../assets/svg/logo_ita_wiki.svg";
import { useGlobalCtx } from "../hooks/useGlobalCtx";
export const MainHeader: FC = () => {
  const { toggleMainMenu, isTablet } = useGlobalCtx()
  return (
    <header className={`${layoutCSS.header} p-8 flex justify-between border-b-2 border-stone-100 md:border-none`}>
      {isTablet ? <button onClick={toggleMainMenu} className="cursor-pointer" type="button">
        <img src={menu} alt="menu" width={29} height={19.36} />
      </button> :
        <a href="/">
          <img src={logo} alt="menu" width={128} height={19.36} />
        </a>}
      <select className='w-20 px-2 '>
        <option>ES</option>
        <option>EN</option>
      </select>
    </header>
  )
}