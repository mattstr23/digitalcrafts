import React from "react"
import { MainHeader } from "../styled-components/HeaderStyle";


export default function Header(props) {
    const viewSideBar = props.viewSideBar
    const setViewSideBar = props.setViewSideBar
    return (
        <div> 
            <button onClick={()=>(!viewSideBar)}>SideBar</button>
            <MainHeader>Random People</MainHeader> 
        </div>
    );
}