import type { Config } from "@jest/types";

module.exports = {
  // setupFilesAfterEnv: ['./src/__test__/services/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
 
  transformIgnorePatterns: [
      "/node_modules/(?!axios)"
  ],
};