import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h1>Hacker News</h1>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search here...."
      />
    </form>
  )
}

export default SearchForm
