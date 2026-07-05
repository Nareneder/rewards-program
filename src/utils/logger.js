const logger = {
  log: (msg) => { if (import.meta.env.DEV);},
  error: (msg) => { if (import.meta.env.DEV);}
};

export default logger;