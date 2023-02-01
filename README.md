# chrisrentsch.com
forked from: https://github.com/riyaz942/web-portfolio

Used Created-React-App for this project so to run locally
- clone repository
- Install NodeJS https://nodejs.org/en/download/

“npm start” won’t work because the NodeJS versions >17 are incompatible with the code written for this site ([explanation](https://stackoverflow.com/questions/69719601/getting-error-digital-envelope-routines-reason-unsupported-code-err-oss)) So instead:

- Install nvm (https://github.com/coreybutler/nvm-windows/releases)
- Run `nvm install 16.13.0`
- Run `nvm use 16.13.0`
- Run `npm start` to initialize local host.

If `npm start` doesn't work, try `yarn start` - Yarn seems to manage the dependencies better. There are some updates needed (code is 3+ yrs old).
<br/>
