module.exports = (name) => {
  return `export * from './${name.join('/')}';`;
};
