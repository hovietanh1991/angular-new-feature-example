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

### 5. `angular-zoneless-signal-standalone-on-push` example
It is zoneless Angular application with signal, Control Flow, standalone component, lazy loading (`angular-zoneless-signal-standalone` above) with:
- all component have change detection `ChangeDetectionStrategy.OnPush`

## Evaluation

### Comparison of file size:

<table style="text-align: end">
  <tr>
    <th>angular-classic</th>
    <th>angular-zoneless</th>
    <th>angular-zoneless-signal</th>
    <th>angular-zoneless-signal-standalone</th>
    <th>angular-zoneless-signal-standalone-on-push</th>
  </tr>
  <tr>
    <td>
      <code>34K polyfills-FFHMD2TL.js</code><br/>
      <code>293K main-KIFNAHGW.js</code><br/>
    </td>
    <td>
      <code>293K main-XC256VI3.js</code><br/>
    </td>
    <td>
      <code>286K main-PUMW4G4S.js</code><br/>
    </td>
    <td>
      <code>2.0K main-Y7UHI4UA.js</code><br/>
      <code>163 chunk-ZLAZWKF2.js</code><br/>
      <code>201 chunk-B4PYFJ4Q.js</code><br/>
      <code>3.4K chunk-Z4I427XL.js</code><br/>
      <code>170 chunk-RNFLJMYH.js</code><br/>
      <code>2.2K chunk-MMVJPAIM.js</code><br/>
      <code>2.3K chunk-LXB4KU3R.js</code><br/>
      <code>433 chunk-LN4KKNF4.js</code><br/>
      <code>139 chunk-JZLN75G2.js</code><br/>
      <code>31K chunk-JXTEMHM5.js</code><br/>
      <code>78K chunk-IHZLPP53.js</code><br/>
      <code>154K chunk-HODWOW25.js</code><br/>
      <code>3.8K chunk-EDFV3OTP.js</code><br/>
    </td>
    <td>
      <code>2.1K main-5NV45RZP.js</code><br/>
      <code>145 chunk-ZNXD5MK3.js</code><br/>
      <code>2.3K chunk-UPFHGQ54.js</code><br/>
      <code>176 chunk-TSZE6KY4.js</code><br/>
      <code>3.5K chunk-SMHDX6OY.js</code><br/>
      <code>207 chunk-QEHMABB6.js</code><br/>
      <code>2.2K chunk-OQP3KXAM.js</code><br/>
      <code>433 chunk-LN4KKNF4.js</code><br/>
      <code>169 chunk-JM4ATR5F.js</code><br/>
      <code>78K chunk-IHZLPP53.js</code><br/>
      <code>154K chunk-HODWOW25.js</code><br/>
      <code>31K chunk-HE7EJPHD.js</code><br/>
      <code>3.8K chunk-EDFV3OTP.js</code><br/>
    </td>
  </tr>
  <tr>
    <td>
      <code>total 356K</code>
    </td>
    <td>
      <code>total 320K</code>
    </td>
    <td>
      <code>total 312K</code>
    </td>
    <td>
      <code>total 317K</code>
    </td>
    <td>
      <code>total 317K</code>
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
    <th>angular-zoneless-signal-standalone</th>
    <th>angular-zoneless-signal-standalone-on-push</th>
  </tr>
  <tr>
    <td rowspan="5">
      <code>cart-page</code><br/>
      <div>(page with form input)</div>
    </td>
    <td>First Contentful Paint</td>
    <td><code>2.6 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.7 s</code></td>
    <td><code>2.7 s</code></td>
  </tr>
  <tr>
    <td>Largest Contentful Paint</td>
    <td><code>2.7 s</code></td>
    <td><code>2.6 s</code></td>
    <td><code>2.4 s</code></td>
    <td><code>2.8 s</code></td>
    <td><code>2.8 s</code></td>
  </tr>
  <tr>
    <td>Total Blocking Time</td>
    <td><code>10 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>10 ms</code></td>
    <td><code>10 ms</code></td>
  </tr>
  <tr>
    <td>Speed Index</td>
    <td><code>2.6 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.7 s</code></td>
    <td><code>2.7 s</code></td>
  </tr>
  <tr style="background-color: lightgray; font-weight: bold; color: black;">
    <td>Score</td>
    <td>0.92</td>
    <td>0.94</td>
    <td>0.95</td>
    <td>0.92</td>
    <td>0.92</td>
  </tr>
  <tr>
    <td rowspan="5">
      <code>product-list-page</code><br/>
      <div>(contains inline list of ~30 items)</div>
    </td>
    <td>First Contentful Paint</td>
    <td><code>2.6 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.7 s</code></td>
    <td><code>2.7 s</code></td>
  </tr>
  <tr>
    <td>Largest Contentful Paint</td>
    <td><code>2.7 s</code></td>
    <td><code>2.6 s</code></td>
    <td><code>2.4 s</code></td>
    <td><code>3.5 s</code></td>
    <td><code>2.8 s</code></td>
  </tr>
  <tr>
    <td>Total Blocking Time</td>
    <td><code>60 ms</code></td>
    <td><code>10 ms</code></td>
    <td><code>10 ms</code></td>
    <td><code>10 ms</code></td>
    <td><code>10 ms</code></td>
  </tr>
  <tr>
    <td>Speed Index</td>
    <td><code>2.6 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.7 s</code></td>
    <td><code>2.7 s</code></td>
  </tr>
  <tr style="background-color: lightgray; font-weight: bold; color: black;">
    <td>Score</td>
    <td>0.92</td>
    <td>0.94</td>
    <td>0.95</td>
    <td>0.87</td>
    <td>0.92</td>
  </tr>
  <tr>
    <td rowspan="5">
      <code>shipping-page</code><br/>
      <div>(contains list ~200 items fetched via http client)</div>
    </td>
    <td>First Contentful Paint</td>
    <td><code>2.6 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.7 s</code></td>
    <td><code>2.7 s</code></td>
  </tr>
  <tr>
    <td>Largest Contentful Paint</td>
    <td><code>2.9 s</code></td>
    <td><code>2.7 s</code></td>
    <td><code>2.6 s</code></td>
    <td><code>2.8 s</code></td>
    <td><code>2.8 s</code></td>
  </tr>
  <tr>
    <td>Total Blocking Time</td>
    <td><code>30 ms</code></td>
    <td><code>10 ms</code></td>
    <td><code>20 ms</code></td>
    <td><code>10 ms</code></td>
    <td><code>10 ms</code></td>
  </tr>
  <tr>
    <td>Speed Index</td>
    <td><code>2.6 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.3 s</code></td>
    <td><code>2.7 s</code></td>
    <td><code>2.7 s</code></td>
  </tr>
  <tr style="background-color: lightgray; font-weight: bold; color: black;">
    <td>Score</td>
    <td>0.91</td>
    <td>0.93</td>
    <td>0.94</td>
    <td>0.92</td>
    <td>0.92</td>
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
or in Windows
```sh
npm run angular-classic:test-performance:windows
```
- For `angular-zoneless`:
```sh
npm run angular-zoneless:test-performance
```
or in Windows
```sh
npm run angular-zoneless:test-performance:windows
```
- For `angular-zoneless-signal`:
```sh
npm run angular-zoneless-signal:test-performance
```
or in Windows
```sh
npm run angular-zoneless-signal:test-performance:windows
```
- For `angular-zoneless-signal-standalone`:
```sh
npm run angular-zoneless-signal-standalone:test-performance
```
or in Windows
```sh
npm run angular-zoneless-signal-standalone:test-performance:windows
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
