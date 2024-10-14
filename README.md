# Angular - New Feature Example

This project is to evaluate some new features of Angular: Control Flow, Signal, Standalone component, Zoneless, lazy loading.
These features will be integrated in an [Angular example application](https://v17.angular.io/guide/example-apps-list) in order.
At the end its effect (file size, performance) will be measured.

Because each example is a complete application, [NX Monorepo](https://nx.dev) is used to structure this project, in order to simplify number of repositories as well as to reduce the maintenance effort
([Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)).

## Project structure and examples

All example applications are under `apps` and the components for these example will be located under `libs/src/lib/ui`.

### 1. `angular-classic` example
The classic Angular application (see [Angular example application](https://v17.angular.io/guide/example-apps-list)) using ReactiveForm, standard routing with zone.js

### 2. `angular-zoneless` example
It is classic Angular application (`angular-classic` above) with some changes to apply zoneless feature:
- `provideExperimentalZonelessChangeDetection()` is used in `app.module.ts`
- `"polyfills": ["zone.js"]` was removed in `project.json`

### 3. `angular-zoneless-signal` example
It is zoneless Angular application (`angular-zoneless` above) with some replacements:
- `ReactiveForm`, `@Input`, `@Output` are replaced by `Signal`
- `*ngIf`, `*ngFor` are replaced by Control Flow `@if`, `@for`

### 4. `angular-zoneless-signal-standalone` example
It is zoneless Angular application with signal and Control Flow (`angular-zoneless-signal` above) with:
- migration to standalone component
- lazy loading

## Evaluation

### Comparison of file size:

<table style="text-align: end">
  <tr>
    <th>angular-classic</th>
    <th>angular-zoneless</th>
    <th>angular-zoneless-signal</th>
    <th>angular-zoneless-signal-standlone</th>
  </tr>
  <tr>
    <td>
      <code>296K	main-XH3UTMP6.js</code><br/>
      <code> 36K	polyfills-FFHMD2TL.js</code>
    </td>
    <td>
      <code>296K	main-FYSKULUK.js</code>
    </td>
    <td>
      <code>288K	main-5TOLPGTC.js</code>
    </td>
    <td>
      <code>4.0K	chunk-23XIXWZ2.js</code><br/>
      <code>4.0K	chunk-4IZOWU7I.js</code><br/>
      <code>4.0K	chunk-737NUATZ.js</code><br/>
      <code>156K	chunk-HODWOW25.js</code><br/>
      <code> 80K	chunk-IHZLPP53.js</code><br/>
      <code> 32K	chunk-IJNML35G.js</code><br/>
      <code>4.0K	chunk-JZLN75G2.js</code><br/>
      <code>4.0K	chunk-LN4KKNF4.js</code><br/>
      <code>4.0K	chunk-LXB4KU3R.js</code><br/>
      <code>4.0K	chunk-MG5HZAQE.js</code><br/>
      <code>4.0K	chunk-XDMJ3KUU.js</code><br/>
      <code>4.0K	chunk-ZATBXEEJ.js</code><br/>
      <code>4.0K	main-INA6TOXH.js</code><br/>
    </td>
  </tr>
  <tr>
    <td>
      <code>332K	total</code>
    </td>
    <td>
      <code>296K	total</code>
    </td>
    <td>
      <code>288K	total</code>
    </td>
    <td>
      <code>308K	total</code>
    </td>
  </tr>
</table>

### Comparison of loading time

In this project only following aspects will be considered to test loading time:
- [First Contentful Paint](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint)
- [Largest Contentful Paint](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint)
- [Total Blocking Time](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time)
- [Speed Index](https://developer.chrome.com/docs/lighthouse/performance/speed-index)
- [Performance score](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)

The [lighthouse framework](https://www.npmjs.com/package/lighthouse) is chosen to run performance test and generate reports automatically

Result:

<table style="text-align: end">
  <tr>
    <th>Page</th>
    <th>Performance</th>
    <th>angular-classic</th>
    <th>angular-zoneless</th>
    <th>angular-zoneless-signal</th>
    <th>angular-zoneless-signal-standlone</th>
  </tr>
  <tr>
    <td rowspan="5">
      <code>cart-page</code><br/>
      <div>(page with form input)</div>
    </td>
    <td>First Contentful Paint</td>
    <td><code>2.6s</code></td>
    <td><code>3.4s</code></td>
    <td><code>2.3s</code></td>
    <td><code>3.3s</code></td>
  </tr>
  <tr>
    <td>Largest Contentful Paint</td>
    <td><code>2.7s</code></td>
    <td><code>3.5s</code></td>
    <td><code>2.5s</code></td>
    <td><code>3.5s</code></td>
  </tr>
  <tr>
    <td>Total Blocking Time</td>
    <td><code>0ms</code></td>
    <td><code>70ms</code></td>
    <td><code>40ms</code></td>
    <td><code>50ms</code></td>
  </tr>
  <tr>
    <td>Speed Index</td>
    <td><code>2.6s</code></td>
    <td><code>3.4s</code></td>
    <td><code>2.3</code></td>
    <td><code>3.3s</code></td>
  </tr>
  <tr style="background-color: lightgray; font-weight: bold; color: black;">
    <td>Score</td>
    <td>92/100</td>
    <td>83/100</td>
    <td>95/100</td>
    <td>84/100</td>
  </tr>

  <tr>
    <td rowspan="5">
      <code>product-list-page</code><br/>
      <div>(contains inline list of ~30 items)</div>
    </td>
    <td>First Contentful Paint</td>
    <td><code>3.5s</code></td>
    <td><code>3.4s</code></td>
    <td><code>3.3s</code></td>
    <td><code>3.4s</code></td>
  </tr>
  <tr>
    <td>Largest Contentful Paint</td>
    <td><code>3.5s</code></td>
    <td><code>3.5s</code></td>
    <td><code>3.5s</code></td>
    <td><code>3.8s</code></td>
  </tr>
  <tr>
    <td>Total Blocking Time</td>
    <td><code>0ms</code></td>
    <td><code>140ms</code></td>
    <td><code>130ms</code></td>
    <td><code>70ms</code></td>
  </tr>
  <tr>
    <td>Speed Index</td>
    <td><code>3.5s</code></td>
    <td><code>3.4s</code></td>
    <td><code>3.3</code></td>
    <td><code>3.4s</code></td>
  </tr>
  <tr style="background-color: lightgray; font-weight: bold; color: black;">
    <td>Score</td>
    <td>84/100</td>
    <td>83/100</td>
    <td>83/100</td>
    <td>81/100</td>
  </tr>

  <tr>
    <td rowspan="5">
      <code>shipping-page</code><br/>
      <div>(contains list ~200 items fetched via http client)</div>
    </td>
    <td>First Contentful Paint</td>
    <td><code>2.6s</code></td>
    <td><code>2.3s</code></td>
    <td><code>3.3s</code></td>
    <td><code>2.7s</code></td>
  </tr>
  <tr>
    <td>Largest Contentful Paint</td>
    <td><code>2.9s</code></td>
    <td><code>2.7s</code></td>
    <td><code>3.8s</code></td>
    <td><code>3.0s</code></td>
  </tr>
  <tr>
    <td>Total Blocking Time</td>
    <td><code>10ms</code></td>
    <td><code>140ms</code></td>
    <td><code>180ms</code></td>
    <td><code>120ms</code></td>
  </tr>
  <tr>
    <td>Speed Index</td>
    <td><code>2.6s</code></td>
    <td><code>2.3s</code></td>
    <td><code>3.3</code></td>
    <td><code>2.7s</code></td>
  </tr>
  <tr style="background-color: lightgray; font-weight: bold; color: black;">
    <td>Score</td>
    <td>91/100</td>
    <td>92/100</td>
    <td>79/100</td>
    <td>89/100</td>
  </tr>
</table>
Cumulative Layout Shift is 0.004 and remains unchanged on all pages of all examples. 


## Conclusion

- Using zoneless can reduce the overall file size with minimal effort, but the performance of pages with form inputs will be negatively impacted.
- Using Signal + Control flow can optimize performance, but the rendering of large content (received via the http client) will be negatively impacted. Otherwise form validation with Signal must be implemented manually for now
- The use of standalone + lazy loading increases the total file size, but can optimize the loading time, as each page is loaded independently.

## Try it in local

(I used node 20.10.0 on MAC)

### Prerequisites

- node version `^18.19.1 || ^20.11.1 || ^22.0.0` for Angular 18.2 (see [Version compatibility](https://angular.dev/reference/versions))
- For performance test: [Chrome-Browser](https://www.google.com/chrome/us/download-chrome/) must be installed.

### Setup

Install dependencies:
```sh
npm i
```

### Run tasks

All necessary tasks are already defined in `scrips` in `package.json`. 

#### To run the dev server for each example:
- For `angular-classic`:
```sh
npm run angular-classic:serve
```
- For `angular-zoneless`:
```sh
npm run angular-zoneless:serve
```
- For `angular-zoneless-signal`:
```sh
npm run angular-zoneless-signal:serve
```
- For `angular-zoneless-signal-standalone`:
```sh
npm run angular-zoneless-signal-standalone:serve
```

All examples will be served in standard port: `localhost:4200`

#### To create a production bundle:
- For `angular-classic`:
```sh
npm run angular-classic:build
```
- For `angular-zoneless`:
```sh
npm run angular-zoneless:build
```
- For `angular-zoneless-signal`:
```sh
npm run angular-zoneless-signal:build
```
- For `angular-signal-standalone`:
```sh
npm run angular-signal-standalone:build
```

The bundle file of app will be located in `dist/apps/<app-name>`

#### To display file sizes
Alter creating production bundle file, the command bellow can be used to list all js-bundle file with size and the total size (command line for MAC)
- For `angular-classic`:
```sh
du -c -h dist/apps/angular-classic/browser/*.js
```
- For `angular-zoneless`:
```sh
du -c -h dist/apps/angular-zoneless/browser/*.js
```
- For `angular-zoneless-signal`:
```sh
du -c -h dist/apps/angular-zoneless-signal/browser/*.js
```
- For `angular-zoneless-signal-standalone`:
```sh
du -c -h dist/apps/angular-zoneless-signal-standalone/browser/*.js
```

#### To serve example as static files
NX provides built-in plugin `@nx/web:file-server` to serve application as static files (see `serve-static` task in each `project.json`)
- For `angular-classic`:
```sh
npm run angular-classic:serve-static
```
- For `angular-zoneless`:
```sh
npm run angular-zoneless:serve-static
```
- For `angular-zoneless-signal`:
```sh
npm run angular-zoneless-signal:serve-static
```
- For `angular-zoneless-signal-standalone`:
```sh
npm run angular-zoneless-signal-standalone:serve-static
```

#### To start performance test
By serving application as static file (start with commands `To serve example as static files` above) and using [lighthouse framework](https://www.npmjs.com/package/lighthouse) to test:
- For `angular-classic`:
```sh
npm run angular-classic:test-performance
```
- For `angular-zoneless`:
```sh
npm run angular-zoneless:test-performance
```
- For `angular-zoneless-signal`:
```sh
npm run angular-zoneless-signal:test-performance
```
- For `angular-zoneless-signal-standalone`:
```sh
npm run angular-zoneless-signal-standalone:test-performance
```

The test reports will be saved under `dist/lighthouse/<example name>/` 

## Do you want play more with this project?

### Prerequisites

Install nx CLI in local:
```sh
npm i --global nx
```

### Add new example

Use the plugin's generator to generate a new example under `/apps`:
```sh
npx nx g @nx/angular:app apps/my-new-example
```

### Add new lib
To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

All contributions via Pull Request are welcome!

-------

Author: Viet Anh Ho
