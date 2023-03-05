const generateId = (data: string) => `${data.replace(/ /g, '_')}_${new Date().getTime()}`;

export default generateId;
