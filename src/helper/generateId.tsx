const generateId = (data: string) => `${data}_${new Date().getTime()}`;

export default generateId;
