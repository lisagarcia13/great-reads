import api from './apiConfig'

export const getAuthors = async () => {
  try {
      const response = await api.get('/authors/')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getAuthor = async id => {
  try {
      const response = await api.get(`/authors/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createAuthor = async (author) => {
  try {
      const response = await api.post('/authors', author)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateAuthor = async (id, author) => {
  try {
      const response = await api.put(`/authors/${id}`, author)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteAuthor = async (id) => {
  try {
      const response = await api.delete(`/authors/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}