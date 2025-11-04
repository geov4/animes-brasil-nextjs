"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import LoginModal from "./LoginModal";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo href="/">ADS Office</Logo>

          <Nav>
            <NavLink href="/">Escritorio</NavLink>
            <NavLink href="/animes">Compartilhados</NavLink>
            <NavLink href="/animes/novo">Minha biblioteca</NavLink>

            <LoginButton onClick={() => setShowLogin(true)}>
              <FaUserCircle size={26} />
            </LoginButton>
          </Nav>
        </HeaderContent>
      </HeaderContainer>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}

// 💅 Estilos do Header
const HeaderContainer = styled.header`
  background-color: #07295cd0;
  color: white;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 2px 6px rgba(4, 0, 255, 1);
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffffe3;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap; /* evita que o conteúdo estoure em telas pequenas */
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #00aeffff;
  }
`;

const LoginButton = styled.button`
  background-color:  #0b2150ff;
  border: none;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #1337ffff;
  }
`;
