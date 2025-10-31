
import React, {useState} from "react";
import "./FormComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import { SocialLoginData } from "../../Data/SocialLoginData";
import { Link, useNavigate } from "react-router-dom";
import IconGradient from "../IconGradient/IconGradient";
import image from "../../assets/imgs/AbstractDesign4.png";
import emailjs from 'emailjs-com';

export default function FormComponent({ action }) {

  const navigate = useNavigate();
  const title = action === "login" ? "Login" : "Sign Up";
  const desc =
    action === "login"
      ? "Welcome back! Please log in to access your account."
      : "Join our community today! Create an account to unlock exclusive features and personalized experiences.";

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [messages, setMessages] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const regexMap = {
    //name regex
    //At least a letter after the first letter
    firstName: /^[a-zA-Z]([a-zA-Z]{1,39})+$/,
    lastName: /^[a-zA-Z]([a-zA-Z]{1,39})+$/,
    // email regex
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    // password regexthe
    // password is 8 or more characters long ((?=.{8,})),
    // password has at least one lowercase letter ((?=.*[a-z])) and contains at least one digit ((?=.*[0-9])).
    password: /(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
  };

  const [passwordVisibility, setPasswordVisibility] = useState({
    icon: "show",
    type: "password"
  });

  const Toast = Swal.mixin({
    showConfirmButton: false,
    timer: 4000,
    scrollbarPadding: false,
    heightAuto: false,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });

  const handleForgetPassword = (e) => {
    e.preventDefault();
    if (state.email.length > 0 && regexMap.email.test(state.email)) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((user) => user.email === state.email);
  
      if (user) {
        const baseURL = window.location.origin;
        const templateParams = {
          to_name: state.email,
          to_email: state.email,
          support_email: import.meta.env.VITE_SUPPORT_EMAIL,
          link: `${baseURL}/YourBank/#/forgetPassword/${state.email}`,
        };
  
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_USER_ID
          )
          .then(
            (result) => {
              console.log(`Email sent to ${state.email}: ${result.text}`);
              Toast.fire({
                icon: "success",
                title: "A reset link has been sent to your email.",
              });
            },
            (error) => {
              console.error(`Failed to send email to ${state.email}: ${error.text}`);
              Toast.fire({
                icon: "error",
                title: "Failed to send email. Please try again later.",
              });
            }
          );
      } else {
        Toast.fire({
          icon: "error",
          title: "The email you entered is not registered. Please try again.",
        });
      }
    } else {
      Toast.fire({
        icon: "error",
        title: "Please enter a valid email address.",
      });
    }
  };
  

  const validateInput = (id, value) => {
    const messageMap = {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      password: "Password",
    };

    let message = "";
    if (regexMap[id]) {
      if (id === "password" && action !== "signup") {
        message = "";
      } else {
        if (value.length > 0) {
          message = regexMap[id].test(value)
            ? ``
            : `${messageMap[id]} not valid`;
          if ((id === "firstName" || id === "lastName") && value.length > 7)
            message = `${messageMap[id]} must be maximum 7 chars`;
          if (id === "password" && !regexMap[id].test(value)) {
            message =
              "Password must be at least 8 characters long and include both letters and numbers";
          }
        }
      }
    }
    return message;
  };

  const handleInputChange = ({ target: { id, value } }) => {
    setState((prevState) => ({ ...prevState, [id]: value }));
    setMessages((prevMessages) => ({
      ...prevMessages,
      [id]: validateInput(id, value),
    }));
  };

  //show or hide password 
  const handleToggle = () => {
    setPasswordVisibility(
      passwordVisibility.type === "password"
        ? { icon: "hide", type: "text" }
        : { icon: "show", type: "password" }
    );
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (action === "login") {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  const handleLogin = () => {
    if (
      state.email.length > 0 &&
      state.password.length > 0 &&
      regexMap.email.test(state.email)
    ) {
      /* *
       * calling api login here
       * */

      // fake process data (local storage) login
      var isError = true;
      const users = JSON.parse(localStorage.getItem("users"));
      let user = {};
      //check if there is no users stored in db
      if (!users) {
        isError = true;
      } else {
        //get user data from db
        user = users.find((user) => user.email === state.email);
        if (user) {
          if (user.password === state.password) {
            isError = false;
          }
        }
      }
      if (isError) {
        //no account in db
        Toast.fire({
          icon: "error",
          title:
            "Oops! The email or password you entered doesn't match our records. Please double-check and try again.",
        });
      } else {
        //login successfully
        //save name of user + api token in local storage to check user login or not
        localStorage.setItem("isLogin", JSON.stringify(true));
        localStorage.setItem(
          "user",
          JSON.stringify({
            userName: user.firstName + " " + user.lastName,
            email: user.email,
            token: "api token",
          })
        );
        localStorage.setItem("isVisible", true);
        window.dispatchEvent(new Event("StatusVisibleChanged"));
        //show welcome message
        Toast.fire({
          icon: "success",
          title:
            "Welcome back, " +
            user.firstName +
            " " +
            user.lastName +
            "! You have successfully logged in. Enjoy your experience.",
        });
        //redirecte to home page
        navigate("/");
      }
    }
  };

  const handleSignUp = () => {
    if (
      state.email.length > 0 &&
      state.password.length > 0 &&
      state.firstName.length > 0 && state.firstName.length < 8 &&
      state.lastName.length > 0 && state.lastName.length < 8 &&
      regexMap.email.test(state.email) &&
      regexMap.password.test(state.password) &&
      regexMap.firstName.test(state.firstName) &&
      regexMap.lastName.test(state.lastName)
    ) {
      /* *
       * calling api sign up here
       * */

      // fake process data (local storage) signup
      let users = JSON.parse(localStorage.getItem("users"));
      //check if there is no users stored in db
      if (!users) {
        users = [];
      }
      //check if there is same email in db
      const user = users.find((user) => user.email === state.email);
      if (user) {
        Toast.fire({
          icon: "error",
          title:
            "It seems you already have an account with the email " +
            state.email +
            ". Please log in to access your account.",
        });
      } else {
        //save user data
        users.push(state);
        //save email + password + name in db (local storage users array)
        localStorage.setItem("users", JSON.stringify(users));
        //for showing git (50$) for new user register in website
        localStorage.setItem("isNewUser", "true");
        window.dispatchEvent(new Event("StatusChanged"));
        localStorage.setItem("isVisible", true);
        window.dispatchEvent(new Event("StatusVisibleChanged"));
        //save name of user + api token in local storage to check user login or not
        localStorage.setItem("isLogin", JSON.stringify(true));
        localStorage.setItem(
          "user",
          JSON.stringify({
            userName: state.firstName + " " + state.lastName,
            email: state.email,
            token: "api token",
          })
        );
        //show welcome message
        Toast.fire({
          icon: "success",
          title:
            "Welcome to YourBank " + state.firstName + " " + state.lastName,
        });
        //redirecte to home page
        navigate("/");
      }
    }
  };


  return (
    <section className="AA-form-section AA-px-297 pb-150">
      <div data-aos="zoom-in" className="AA-form-container">
        <div className="AA-design">
          <img src={image} alt="design" />
        </div>
        <div className="AA-form-container-bg">
          <TitleComponent
            title={title}
            desc={desc}
            highlightedWords={[title]}
            fw={false}
          />
          <form onSubmit={submitForm}>
            {action === "signup" && (
              <div className="AA-inputs-row AA-input-pb">
                {/* firstName and lastName inputs */}
                {["firstName", "lastName"].map((field) => (
                  <div className="AA-input-Fields" key={field}>
                    <div className=" AA-input-group">
                      <input
                        id={field}
                        className="AA-input f-18 fw-300"
                        placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)
                          }`}
                        value={state[field]}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {/* error message */}
                    <p
                      className={`AA-error ${messages[field].length === 0 ? "AA-hide" : "AA-show"
                        }`}
                    >
                      {messages[field]}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="AA-inputs-row">
              {/* email input */}
              <div className="AA-input-Fields">
                <div className="AA-input-group">
                  <input
                    id="email"
                    type="email"
                    className="AA-input f-18 fw-300"
                    placeholder="Enter your Email"
                    value={state.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {/* error message */}
                <p
                  className={`AA-error ${messages.email.length === 0 ? "AA-hide" : "AA-show"
                    }`}
                >
                  {messages.email}
                </p>
              </div>
              {/* password input */}
              <div className="AA-input-Fields">
                <div className="AA-input-group">
                  <input
                    id="password"
                    className="AA-input f-18 fw-300"
                    type={passwordVisibility.type}
                    value={state.password}
                    placeholder="Enter your Password"
                    onChange={handleInputChange}
                    required
                  />
                  <span className="AA-icon-pass" onClick={handleToggle}>
                    <i
                      className={`eye-icon ${passwordVisibility.icon === "show"
                          ? "fa-solid fa-eye"
                          : "fa-regular fa-eye-slash"
                        }`}
                    ></i>
                  </span>
                </div>
                {/* error message */}
                <p
                  className={`AA-error ${messages.password.length === 0 ? "AA-hide" : "AA-show"
                    }`}
                >
                  {messages.password}
                </p>
              </div>
            </div>
            {action === "login" ? (
              <Link className="AA-forget-pass-btn f-18 fw-400" to="#" onClick={handleForgetPassword}>
                Forgot Password?
              </Link>
            ) : (
              <div className="AA-pb-40"></div>
            )}
            <button
              type="submit"
              className={`AA-custom-btn f-18 fw-400 AA-bg-btn-green-60`}
            >
              {action === "login" ? "Login" : "Sign Up"}
            </button>
            <Link
              className="AA-custom-btn f-18 fw-400 AA-custom-btn AA-bg-btn-gray-15 AA-btn-white"
              to={action === "login" ? "/signUp" : "/login"}
              onClick={() => {
                const activeHref = action === "login" ? "/signUp" : "/login"
                localStorage.setItem("activePath", JSON.stringify(activeHref))
                window.dispatchEvent(new Event("activePathChanged"))
              }}>
              {action === "login" ? "Sign Up" : "Login"}
            </Link>
            {/* login socials btn */}
            <div className="AA-continue-p f-18">
              <p>Or Continue with</p>
            </div>
            <div className="AA-social-login-btns">
              {SocialLoginData.map((item, index) => (
                <IconGradient key={index} button={true} img={item.img} />
              ))}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}