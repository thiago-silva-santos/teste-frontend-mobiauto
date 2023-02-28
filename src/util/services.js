
async function fetchData(api) {
    const resposta = await fetch(api)
     const data = await resposta.json()
     
     return data
}

export { fetchData }