import 'dotenv/config'
import type { mastodon } from 'masto';
import { login } from 'masto';
import { writeFile } from 'fs/promises';

const masto = await login({
    //@ts-expect-error
    url: process.env.URL,
    accessToken: process.env.TOKEN,
  });

const s: mastodon.v1.Status = await masto.v1.statuses.create({
  status: 'Goodnight! See you tomorrow.',
  visibility: 'public',
});


//-----------------------------------------------   BEGIN MAIN
console.log(s.id, s.content);
await writeFile(`musings_${new Date().getTime()}.json`, JSON.stringify(s, null, 2), { encoding: 'utf8' });




