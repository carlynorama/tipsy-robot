import 'dotenv/config'
import type { mastodon } from 'masto';
import { login } from 'masto';
import { readFile, writeFile } from 'fs/promises';

const masto = await login({
    //@ts-expect-error
    url: process.env.URL,
    accessToken: process.env.TOKEN,
  });

const s: mastodon.v1.Status = await masto.v1.statuses.create({
  status: 'And I can remember what I said.',
  visibility: 'public',
});

console.log(s.id, s.content);
await writeFile('./musings.json', JSON.stringify(s, null, 2));
