import React from 'react'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h1>404 Error page</h1>
      <h2>Sorry! Page not found </h2>
      <NavLink to = "/"> <button>Home button </button> </NavLink>
    </>
)}
export default ErrorPage;
