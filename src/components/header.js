import React from "react"
import { css } from "@emotion/core"
// import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navegacion from "./navegacion"

// const EnlaceHome = styled(Link)`
//   color: #fff;
//   text-align: center;
//   text-decoration: none;
// `

const Header = ({ siteName }) => {

  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)  

  return (
    <header
      css={css`
        background-color: #0d283b;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link to="/"><img src={logo.publicURL} alt="Logotipo bienes raices"/></Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
