import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  //two way binding  to handle inputs
  const [fullName, setfullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")

  const [error, setError] = useState("")



  const submithandler =(e) => {
   e.preventDefault()

    if (password.length<8) {
      setError('Password must be 8 characters long')
      return;
    }
   if (password !== confirmpassword){
    setError('Password and confirm password must be same ')
   }
   if (!/[!@#$%^&*()]/.test(password)) {                         //ragex
    setError('Password must contain the special character')
    return;
   }
   if (!/[!A-Z]/.test(password)) {                              //ragex
    setError('Password must contain the Capital letter')
    return;
   }

    // console.log(fullName,email,password,confirmpassword)
    setError('')
    setfullName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    

    toast.success('Login Succesful!', {            //https://fkhadra.github.io/react-toastify/introduction         
      position: "top-right",                       //React toastify
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        
        <form onSubmit={(e)=>{ 
          submithandler(e)

        }} className="flex flex-col gap-4">
          <input className="w-full border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" 
          required
          placeholder="Enter Name here" value={fullName} 
          onChange={(e)=>{
            setfullName(e.target.value)
          }}/>
          <input className="w-full border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" 
           required
          placeholder="Enter Your Email"value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }} />
          <input className="w-full border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" 
           required
          placeholder="enter Password"value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }} /> 
          <input className="w-full border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" 
           required
          placeholder="confirm Password" value={confirmpassword}
          onChange={(e)=>{
            setConfirmPassword(e.target.value)
          }} />

          {error && (
            <p className='text-red-600 text-base font-medium text-center'>{error}</p>
          )}


          <button className="text-white bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2 rounded mt-3 transition">Submit</button>
        </form>
        <p className="text-xs text-center text-gray-600 mt-4">
          By registering, you agree to our <a href="#" className="text-blue-600 underline">Terms & Conditions</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
        </p>

      </div>
            <div>
              <ToastContainer>

              </ToastContainer>
            </div>
    </div>
  )
}

export default App