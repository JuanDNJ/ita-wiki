import { FC } from "react";
import GItHubLogin from "../github-login/GItHubLogin";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth, gitHubProvider } from "../../api/firebase";
import { useAppSelector } from "../../store/store";
export const Welcome: FC = () => {

  const { user } = useAppSelector(state => state.user)
  const handlerClick = () => {

    signInWithPopup(auth, gitHubProvider).then((result) => {
      console.log(result)
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;

      // The signed-in user info.
      const userGit = result.user;
      console.log(token, userGit)
      localStorage.setItem("auth", JSON.stringify(result))
      location.reload()
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log({ errorCode, errorMessage, email, credential })
      // ...
    });
  }
  return user && !user.auth && (
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