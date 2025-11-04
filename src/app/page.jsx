"use client";

import styled from "styled-components";
import Link from "next/link";
import Header from "@/components/Header"; // ✅ importa o Header

export default function Home() {
  return (
    <>
      <Header /> {/* ✅ adiciona o cabeçalho fixo */}
      <Container>
        <Content>
          <Title>Site para empresas de TI! </Title>
          <Subtitle>
            Explore os compartilhados, descubra e aumente seus conhecimentos.
          </Subtitle>

          {/* <ButtonWrapper>
            <CadastrarButton href="/animes/novo">
              + Cadastrar Anime
            </CadastrarButton>
          </ButtonWrapper> */}
        </Content>
      </Container>
    </>
  );
}

// 💅 Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #000e33ff, #2f749cff);
  color: #caf0ffff;
  text-align: center;
  padding-top: 4rem; /* 🔹 espaço para o header fixo */
`;

const Content = styled.div`
  max-width: 600px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CadastrarButton = styled(Link)`
  background-color: #10b981;
  color: white;
  padding: 0.9rem 1.8rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background-color 0.25s ease, transform 0.15s ease;

  &:hover {
    background-color: #059669;
    transform: scale(1.05);
  }
`;
