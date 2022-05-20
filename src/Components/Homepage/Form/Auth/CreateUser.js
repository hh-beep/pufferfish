import { 
  getAuth, 
  createUserWithEmailAndPassword, 
} from "firebase/auth"



export default function CreateUser( e, email, pass, setErro) { 

  e.preventDefault();

  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email, pass)
    .then( () => {
      setErro('')

      window.location.hash = '#/NewUser';
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

