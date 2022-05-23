import React from 'react';
import TextField from '../component/Search';
import Logo from "../component/Icons/Logo";
import classes from "../component/Search/styles.module.css";
import { StrictMode } from "react";
import {NavBtn, NavBtnLink} from '../component/Navbar/NavBarElements';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
};
function handleForm(event) {
    event.preventDefault(); // stops form from "refreshing" automatically - it follows action, hence the refresh
    alert(`Hello ${event.target.name.value} ${event.target.surname.value}`); // show a simple dialog box with the values
    event.target.name.value = ""; // flushes the name value
    event.target.surname.value = ""; // flushes the surname value
}
export default function SearchPage() {
    return (
        <>
        <TextField/>
        </>
      );
};
  