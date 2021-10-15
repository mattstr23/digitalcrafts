import React, {useEffect} from "react"
import { MainDiv, OtherLinks, UserDiv, UserImg, UserInfo, UserName, UserWelcome } from "../styled-components/SidebarStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const URL = "https://randomuser.me/api/";
export default function Sidebar(props) {
    const user = useSelector(state => state.userData);
    const viewSideBar = props.viewSideBar;
    const dispatch = useDispatch();

    useEffect(() => {
      const getNewsData = async () => {
        const getTheNews = await fetch(URL, {
          method: "GET",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonNews = await getTheNews.json();
        console.log(jsonNews);
        dispatch({type: "GET_USER", payload: {...jsonNews.results[0]}})
      };
      getNewsData();
      return () => {};
    }, []);
    return (
      <>
      {viewSideBar ? (
        <MainDiv>
            <UserDiv>
                <UserImg src={user?.picture?.large}/>
                <UserInfo>
                    <UserWelcome>Welcome</UserWelcome>
                    <UserName>{user?.name?.first} {""} {user?.name?.last}</UserName>
                </UserInfo>
            </UserDiv>
            <Link to="/">
              <OtherLinks>Home</OtherLinks>
            </Link>
            <Link to="/dashboard">
              <OtherLinks>Dashboard</OtherLinks>
            </Link>
            <Link to="/login">
              <OtherLinks>Login</OtherLinks>
            </Link>
            <Link to="/account">
              <OtherLinks>Account</OtherLinks>
            </Link>
            <Link to="/garage">
              <OtherLinks>Garage</OtherLinks>
            </Link>
        </MainDiv>) : ""
        }
      </>
    );
}