import '@testing-library/jest-dom'
const { JSDOM } = require('jsdom')

const { document } = new JSDOM('', { url: 'https://localhost:8080' }).window
global.document = document
global.window = document.defaultView
