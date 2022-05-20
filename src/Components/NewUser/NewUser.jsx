import { 
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const NewUser = () => {

  const auth = getAuth()
  const currentUser = auth.currentUser

  console.log(currentUser)

  

  updateProfile( currentUser, {
    displayName: "userName",
    photoURL: 'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg',
  })

  currentUser.phoneNumber = "+5545998119312"
  
  return (
    <>
      <h1>New User</h1>
    
      
    </>
  )
}

export default NewUser;