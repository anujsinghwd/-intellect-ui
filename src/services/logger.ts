export const logError = (error: Error): void => {
  console.error("Logging error:", error.message);
};

export const logInfo = (message: string): void => {
  console.log("Info:", message);
};
