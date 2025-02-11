import { FC } from "react";
import GItHubLogin from "../github-login/GItHubLogin";

export const Welcome: FC = () => {
  const handlerClick = () => { }
  return (
    <article className="lg:min-h-full flex flex-col  justify-center py-4 px-8 gap-2 md:w-2xl md:m-auto lg:py-20">
      <h1 className='text-4xl md:text-5xl font-extrabold text-center'>¡Bienvenid@ a la wiki de la IT Academy!</h1>
      <p className="p-4 text-center text-xl">Registrate o haz login para poder subir y votar recursos</p>
      <div className="flex flex-col p-4 gap-4 items-center">
        <GItHubLogin onClick={handlerClick} />
        <label className="inline-flex items-center gap-4 justify-center" htmlFor="terms">
          <input name="terms" type="checkbox" /> <span className="italic font-medium">Acepto <a className="underline hover:text-[skyblue]" href="#">términos legales</a></span>
        </label>
      </div>
    </article>
  )
}