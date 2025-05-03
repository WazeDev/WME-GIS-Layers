const API_KEY = 'YTJWNVBVRkplbUZUZVVGTlNXOWlVR1pWVjIxcE9VdHJNbVY0TTFoeWNrSlpXbFZuVmtWelRrMVVWUT09';
const DEC = s => atob(atob(s));

const decodedApiKey = DEC(API_KEY);
console.log("API KEY = ",decodedApiKey);