const { ESLint } = require('eslint');
const eslint = new ESLint();

const removeIgnoredFiles = async (files) => {
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file);
    })
  );
  const filtered = files.filter((_, i) => !isIgnored[i]);
  return filtered.map((i) => `"${i}"`).join(' ');
};

module.exports = {
  '**/*.{js,jsx,ts,tsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    files = files.map((i) => `"${i}"`);

    return [
      `eslint --fix --max-warnings=0 ${filesToLint}`,
      `prettier -u --write ${files.join(' ')}`,
    ];
  },
  '!**/(src/assets|public/images|*.{js,jsx,ts,tsx})': async (files) => {
    files = files.map((i) => `"${i}"`);
    return `prettier -u --write ${files.join(' ')}`;
  },
};
