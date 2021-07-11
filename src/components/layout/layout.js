import React from "react"
import "./layout.css"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from "./Header"

function Layout({ children, data }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
