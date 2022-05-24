export default {
  
  clearMocks: true,
  coverageProvider: "v8",

  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"], // MUDANÇA ESTAVA NA DOC DO SWC - TRANSOFRMAR TS JSX EM SWC JEST
  },

};