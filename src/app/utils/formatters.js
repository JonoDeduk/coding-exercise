export const removeDuplicateWhitespace = (str) => str.replace(/\s+/g, ' ').trim();

export const formatQueryString = (str) => removeDuplicateWhitespace(str).replace(' ', '+');
