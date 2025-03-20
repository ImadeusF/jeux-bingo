"use client";
import styled from "styled-components";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <NotFoundStyled>
      <h1>Page non trouvée</h1>
      <Button label={"Retour à l'accueil"} href="/" />
    </NotFoundStyled>
  );
}

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  h1 {
    padding-bottom: 20px;
  }
`;
