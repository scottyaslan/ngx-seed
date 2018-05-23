# ngx-seed

The ngx-seed is an seed project for Angular applications written in ES5. This project comes complete with SASS compliation and minification, SystemJS build tools for bundling the application JS into a single file, Grunt tasks for minification and compression of the final application JS bundles, npm for dependency management and build scripts, themeing of preinstalled design systems (Angular Material, Teradata Covalent), Internationalization (i18n), and JS unit testing and reporting with Karma, Jasmine, and Istanbul.

## Running ngx-seed demo app locally

Developers can easily run a local instance of ngx-seed demo app using **npm**.

First install or update your local project's **npm** tools:

```bash
npm install
```

## Building ngx-seed

Developers can easily build the ngx-seed SASS theme into a single CSS file using **npm**:

```bash
npm run build-theme
```

Developers can also bundle the ngx-seed JS into a single gzip compressed file using **npm**:

```bash
npm run bundle-js
```

## Testing ngx-seed

Developers can run ngx-seed JS unit tests using **npm**.

```bash
npm test
```

Or, during development:

```bash
npm run test:dev
```

Next start the http server:

```bash
npm start
```

The ngx-seed demo application should now be availalbe at: [http://127.0.0.1:8080/](http://127.0.0.1:8080/). The port may differ if there is a conflict on 8080. See the output of the start command for the
available URLs.


