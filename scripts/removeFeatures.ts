import { Node, Project, SourceFile, SyntaxKind } from 'ts-morph';

const removeFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removeFeatureName) {
  throw new Error('Укажите название фичи');
}

if (!featureState) {
  throw new Error('Укажите название стейта(on или off)');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Некорректное название стейта, укажите(on или off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');
const files = project.getSourceFiles();

const isToggleFeatureFn = (node: Node) => {
  let isToggleFn = false;
  node.forEachChild((child) => {
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeature') {
      isToggleFn = true;
    }
  });
  return isToggleFn;
};

files.forEach((sourceFile: SourceFile) => {
  sourceFile.forEachDescendant((node: Node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFeatureFn(node)) {
      const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

      if (!objectOptions) return;

      const onFeatureProperty = objectOptions.getProperty('on');
      const offFeatureProperty = objectOptions.getProperty('off');
      const nameFeatureProperty = objectOptions.getProperty('name');

      const onFunction = onFeatureProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const offFunction = offFeatureProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const featureName = nameFeatureProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

      if (featureName !== removeFeatureName) return;

      if (featureState === 'on') {
        node?.replaceWithText(onFunction?.getBody().getText() ?? '');
      }

      if (featureState === 'off') {
        node?.replaceWithText(offFunction?.getBody().getText() ?? '');
      }
    }
  });
});

project.save();
