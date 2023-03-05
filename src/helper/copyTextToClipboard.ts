const copyTextToClipboard = (text: string) => (typeof text === 'string' ? navigator.clipboard.writeText(text) : console.error(`copyTextToClipboard was expecting a string but received ${typeof text}`));
export default copyTextToClipboard;
