import { FC } from "react";
import layoutCSS from "./css/layout.module.css"
import menu from "../assets/svg/Vector-7.svg";
import logo from "../assets/svg/logo_ita_wiki.svg";
import { useGlobalCtx } from "../hooks/useGlobalCtx";
import { useAppDispatch, useAppSelector } from "../store/store";
import { logout } from "../store/slices/useSlice";
export const MainHeader: FC = () => {
  const { toggleMainMenu, isTablet } = useGlobalCtx()
  const { user } = useAppSelector(state => state.user)

  const dispacth = useAppDispatch()
  return (
    <header className={`${layoutCSS.header} py-4 px-8 flex justify-between border-b-2 border-stone-100 md:border-none`}>
      {isTablet ? <button onClick={toggleMainMenu} className="cursor-pointer" type="button">
        <img src={menu} alt="menu" width={29} height={19.36} />
      </button> :
        <a href="/">
          <img src={logo} alt="menu" width={128} height={19.36} />
        </a>}


      {user.auth && <div className="flex items-center gap-4 bg-blue-300 py-1 px-2 rounded-md">
        <div className="flex items-center gap-4">
          <img src={user.auth.user.photoURL} alt="" width={32} height={32} className="rounded-full" />
          <h1 className="hidden md:block text-white md:text-xl">{user.auth.user.displayName}</h1>
        </div>
        <button onClick={() => dispacth(logout())} type="button" className="bg-white px-4 rounded-sm active:bg-red-800">
          Logout
        </button>
      </div>}

      <select className='w-20 px-2 '>
        <option>ES</option>
        <option>EN</option>
      </select>

    </header>
  )
}