import React from "react"
import { MainHeader } from "../styled-components/HeaderStyle";

export default function Header(props) {
    const viewSideBar = props.viewSideBar;
    const setViewSideBar = props.setViewSideBar;
    return (
        <MainHeader> 
            <button onClick={()=>setViewSideBar(!viewSideBar)}>
                {viewSideBar ? "HIDE MENU" : "MENU"}
            </button>
            <h1>This is React</h1>
        </MainHeader>
    );
}