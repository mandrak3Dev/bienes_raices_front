import React from "react"
import Iconos from "./iconos"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import Layout from "./layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($id: String!) {
    allStrapiPropiedades(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        estacionamiento
        descripcion
        wc
        precio
        habitaciones
        agentes {
          nombre
          telefono
          email
        }
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Propiedades = ({
  data: {
    allStrapiPropiedades: { nodes },
  },
}) => {
  const {
    nombre,
    estacionamiento,
    descripcion,
    wc,
    precio,
    habitaciones,
    agentes,
    imagen,
  } = nodes[0]

  return (
    <Layout>
      <h1>{nombre}</h1>
      <div>
        <main>
          <Image fluid={imagen.sharp.fluid} />
          <p>{descripcion}</p>
        </main>
        <aside>
          <p>{precio}</p>
          <Iconos
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />
          <div>
            <h2>Vendedor: </h2>
            <p>{agentes.nombre}</p>
            <p>Tel: {agentes.telefono}</p>
            <p>E-mail: {agentes.email}</p>
          </div>
        </aside>
      </div>
    </Layout>
  )
}

export default Propiedades
