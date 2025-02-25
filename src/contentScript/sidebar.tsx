import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
// import Signup from "./auth/signup";
// import ForgotPassword from "./auth/forgetPassword";
// import Login from "./auth/login";
// import Logo from "./Icons/logo";
// import SliderIcon from "./Icons/sliderIcon";
// import Notes from "./authenticatedPages";
// import ChangePassword from "./auth/changePassword";
// import ResetPassword from "./auth/resetPassword";
// import TwoFactorCode from "./auth/twoFactor";
import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import { components } from "../../constants";
// import { setRenderedComponent } from "../../redux/renderedcomponentSlice";
// import NotHeader from "./note/noteHeader";
// import AuthenticatedPages from "./authenticatedPages";

function DraggableButton({ onClick }) {
  const ref = React.useRef(null);

  return (
    <Draggable
      axis="y"
      bounds={{ top: 0, bottom: window.innerHeight - 50 }}
      defaultPosition={{ x: 0, y: window.innerHeight / 2 - 25 }}
      nodeRef={ref}
    >
      <div
        ref={ref}
        className="fixed right-0 cursor-pointer z-[99999]"
        style={{ top: "1%", transform: "translateY(-50%)" }}
        onClick={onClick}
      >
        <p>Visa</p>
        {/* <SliderIcon /> */}
      </div>
    </Draggable>
  );
}

function Sidebar({ isLogin = false }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentForm, setCurrentForm] = useState<String>("login");
  const sidebarRef = useRef(null);
  const [loginValues, setLoginValues] = useState(null);
  const renderedComponent = useSelector(
    (state: any) => state.renderedComponent.name
  );
  const dispatch = useDispatch<any>();
  useEffect(() => {
  }, [renderedComponent]);
  useEffect(() => {
    // if (isLogin) {
    //   dispatch(setRenderedComponent(components.notes.noteList));
    // } else {
    //   dispatch(setRenderedComponent(components.auth.login));
    // }
  }, [isLogin]);

  // const onForgetClick = () => {
  //   setCurrentForm("resetPassword");
  // };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar if clicked outside of it
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable background scroll when sidebar is open
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const onLoginClick = (values) => {
    setCurrentForm("twoFactorCode");
    setLoginValues(values);
  };
  return (
    <>
      {!isOpen && <DraggableButton onClick={toggleSidebar} />}

      {/* Background blur and overlay */}
      {isOpen && (
        <div className="!fixed !inset-0 !bg-black !bg-opacity-50 !backdrop-blur-sm !z-[99998]" />
      )}

      <div
        ref={sidebarRef}
        className={`!fixed !top-0 !right-0 !h-[100%] !w-[500px] !rounded-l-[16px] !shadow-sidebar !bg-white !text-gray-800 !transform !transition-transform !duration-[700ms] !z-[99999] ${
          isOpen ? "!translate-x-0" : "!translate-x-[100%]"
        }`}
      >
        {/* <ToastContainer 
        className="!text-[14px]"
        />

        <div className="!relative !px-[32px] !h-[100%] !overflow-auto">
          {!isLogin || currentForm === "changePassword" ? (
            <div className="!flex !align-center !justify-center !mt-[100px]">
              <Logo height={100} width={150} />
            </div>
          ) : null}

          {!isLogin ? (
            <div>
              <div className="w-[100%]">
                {renderedComponent === components.auth.login && <Login />}

                {renderedComponent === components.auth.signup && <Signup />}

                {renderedComponent === components.auth.forgetPassword && (
                  <ForgotPassword />
                )}

                {renderedComponent === components.auth.resetPassword && (
                  <ResetPassword />
                )}
                {renderedComponent === components.auth.twoFactorCode && (
                  <TwoFactorCode />
                )}
              </div>
            </div>
          ) : (
            <div>
              {renderedComponent === components.auth.changePassword ? (
                <ChangePassword />
              ) : (
                <>
                  <NotHeader />
                  <AuthenticatedPages />
                </>
              )}
            </div>
          )}
        </div> */}
      </div>
    </>
  );
}

export default Sidebar;
