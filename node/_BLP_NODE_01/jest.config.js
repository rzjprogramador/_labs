module.exports = {
  roots: ["<rootDir>/src"], // AQUI UNICO POLO ONDE DEFINO ONDE ELE BUSCA OS TESTS
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!<rootDir>/src/main/**"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  testEnvironment: "node",
  // preset: "@shelf/jest-mongodb",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: { 
      // PASSANDO OS MODULOS QUE QUEREMOS MAPEAR NO JEST
    "@/(.*)": "<rootDir>/src/$1",
    // SEMPRE QUE ENCONTRAR ESTA @/ VAI SUBSTITUIR PELO ROOTDIR SRC/PRIMEIRO QUE ENCONTRAR
  },
};
