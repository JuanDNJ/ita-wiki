import { FC } from "react";
import folder from "../../assets/svg/new-folder-dynamic-color.svg";
import puzzle from "../../assets/svg/puzzle-dynamic-color.svg";
import ok from "../../assets/svg/thumb-up-dynamic-color.svg";
import { Feature } from "./Feature";
// import { useGlobalCtx } from "../../hooks/useGlobalCtx";

export const Features: FC = () => {
  // const { isTablet } = useGlobalCtx()
  return (


    <section className="flex flex-col w-full max-w-7xl m-auto">
      <h2 className="text-center text-2xl py-8 p-8">Funcionalidades básicas que te ofrece esta plataforma:</h2>
      <article className="gap-8 p-8" style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',

      }}>
        <Feature>
          <span className="inline-flex w-full bg-[#f0f0f0]">
            <i className="bg-white p-2 text-stone-500  font-extrabold rounded-bl-none rounded-br-lg">
              /&nbsp;1
            </i>
          </span>
          <img src={folder} alt="folder" width={100} height={100} />
          <h3 className="font-bold text-xl lg:text-2xl text-center px-4">Guarda tus recursos favoritos</h3>
          <p className="text-xl text-stone-500 text-center p-4">Ten tus recursos bien organizados</p>
        </Feature>
        <Feature>
          <span className="inline-flex w-full bg-[#f0f0f0]">
            <i className="bg-white p-2 text-stone-500  font-extrabold rounded-bl-none rounded-br-lg">
              /&nbsp;2
            </i>
          </span>
          <img src={puzzle} alt="puzzle" width={100} height={100} />
          <h3 className="font-bold text-xl lg:text-2xl text-center px-4">Colabora con tus compañer@s</h3>
          <p className="text-xl text-stone-500 text-center p-4">Recursos compartidos</p>
        </Feature>
        <Feature>
          <span className="inline-flex w-full bg-[#f0f0f0]">
            <i className="bg-white p-2 text-stone-500  font-extrabold rounded-bl-none rounded-br-lg">
              /&nbsp;3
            </i>
          </span>
          <img src={ok} alt="ok" width={100} height={100} />
          <h3 className="font-bold text-xl lg:text-2xl text-center px-4">Vota los recursos</h3>
          <p className="text-xl text-stone-500 text-center p-4">La comunidad decide cuáles son más relevantes</p>
        </Feature>
      </article>
    </section>

  )
}