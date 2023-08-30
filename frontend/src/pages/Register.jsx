import { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../images/byteMarketLogo.png";
import registerPic from "../images/registerPic.png";
import axios from "../api/axios";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_REGEX = /^[A-Za-z\s-]{4,24}$/;
const PWD_REGEX = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const [color, setColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    lastNameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = NAME_REGEX.test(lastName);
    setValidLastName(result);
  }, [lastName]);

  useEffect(() => {
    const result = NAME_REGEX.test(lastName);
    setValidName(result);
  }, [lastName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    // console.log(result);
    // console.log(email);
    setValidEmail(result);
  }, [email]);

  // useEffect(() => {
  //   const result = PWD_REGEX.test(pwd);
  //   setValidPwd(result);
  //   console.log(result);
  //   console.log(pwd);
  //   const match = setValidMatch(pwd === matchPwd);
  //   setValidMatch(match);
  //   console.log(match);
  // }, [pwd, matchPwd]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

  const accountTypeHandler = () => {
    setColor("bg-[#003049]");
    setSecondColor("");
  };

  const accountTypeHandler2 = () => {
    setSecondColor("bg-[#003049]");
    setColor("");
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    // setSuccess(true);
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          firstname: name,
          lastname: lastName,
          email,
          password: pwd,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      // Clear input fields
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server response");
        console.log(err);
      } else if (err.response?.status === 409) {
        setErrMsg("This email has been registered by another user.");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h3>Signed in!</h3>
        </section>
      ) : (
        <div className=" h-full">
          <div className="flex">
            <div className="bg-[#DDE4FE]  h-screen flex justify-center">
              <div className="text-center space-y-7 w-[600px]">
                <div className="flex justify-center mb-20 pt-7">
                  <img src={logo} alt="" />
                </div>

                <div className="flex justify-center ">
                  <img src={registerPic} className="w-[350px]" alt="" />
                </div>

                <p className="text-bodyColor font-innerbody">Shop tech with</p>
                <h3 className="text-mainColor font-innerbody font-semibold text-5xl">
                  ByteMarket
                </h3>
                <p className="text-bodyColor font-innerbody">
                  Your go to online store for gadgets
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center h-screen w-[900px] bg-[#fff]">
              <form
                className="text-bodyColor font-innerbody w-[650px]"
                onSubmit={handleRegistration}
              >
                <div>
                  <p
                    ref={errRef}
                    className={errMsg ? "text-[#ff0000]" : "hidden"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <h3 className="font-bold text-4xl mb-5">Register</h3>
                  <div className="flex flex-col ">
                    <label htmlFor="firstname">
                      Firstname:
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validName ? "text-[#013220]" : "hidden"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validName || !name ? "hidden" : "text-[#ff0000]"
                        }
                      />
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      ref={nameRef}
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setNameFocus(true)}
                      onBlur={() => setNameFocus(false)}
                      className="form-input"
                    />
                    <p
                      id="uidnote"
                      className={
                        nameFocus && name && !validName
                          ? "text-[#FF0000]"
                          : "hidden"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must be 4 to 24 characters.
                      <br />
                      Numbers, underscores, hyphens NOT allowed.
                    </p>

                    <label htmlFor="lastname">
                      Lastname:
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validLastName ? "text-[#013220]" : "hidden"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validLastName || !name ? "hidden" : "text-[#ff0000]"
                        }
                      />
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      ref={lastNameRef}
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      required
                      aria-invalid={validLastName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setLastNameFocus(true)}
                      onBlur={() => setLastNameFocus(false)}
                      className="form-input"
                    />
                    <p
                      id="uidnote"
                      className={
                        lastNameFocus && lastName && !validLastName
                          ? "text-[#FF0000]"
                          : "hidden"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must be 4 to 24 characters.
                      <br />
                      Numbers, underscores, hyphens NOT allowed.
                    </p>

                    <label htmlFor="email">
                      Email:
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validEmail ? "text-[#013220]" : "hidden"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validEmail || !email ? "hidden" : "text-[#ff0000]"
                        }
                      />
                    </label>
                    <input
                      className="form-input"
                      ref={emailRef}
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                    <p
                      id="pwdnote"
                      className={
                        emailFocus && !validEmail ? "text-[#ff0000]" : "hidden"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Email invalid.
                    </p>

                    <label>
                      Password:
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validPwd ? "valid" : "hidden"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validPwd || !pwd ? "hidden" : "text-[#ff0000]"
                        }
                      />
                    </label>
                    <input
                      className="form-input"
                      type="password"
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "text-[#ff0000]" : "hidden"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters and at least
                      a number.
                      <br />
                    </p>

                    <label htmlFor="confirm_pwd">
                      Confirm Password:
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validPwd ? "valid" : "hidden"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validPwd || !pwd ? "hidden" : "text-[#ff0000]"
                        }
                      />
                    </label>
                    <input
                      className="form-input"
                      type="password"
                      id="confirm_pwd"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    />
                    <p
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch ? "text-[#ff0000]" : "hidden"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must match the first password input field.
                    </p>

                    <div className="flex rounded-xl w-[600px] border border-[#8A8A8A] h-10 mt-5">
                      <div
                        className={`hover:bg-[#003049] text-[#B8B8B8] ${color} hover:text-[#fff] text-center w-full cursor-pointer rounded-xl`}
                        onClick={accountTypeHandler}
                      >
                        Seller
                      </div>
                      <div
                        className={`hover:bg-[#003049] ${secondColor} active:bg-[#003049] text-[#B8B8B8] hover:text-[#fff] text-center w-full cursor-pointer rounded-xl`}
                        onClick={accountTypeHandler2}
                      >
                        Buyer
                      </div>
                    </div>
                    <input type="checkbox" />
                    <span className={`text-[#B8B8B8]`}>
                      I agree with the terms and conditions
                    </span>
                    <button
                      disabled={
                        !validName || !validPwd || !validMatch ? true : false
                      }
                      className={
                        "rounded-xl cursor-pointer w-[600px] bg-mainColor text-[#fff] h-10"
                      }
                      // onClick={(e) => e.preventDefault()}
                    >
                      Register
                    </button>
                    <p className="text-[#B8B8B8]">
                      Already have an account?
                      <span className="font-bold text-bodyColor">
                        <Link to="/login">Login</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
