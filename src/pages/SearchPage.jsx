import React from 'react'

const SearchPage = () => {
  console.log("Search page")
  const query = location?.search?.slice(3)
  console.log("query: ", query)
  return (
    <div>
      searchS
    </div>
  )
}

export default SearchPage
