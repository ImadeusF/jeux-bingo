export const useGameLogs = () => {
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
    handleGameLogs,
  };
};
