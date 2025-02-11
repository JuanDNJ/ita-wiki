import { FC } from "react";
import node from "../../assets/svg/logo-node 1.svg";
import react from "../../assets/svg/react.svg";
import angular from "../../assets/svg/angular.svg";
import javascript from "../../assets/svg/javascript.svg";
import java from "../../assets/svg/logo-java 1.svg";
import php from "../../assets/svg/logo-php 1.svg";
import dataScience from "../../assets/svg/data-science.svg";
import bbdd from "../../assets/svg/logo-bbdd 1.svg";
import { useGlobalCtx } from "../../hooks/useGlobalCtx";
import close from "../../assets/svg/close.svg";

// import navigationCSS from './css/navigation.module.css'

export const Navigation: FC = () => {

  const { isOpenMainMenu, isTablet, toggleMainMenu } = useGlobalCtx()

  return <nav>
    {isTablet ?
      (
        <div className={`fixed top-0 z-50 w-full h-full bg-white  transition-all duration-300 ${isOpenMainMenu && isTablet ? 'left-0 ' : '-left-[100vw] '}`}>
          <button onClick={toggleMainMenu} className="open__menu p-8" type="button">
            <img src={close} alt="close" width={29} height={19.36} />
          </button>
          <ul className="flex flex-col gap-6 w-full py-8 px-20 text-2xl">

            <li className="inline-flex gap-2">
              <i><img src={node} alt="Node" width={29} height={19.36} /></i>
              <span>Node</span>
            </li>
            <li className="inline-flex gap-2">
              <i><img src={react} alt="React" width={29} height={19.36} /></i>
              <span>React</span>
            </li>
            <li className="inline-flex gap-2">
              <i><img src={angular} alt="Angular" width={29} height={19.36} /></i>
              <span>Angular</span>
            </li>
            <li className="inline-flex gap-2">
              <i><img src={javascript} alt="Javascript" width={29} height={19.36} /></i>
              <span>Javascript</span>
            </li>
            <li className="inline-flex gap-2">
              <i><img src={java} alt="Java" width={29} height={19.36} /></i>
              <span>Java</span>
            </li>
            <li className="inline-flex gap-2">
              <i><img src={php} alt="Fullstack PHP" width={29} height={19.36} /></i>
              <span>Fullstack PHP</span>
            </li>
            <li className="inline-flex gap-2">
              <i><img src={dataScience} alt="Data Science" width={29} height={19.36} /></i>
              <span>Data Science</span>
            </li>
            <li className="inline-flex gap-2">
              <i><img src={bbdd} alt="BBDD" width={29} height={19.36} /></i>
              <span>BBDD</span>
            </li>

          </ul>
        </div>
      ) :
      <ul className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-56 min-h-96 justify-around">
          <li className="inline-flex gap-2">
            <i><img src={node} alt="Node" width={29} height={19.36} /></i>
            <span>Node</span>
          </li>
          <li className="inline-flex gap-2">
            <i><img src={react} alt="React" width={29} height={19.36} /></i>
            <span>React</span>
          </li>
          <li className="inline-flex gap-2">
            <i><img src={angular} alt="Angular" width={29} height={19.36} /></i>
            <span>Angular</span>
          </li>
          <li className="inline-flex gap-2">
            <i><img src={javascript} alt="Javascript" width={29} height={19.36} /></i>
            <span>Javascript</span>
          </li>
          <li className="inline-flex gap-2">
            <i><img src={java} alt="Java" width={29} height={19.36} /></i>
            <span>Java</span>
          </li>
          <li className="inline-flex gap-2">
            <i><img src={php} alt="Fullstack PHP" width={29} height={19.36} /></i>
            <span>Fullstack PHP</span>
          </li>
          <li className="inline-flex gap-2">
            <i><img src={dataScience} alt="Data Science" width={29} height={19.36} /></i>
            <span>Data Science</span>
          </li>
          <li className="inline-flex gap-2">
            <i><img src={bbdd} alt="BBDD" width={29} height={19.36} /></i>
            <span>BBDD</span>
          </li>
        </div>
      </ul>}
  </nav>
}

