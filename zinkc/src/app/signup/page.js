'use client'

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase_details"
import { useAppContext } from "../AppContext"

export default function signup(){

    const { email, password } = useAppContext()
    const [emailVal, setEmail] = email
    const [passwordVal, setPassword] = password

    const registerWithEmailAndPassword = async (email, password) => {
        try{
            const res = createUserWithEmailAndPassword(auth, email, password);
            console.log(res);
        }
        catch (err){
            console.log(err);
        }
        setEmail("")
        setPassword("")
    }
    return (
        <>  
            <br></br>
            <br></br>
            <div className="flex flex-row justify-center text-center">
                <div className="flex flex-col min-w-3/12 m-3 p-2 rounded-lg text-black gap-3 border-2 w-96 min-w-fit">
                    <div className="flex flex-row justify-center"><p className="font-bold text-5xl">Sign Up</p></div>
                    <br></br>
                    <div className="flex flex-row justify-start"><p className="text-sm">Email address</p></div>
                    <input onChange={(res) => setEmail(res.target.value)} className="border-2 border-slate-300 rounded-lg"></input>
                    <div className="flex flex-row justify-start"><p className="text-sm">Password</p></div>
                    <input onChange={(res) => setPassword(res.target.value)} className="border-2 border-slate-300 rounded-lg"></input>
                    <button onClick={() => registerWithEmailAndPassword(emailVal, passwordVal)} className="rounded-lg bg-theme-cl-1 hover:bg-theme-cl-2 p-2">Sign Up</button>
                    <div className="flex flex-row justify-center flex-wrap"><p className="mr-1">Already a member?</p><a className="text-blue-700" href="/signin">Sign In</a></div>
                </div>
            </div>
        </>
    )
}