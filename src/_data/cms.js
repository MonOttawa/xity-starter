require('dotenv').config()
const axios = require('axios').default

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.CDA}`

module.exports = async function() {
  try {
    const response = await axios.get(
      `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/${process.env.ENVIRONMENT}/entries?content_type=blogPost`
    )
    return response.data.items
  } catch (error) {
    throw new Error(error)
  }
}
