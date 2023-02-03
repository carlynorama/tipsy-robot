import type { mastodon } from 'masto';
import { login } from 'masto';

const masto = await login({
    //@ts-expect-error
    url: process.env.URL,
    accessToken: process.env.TOKEN,
  });

const s: mastodon.v1.Status = await masto.v1.statuses.create({
  status: 'Hello from #mastojs!',
  visibility: 'public',
});

console.log(s);
