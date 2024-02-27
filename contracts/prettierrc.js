module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  tabWidth: 4,
  printWidth: 100,
  overrides: [
    {
      files: "*.sol",
      options: {
        printWidth: 80,
        tabWidth: 4,
        singleQuote: false,
        explicitTypes: "always",
      },
    },
  ],
};
