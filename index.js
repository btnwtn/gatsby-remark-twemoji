const visit = require("unist-util-visit");
const twemoji = require("twemoji");

module.exports = ({ markdownAST }, options) => {
  visit(markdownAST, "text", node => {
    node.value = twemoji.parse(node.value, options);
  });

  return markdownAST;
};
