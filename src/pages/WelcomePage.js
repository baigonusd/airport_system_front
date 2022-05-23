import { StrictMode } from "react";
import React from 'react'
import Logo from "../component/Icons/Logo";
import List from "../component/List";
import data from "../data";
import "../styles.css";


export default function WelcomePage() {
  return (
      <StrictMode>
        <div className="page">
          <Logo />
          <main>
            <List tickets={data} />
          </main>
        </div>
      </StrictMode>
    )
  };
  