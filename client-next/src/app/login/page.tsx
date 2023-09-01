// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef } from "react";

// function Login() {
//   const emailRef = useRef();
//   const errRef = useRef();

//   const [email, setEmail] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);
//   //   const navigate = useNavigate();

//   //   const [login, { isLoading, data }] = useLoginMutation();
//   //   const dispatch = useDispatch();

//   //   useEffect(() => {
//   //     emailRef.current.focus();
//   //   }, []);

//   //   useEffect(() => {
//   //     setErrMsg("");
//   //   }, [email, pwd]);

//   console.log(email, pwd);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       if (!data) {
//         const userData = await login({ email, password: pwd }).unwrap();
//         console.log(userData);
//         dispatch(setCredentials({ ...userData, email }));
//       }
//       isLoading ? console.log("still loading...") : console.log(data);

//       setEmail("");
//       setPwd("");
//       setSuccess(true);
//       navigate("/wallet");
//     } catch (err) {
//       console.log("There was an error:", err);
//       if (!err?.response) {
//         setErrMsg("No Server response");
//       } else if (err?.originalStatus?.status === 400) {
//         setErrMsg("Missing Email or password");
//       } else if (err?.originalStatus?.status === 401) {
//         setErrMsg("Unauthorized");
//       } else {
//         setErrMsg("Login Failed");
//       }
//       errRef.current.focus();
//     }
//   };

//   return (
//     <>
//       <div className="bg-[#DDE4FE]">
//         <div className="h-screen flex ">
//           <div className="bg-[#DDE4FE] flex justify-center">
//             <div className="text-center space-y-7 min-w-[450px]">
//               <div className="flex justify-center mb-20 pt-7">
//                 <Image
//                   src="assets/bytemarketLogo.png"
//                   alt=""
//                   height={40}
//                   width={140}
//                 />
//               </div>

//               <div className="flex justify-center ">
//                 <Image
//                   src="/assets/computer-image.png"
//                   width={350}
//                   height={200}
//                   alt=""
//                 />
//               </div>

//               <p className="text-bodyColor font-innerbody">Shop tech with</p>
//               <h3 className="text-mainColor font-innerbody font-semibold text-5xl">
//                 ByteMarket
//               </h3>
//               <p className="text-bodyColor font-innerbody">
//                 Your go to online store for gadgets
//               </p>
//             </div>
//           </div>

//           <div className="h-screen bg-[#DDE4FE]">
//             <div className="flex justify-center items-center h-screen w-[900px] bg-[#fff]">
//               <form
//                 className="text-bodyColor font-innerbody w-[650px] "
//                 onSubmit={handleLogin}>
//                 <div>
//                   <h3 className="font-bold text-4xl">Login</h3>
//                   <div className="flex flex-col ">
//                     <p
//                       //   ref={errRef}
//                       className={errMsg ? "errmsg" : "offscreen"}
//                       aria-live="assertive">
//                       {errMsg}
//                     </p>
//                     <label htmlFor="email">Email</label>
//                     <input
//                       className="form-input"
//                       type="email"
//                       id="email"
//                       //   ref={emailRef}
//                       //   autoComplete="off"
//                       //   onChange={(e) => setEmail(e.target.value)}
//                       //   value={email}
//                       required
//                     />

//                     <label htmlFor="password">Password</label>
//                     <input
//                       className="form-input"
//                       type="password"
//                       id="password"
//                       //   onChange={(e) => setPwd(e.target.value)}
//                       value={pwd}
//                       required
//                     />

//                     <button className="rounded-xl w-[600px] bg-mainColor text-[#fff] h-10 mt-2">
//                       Login
//                     </button>
//                     <p className="text-[#B8B8B8]">
//                       Dont have an account?
//                       <span className="font-bold text-bodyColor">
//                         <Link href="/register">Register</Link>
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
