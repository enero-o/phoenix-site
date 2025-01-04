import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api.phoenixcap.io/',
  documents: ['src/**/**/*.ts'],
  generates: {
    './src/types/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
    './src/types/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
