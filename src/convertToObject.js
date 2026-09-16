'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const styles = sourceString.split(';');

  for (const style of styles) {
    if (!style.trim()) {
      continue;
    }

    const [property, value] = style.split(':');

    result[property.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
