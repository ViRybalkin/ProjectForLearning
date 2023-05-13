module.exports = (exportedFile) => {
  return exportedFile
    .map((file) => {
      return `export * from './${file}';`;
    })
    .join('\n');
};
