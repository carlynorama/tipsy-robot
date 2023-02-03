#Tipsy Robot

This project was set up using the following tutorials

- https://github.com/neet/masto.js
- https://thecodingtrain.com/tracks/mastodon/mastodon/setting-up-a-mastodon-bot

## Project Startup

{ INSERT SETTING UP YOUR BOT ACCOUNT WITH ACCESS KEY HERE }

* `npm init`   //use defaults for everything 
* `npm install masto`
* `npm install typescript --save-dev`  //installs local version that isn't need for run time. 
* change `package.json` to have the following block

                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "tsc": "tsc",
                    "tsc:w": "tsc --watch",
                    "http-server": "npx http-server ./docs -o"
                },

* `npm run tsc -- --init`  //starts up local tsc config. see `tscofig.json` below.
* make sure the `hello_world.ts` file is how you want it 
* `npm run tsc`
* make sure  `"type":"module"` is in the package.json
* run the hello_world file 
    * `cd` to the folder with the code
    * type `URL={URL} TOKEN={TOKEN} node ./index.js` 
        * where {URL} is the instance name "http://your.instance.com" and {TOKEN} is the token generated in that magic undocumented first step. These are then environment variables that don't end up saved in the repo.
    


## tsconfig.json

        {
        "compilerOptions": {
            /* Projects */
            /* Language and Environment */
            "target": "es2017",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
            /* Modules */
            "module": "ES2022",                                /* Specify what module code is generated. */
            "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
            /* JavaScript Support */
            /* Emit */
            /* Interop Constraints */
            "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
            "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
            /* Type Checking */
            "strict": true,                                      /* Enable all strict type-checking options. */
            /* Completeness */
            "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
        }
        }
