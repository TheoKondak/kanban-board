const generateId = (data: string) => `${data.replace(/ /g, '_')}_${new Date().getTime()}`;

const trimString = (string, length) => {
  string.substring(0, length);
};

export default {
  generateId,
  trimString,
};
