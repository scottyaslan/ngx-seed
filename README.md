# ngx-seed

The ngx-seed is an seed project for Angular applications written in ES5. This project comes complete with SASS compliation and minification, SystemJS build tools for bundling the application JS into a single file, Grunt tasks for minification and compression of the final application JS bundles, npm for dependency management and build scripts, themeing of preinstalled design systems (Angular Material, Teradata Covalent), Internationalization (i18n), and JS unit testing and reporting with Karma, Jasmine, and Istanbul. Changes made in the codebase will be automatically shown in the browser by Browsersync.

#### Requirements

Node JS v8.10.0+
NPM v5.6.0+

#### Running locally
Developers can perform code changes and see the changes automatically in the browser:

```bash
npm start
```

#### Running unit tests

```bash
npm test
```

The ngx-seed demo application should now be availalbe at: [http://127.0.0.1:8080/src/](http://127.0.0.1:8080/src/). The port may differ if there is a conflict on 8080. See the output of the start command for the available URLs.
