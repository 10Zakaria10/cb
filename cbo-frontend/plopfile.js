const configGeneratorComponent = {
  description: "this is cbo app component generator",
  prompts: [
    {
      type: "list",
      name: "type",
      choices: ["atoms", "molecules", "organisms", "templates"],
      message: "component type please",
    },
    {
      type: "input",
      name: "name",
      message: "component name please",
    },
  ],
  actions: [
    {
      type: "add",
      path: "components/{{lowerCase type}}/{{camelCase name}}/{{pascalCase name}}.tsx",
      templateFile: "__plop__/ComponentReact.hbs",
    },
    {
      type: "add",
      path: "components/{{lowerCase type}}/{{camelCase name}}/index.ts",
      templateFile: "__plop__/index.hbs",
    },
    {
      type: "add",
      path: "components/{{lowerCase type}}/{{camelCase name}}/{{pascalCase name}}.style.ts",
    },
  ],
};

const configGeneratorPage = {
  description: "this is cbo app page generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "page name please",
    },
  ],
  actions: [
    {
      type: "add",
      path: "pages/{{camelCase name}}.tsx",
      templateFile: "__plop__/Page.hbs",
    },
  ],
};

module.exports = function configure(plop) {
  plop.setGenerator("component", configGeneratorComponent);
  plop.setGenerator("page", configGeneratorPage);
};
