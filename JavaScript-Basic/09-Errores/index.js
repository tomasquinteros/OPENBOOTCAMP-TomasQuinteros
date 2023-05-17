
const winston = require("winston");

const logger = winston.createLogger({
 level: "info",
 format: winston.format.json(),
 defaultMeta: {service: "user-service"},
 transports: [
  new winston.Console(),
  new winston.transports.File({filename: 'error.log', level: 'error'}),
  new winston.transports.File({filename: 'combined.log'}),
 ],
})
 /* console.log("Hola!"); */
 logger.info("Esto es un mensaje informativo");
 logger.debug("Esto es un mensaje debug");
 logger.warn("Esto es una advertencia");
 logger.error("Esto es un error");