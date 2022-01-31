import api from './apiConfig'


const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}


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
      const response = await api.get(`/authors/${id}/`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createAuthor = async (author) => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    const response = await api.post('/authors/', author, headers)
    return response.data
  }catch (error) {
      throw error
  }
}

export const updateAuthor = async (id, author) => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token,
      },
    };
      const response = await api.put(`/authors/${id}/`, author, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteAuthor = async (id) => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token,
      },
    };
      const response = await api.delete(`/authors/${id}`, headers)
      return response.data
  } catch (error) {
      throw error
  }
}