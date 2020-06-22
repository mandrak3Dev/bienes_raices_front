/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const urlSlug = require('url-slug')
exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }
  // Si hay resultados crear los aarchivos
  const propiedades = resultado.data.allStrapiPropiedades.nodes

  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/propiedades.js"),
      context: {
        id: propiedad.id
      },
    })
  })
}
