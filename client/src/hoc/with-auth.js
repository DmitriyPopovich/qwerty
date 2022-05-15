import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {checkAuthUser} from "../store/reducers/auth-reducer/auth-reducer";

const withAuth = (fn) => (Wrapped) => {



    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}
export default withAuth