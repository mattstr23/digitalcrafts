import React, {useEffect, useState} from "react"
import { MainDiv, OtherLinks, UserDiv, UserImg, UserInfo, UserName, UserWelcome } from "../styled-components/SidebarStyle";
import { Link } from "react-router-dom";

const URL = "https://randomuser.me/api/";
export default function Sidebar() {
    const [user, setUser] = useState({});

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
        setUser({
          ...jsonNews.results[0], userImage: jsonNews?.results[0]?.picture?.thumbnail,});
      };
      getNewsData();
      return () => {};
    }, []);
    return (
        <MainDiv>
            <UserDiv>
                <UserImg src={user?.userImage}/>
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
        </MainDiv>
    )
}