import React, { FC } from 'react'

interface Headerprops {
    user: {
        firstName: string,
        lastName: string,
        userName: string,
    };
    birthday?: string;
}

const Header: FC<Headerprops> = (props) => {
    return (
        <div>
            <h1>Hello {props.user.firstName}</h1>
            <p>{props.birthday}</p>
        </div>
    )
}
export default Header;