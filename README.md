# ngx-seed

The ngx-seed is an seed project for Angular applications written in ES5. This project comes complete with SASS compliation and minification, SystemJS build tools for bundling the application JS into a single file, Grunt tasks for minification and compression of the final application JS bundles, npm for dependency management and build scripts, themeing of preinstalled design systems (Angular Material, Teradata Covalent), Internationalization (i18n), and JS unit testing and reporting with Karma, Jasmine, and Istanbul.

#### Building
Developers can perform code changes and easily build this project using **npm** from the root nifi-fds directory via:

```bash
npm run clean:install
```

or to build without running unit tests run:

```bash
npm run clean:install:skipTests
```

Developers can speed up development time by skipping the re-installation of all node_modules:

```bash
npm run dev:install
```

or to skip re-installation of node_modules as well as building without running unit tests:

```bash
npm run dev:install:skipTests
```

#### Running locally
Once built you can start the application from the target directory via:

```bash
cd target
npm start
```

The ngx-seed demo application should now be availalbe at: [http://127.0.0.1:8080/](http://127.0.0.1:8080/). The port may differ if there is a conflict on 8080. See the output of the start command for the
available URLs.


