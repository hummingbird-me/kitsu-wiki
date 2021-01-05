let counter = 0;

const uniqueID = (): string => `id-${counter++}`;

export default uniqueID;
