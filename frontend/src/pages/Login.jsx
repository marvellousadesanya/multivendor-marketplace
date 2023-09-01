import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/byteMarketLogo.png";
import registerPic from "../images/registerPic.png";
import axios from "../api/axios";
import LeftSidebar from "../components/LeftSidebar";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  console.log(email, pwd);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, password: pwd, roles, accessToken });
      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server response");
      } else if (err?.response?.status === 400) {
        setErrMsg("Missing Email or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <div className="h-full bg-[#DDE4FE]">
          <div className="flex ">
            <LeftSidebar />

            <div className="h-screen bg-[#DDE4FE]">
              <div className="flex justify-center items-center h-screen w-[900px] bg-[#fff]">
                <form
                  className="text-[#00304] font-innerbody w-[650px] "
                  onSubmit={handleLogin}
                >
                  <div>
                    <h3 className="font-bold text-4xl">Login</h3>
                    <div className="flex flex-col ">
                      <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                      >
                        {errMsg}
                      </p>
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />

                      <label htmlFor="password">Password</label>
                      <input
                        className="form-input"
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                      />

                      <button className="rounded-xl w-[600px] bg-[#F77F00] text-[#fff] h-10 mt-2">
                        Login
                      </button>
                      <p className="text-[#B8B8B8]">
                        Don't have an account?
                        <span className="font-bold text-[#00304]">
                          <Link to="/register">Register</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
