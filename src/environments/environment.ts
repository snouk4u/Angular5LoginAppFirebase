// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  //get key from firebase
  firebaseConfig: {
    apiKey: 'AIzaSyCSNV4Y4RmoMm4L-eQLu2Exid_CrPHw1L8',
    authDomain: 'myapp2018-a56e1.firebaseapp.com',
    databaseURL: 'https://myapp2018-a56e1.firebaseio.com',
    projectId: 'myapp2018-a56e1',
    storageBucket: 'myapp2018-a56e1.appspot.com',
    messagingSenderId: '572111332766'
  }
};
