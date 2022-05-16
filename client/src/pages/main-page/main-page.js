import React from 'react'
import ErrorBoundary from "../../containers/error-boundry";
import NavbarContainer from "../../containers/navbar/navbar-container";
import AppRouter from "../../router";

const MainPage = () => {
    return (
        <ErrorBoundary>
            <NavbarContainer />
            <AppRouter />
        </ErrorBoundary>
    )
}

export default MainPage
