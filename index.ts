import { createClient } from '@hey-api/openapi-ts';

createClient({
  input: 'https://api.blckbox.dev/api/v1/openapi.json',
  output: 'src/client',
  plugins: [
    '@hey-api/typescript',
    '@hey-api/client-next',
    '@tanstack/react-query', 
  ],
});