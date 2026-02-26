module.exports = {
  // Look for tests in specific folders
  roots: ["<rootDir>/test"],
  
  // Pattern matching - option 1
  testMatch: [
    "<rootDir>/test/**/*.{spec,test}.{js,jsx}"
  ],
  
  
  // Include specific folders
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/source/test"
  ]
};