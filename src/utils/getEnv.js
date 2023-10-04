const { consola, createConsola } = require("consola");
const dotenv = require("dotenv");
const path = require("path")

dotenv.config();

/**
 * Get the value of an environment variable.
 *
 * @param {"PORT" | "HOST" | "PASSWORD" | "USERNAME" | "DATABASE" | "DATABASE_PORT" | "NODE_ENV"} key - The name of the environment variable.
 * @returns {string} The value of the environment variable.
 * @throws {Error} If the environment variable is not specified.
 */
const getVariables = (key) => {
  const value = process.env[key];

  if (value === undefined) {
    consola.error(`ENVIRONMENT VARIABLE ${key} IS NOT SPECIFIED`);
    throw new Error(`ENVIRONMENT VARIABLE ${key} IS NOT SPECIFIED`);
  }

  return value;
};

module.exports = {
  getVariables,
};
