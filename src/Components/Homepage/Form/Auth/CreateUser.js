import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"



export default function CreateUser(email, pass, setErro) { 

  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email, pass)
    .then( user => {

      setErro('')

      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

    })
    .catch( error => {

      console.log(error.code)


      switch (error.code) {
        case "auth/invalid-email":
          setErro('E-mail invalido')
          break
        case "auth/weak-password":
          setErro('Senha fraca demais')
          break
        case "auth/email-already-in-use":
          setErro('Usuario ja cadastrado')
          break
        default:
          setErro('Erro nao classificado')
          break
      }
        
    })
}
