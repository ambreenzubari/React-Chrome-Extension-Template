import React, { useEffect, useState } from "react";
// import Sidebar from "./Components/sidebar";
// import BottomBubble from "./Components/bottomBubble";
// import { useDispatch, useSelector } from "reaxct-redux";
import Sidebar from "./sidebar";
// import { loadtoken } from "../redux/userSlice";
// import { ToastContainer } from "react-toastify";
// import { gapi } from "gapi-script";
// const clientId = process.env.GOOGLE_CLIENT_ID;

function ContentScript() {
  // const dispatch: any = useDispatch();
  // const user = useSelector((state: any) => state.user.token);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  // useEffect(() => {
  //   dispatch(loadtoken());
  //   getUserData();
  // }, [dispatch, user]);

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scopr: "",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // }, []);

  const getUserData = async () => {
    // if (user) {
    //   setIsLogin(true);
    // } else {
    //   setIsLogin(false);
    // }
  };
  return (
    <>
      <div className="visa-prefix ">
        {/* {isLogin && <BottomBubble />} */}
        <Sidebar isLogin={isLogin} />
      </div>

    </>
  );
}

export default ContentScript;
