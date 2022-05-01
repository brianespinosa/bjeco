/**
 * Checks if the `window` and `window.document` are present to verify if we are
 * running in a browser or on a node server.
 */
export const isDOM = Boolean(
  typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);
