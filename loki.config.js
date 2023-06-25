module.exports = {
  configurations: {
    'chrome.iphone7': {
      preset: 'iPhone 7',
      target: 'chrome.docker',
    },
    'chrome.laptop': {
      deviceScaleFactor: 1,
      height: 768,
      mobile: false,
      target: 'chrome.docker',
      width: 1366,
    },
  },
  diffingEngine: 'looks-same',
};
