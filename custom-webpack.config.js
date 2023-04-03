const webpack = require('webpack');
/* this links can help:
 https://stackoverflow.com/questions/71102476/pass-environment-variable-value-to-angular-app-from-docker-file
https://dev.to/taulantdisha/handling-multiple-angular-environments-with-docker-and-nginx-2hce
https://codinglatte.com/posts/angular/using-os-environment-variables-in-angular-with-docker/
https://christianlydemann.com/implementing-dynamic-environments-in-angular-for-avoiding-one-build-per-environment/
https://www.c-sharpcorner.com/blogs/dynamic-configuration-of-angular-api-url-using-docker-compose-yml-file

this links could work but not necesary implementign, in other words

*/
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        API_KEY_FRONTEND: JSON.stringify(process.env.LOGENV)
        // ENVIRONMENT: JSON.stringify(process.env.ENVIRONMENT),
        // SomeAPIKey: JSON.stringify(process.env.SomeAPIKey),
        // SomeOtherAPIKey: JSON.stringify(process.env.SomeOtherAPIKey)
      }
    })
  ]
};