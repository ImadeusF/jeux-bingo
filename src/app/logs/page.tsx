"use client";

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

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch("/api/logs");
        if (!response.ok) throw new Error("Erreur lors du chargement des logs");

        const data = await response.json();
        setLogs(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <LogsContainer>
      <h1>Historique des Logs</h1>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            Log ID: {log.id} - {new Date(log.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </LogsContainer>
  );
}

const LogsContainer = styled.div`
  color: #000000;
  padding: 20px;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
  }
`;
