const { Project } = require('ts-morph');

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const sourceFiles = project.getSourceFiles();

const shouldRefactor = (value) => {
  const layer = ['app', 'entities', 'features', 'pages', 'widget', 'shared', '__mocks__'];
  return layer.some((el) => value.startsWith(el));
};

sourceFiles.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();
  importDeclarations.forEach((item) => {
    const importValue = item.getModuleSpecifierValue();

    if (shouldRefactor(importValue)) {
      item.setModuleSpecifier(`@/${importValue}`);
    }
  });
});

project.save();
