import { changeAuthorized, getUserId, logUserOut } from "../features/getUser/getUserData";
import { chageFlagStatusFalse } from "../features/post/PostSlice";
import { useEffect } from "react";
import { NavLink } from "react-router-dom"

import { unwrapResult } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";
import avatar from "./static/images/icons8-avatar-96.png"

import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const UserProfile = ({ authorized, setAuthorized }) => {
  const userInfo = useSelector((state) => state.getUser.data);
  const loading = useSelector((state) => state.getUser.loading)
  const logout = useSelector((state) => state.getUser.logout)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserId())
      .then(unwrapResult)
      .then((res) => {
        //console.log(res);
        setAuthorized(true)
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "Request failed with status code 401") {
          // console.log("here");
          navigate("/sign-in");
          setAuthorized(false)
        }
        else if (err.message === "Network Error" || err.message === "Request failed with status code 500") {
          navigate("/sign-in");
          setAuthorized(false)
        }
      })
  }, [])

  const handleButtonCLick = () => {
    dispatch(logUserOut())
    
  }

  useEffect(() => {
    if (logout) {
      //console.log("here1");
      dispatch(chageFlagStatusFalse())
      dispatch(changeAuthorized(false))
      setAuthorized(false)
      navigate("/sign-in");
    }
  }, [logout])
  //const authorized = localStorage.getItem("authorized")
  //console.log(authorized);
  return (
    <>
      {(loading) ? (
      <>
        <div className="loader-container"><Circles height={120} width={120} color="#00FFFF"/></div>
      </>) : (
        <>
          <div className="container yyyy">
          </div>
          <div className="nadpis">
            <p>{userInfo.fullName}</p>
            <img src={avatar} />
          </div>
          <div className="test">
            <NavLink className="xxxxx" to="/edit-profile">Редагувати</NavLink>
          </div>
          <div className="red">
            <h5 className="sss">{userInfo.gmail}</h5>
            <h5 className="sss">{userInfo.phone}</h5>
          </div>
          <div className="butttt">
            <button
              className="btn ty"
              style={{ backgroundColor: "#40ABCF", color: "white", fontWeight: "bold" }}
              onClick={handleButtonCLick}>
              <span>Вийти</span>
            </button></div>
        </>
      )}
    </>
  )
}

export default UserProfile