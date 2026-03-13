import { createServer } from 'vite';

const server = await createServer({
  root: '/Users/landongavin/seriouslag/innerlight-landing',
  server: { port: 3004 },
});
await server.listen();
server.printUrls();
