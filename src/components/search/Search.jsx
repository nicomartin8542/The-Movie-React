import React from 'react'

export const Search = () => {
  return (
    <form>
      <div className="input-search">
        <input
          type="text"
          name="search"
          className="search"
          placeholder="Busca tu peli..."
          autoComplete='off'
        />
        <button className="btn-search">
          <i className="fa fa-search" aria-hidden="true"></i>

        </button>
      </div>

    </form>
  )
}
