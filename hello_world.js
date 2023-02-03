import { login } from 'masto';
const masto = await login({
    //@ts-expect-error
    url: process.env.URL,
    accessToken: process.env.TOKEN,
});
const s = await masto.v1.statuses.create({
    status: 'Or a tongue, or teeth... or a head! I might have a head?!',
    visibility: 'public',
});
console.log(s);
