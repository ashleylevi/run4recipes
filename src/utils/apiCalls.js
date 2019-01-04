export const fetchPastaRecipes = async () => {
  try {
    const response = await fetch('https://api.edamam.com/search?q=pasta&app_id=0f8e1af8&app_key=a197606b8abb4aeb41aa9f761271a549')
    const data = await response.json()
    return data.hits
  } catch(error) {
    throw new Error()
  }
}

export const fetchPotatoRecipes = async () => {
  try {
    const response = await fetch('https://api.edamam.com/search?q=potato&app_id=0f8e1af8&app_key=a197606b8abb4aeb41aa9f761271a549')
    const data = await response.json()
    return data.hits
  } catch(error) {
    throw new Error()
  }
}

export const fetchBreadRecipes = async () => {
  try {
    const response = await fetch('https://api.edamam.com/search?q=sandwich&app_id=0f8e1af8&app_key=a197606b8abb4aeb41aa9f761271a549')
    const data = await response.json()
    return data.hits
  } catch(error) {
    throw new Error()
  }
}