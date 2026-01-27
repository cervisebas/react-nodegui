const path = require('path');

module.exports = function ({ types: t }) {
  return {
    visitor: {
      Program: {
        enter(progPath) {
          let usesAssets = false;
          let hasPathImport = false;

          progPath.traverse({
            ImportDeclaration(pathNode) {
              const source = pathNode.node.source.value;

              if (/\.(png|jpe?g|gif|svg|bmp|otf)$/i.test(source)) {
                usesAssets = true;
                
                const specifiers = pathNode.node.specifiers;
                if (specifiers.length === 0) {
                  return;
                }

                const localName = specifiers[0].local.name;

                const replacement = t.variableDeclaration("const", [
                  t.variableDeclarator(
                    t.identifier(localName),
                    t.callExpression(
                      t.memberExpression(t.identifier("path"), t.identifier("resolve")),
                      [
                        t.identifier("__dirname"),
                        t.callExpression(t.identifier("require"), [t.stringLiteral(source)])
                      ]
                    )
                  )
                ]);

                pathNode.replaceWith(replacement);
              }

              if (source === 'path') {
                hasPathImport = true;
              }
            },
            VariableDeclarator(pathNode) {
              if (t.isIdentifier(pathNode.node.id, { name: "path" })) {
                hasPathImport = true;
              }
            }
          });

          if (usesAssets && !hasPathImport) {
            progPath.unshiftContainer(
              "body",
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  t.identifier("path"),
                  t.callExpression(t.identifier("require"), [t.stringLiteral("path")])
                )
              ]),
            );
          }
        }
      }
    }
  };
};
