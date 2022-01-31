import api from './apiConfig'

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}


export const getBooks = async () => {
  try {
      const response = await api.get('/books/')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getBook = async id => {
  try {
      const response = await api.get(`/books/${id}/`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createBook = async (book) => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token,
      },
    };
      const response = await api.post('/books/', book, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateBook = async (id, book) => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token,
      },
    };
      const response = await api.put(`/books/${id}/`, book, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteBook = async id => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token,
      },
    };
      const response = await api.delete(`/books/${id}`, headers)
      return response.data
  } catch (error) {
      throw error
  }
}