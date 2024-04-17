import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div>
        <h1>Pesquisar:</h1>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Pesquisar atividade...'/>
    </div>
  )
}

export default Search