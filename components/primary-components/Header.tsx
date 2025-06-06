import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
    <Container className="flex items-center justify-between">
      {/* logo */}
      <Logo/>
      <HeaderMenu/>
      <div>
      <SearchBar/>
      </div>
      {/* navbar admin */}
    </Container>
    </header>
  )
}

export default Header