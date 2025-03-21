"use client";

import Button from "@/components/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";

type Log = {
  id: number;
  createdAt: string;
};

export default function LogsPage() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    () => {
      const fetchLogs = async () => {
        try {
          const response = await fetch("/api/logs");
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération des logs");
          }
          const data = await response.json();
          setLogs(data);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Une erreur inconnue est survenue");
          }
        } finally {
          //s'exécute dans tous les cas
          setLoading(false);
        }
      };
      fetchLogs();
    },
    [] // [] pour exécuter le useEffect une seule fois au montage
  );

  return (
    <LogsContainer>
      <h1>Jeux Terminés :</h1>
      {loading && <div className="chargement-message"><h1>Chargement...</h1></div>}
      {error && <div className="error-message">{error}</div>}
      {logs.map((log) => (
        <div key={log.id}>
          {new Date(log.createdAt).toLocaleString("fr-FR")}
        </div>
      ))}

      <Button label={"Retour à l'accueil"} href="/" />
    </LogsContainer>
  );
}

const LogsContainer = styled.div`
  display: flex;
  height: 100dvh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 20px 0px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.5) url("/images/background_game.png");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .chargement-message {
  }
  .error-message {
    color: red;
  }
`;
