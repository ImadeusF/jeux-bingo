import { useEffect, useState } from "react";

export type Log = {
  id: number;
  createdAt: string;
};

export const useGameLogs = () => {
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

  const handleGameLogs = async () => {
    try {
      const response = await fetch("/api/logs", {
        method: "POST",
      });
      if (!response.ok)
        throw new Error("Erreur lors de l'enregistrement du log");

      console.log("Log enregistré avec succès");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    logs,
    loading,  
    error,
    handleGameLogs,
  };
};
