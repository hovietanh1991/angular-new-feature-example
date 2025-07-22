# Angular Zoneless + Performance test with lighthouse

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
      <code>34K polyfills-B6TNHZQ6.js</code><br/>
      <code>293K main-3BLSXEG7.js</code><br/>
    </td>
    <td>
      <code>294K main-7IJPOCNB.js</code><br/>
    </td>
    <td>
      <code>286K main-RQZBLXQQ.js</code><br/>
    </td>
    <td>
      <code>163B chunk-KQ5WRH7W.js</code><br/>
      <code>32K chunk-DHP3UIDE.js</code><br/>
      <code>170B chunk-VY2VKGKZ.js</code><br/>
      <code>2.1K chunk-DNYTLE73.js</code><br/>
      <code>3.4K chunk-DXUWDIRG.js</code><br/>
      <code>3.8K chunk-W6V5OBCH.js</code><br/>
      <code>139B chunk-U6ORIS4X.js</code><br/>
      <code>2.7K chunk-4MCLAGCM.js</code><br/>
      <code>78K chunk-RDPD7AOF.js</code><br/>
      <code>433B chunk-7TYJ4KZN.js</code><br/>
      <code>151K chunk-VNAQPNVC.js</code><br/>
      <code>3.4K main-C6JDNQZZ.js</code><br/>
      <code>201B chunk-GS34RG7H.js</code><br/>
    </td>
    <td>
      <code>3.5K main-7QR4ENFQ.js</code><br/>
      <code>32K chunk-XTU6KJKR.js</code><br/>
      <code>2.1K chunk-YMOXFPS5.js</code><br/>
      <code>176B chunk-BYZXTZKU.js</code><br/>
      <code>3.5K chunk-UF2VOHNU.js</code><br/>
      <code>3.8K chunk-W6V5OBCH.js</code><br/>
      <code>78K chunk-RDPD7AOF.js</code><br/>
      <code>145B chunk-3VJLUEFY.js</code><br/>
      <code>2.7K chunk-JRJUJ6IJ.js</code><br/>
      <code>433B chunk-7TYJ4KZN.js</code><br/>
      <code>151K chunk-VNAQPNVC.js</code><br/>
      <code>169B chunk-I22EZ55U.js</code><br/>
      <code>207B chunk-66SWXTDN.js</code><br/>
    </td>
  </tr>
  <tr>
    <td>
      <code>368K</code>
    </td>
    <td>
      <code>332K</code>
    </td>
    <td>
      <code>324K</code>
    </td>
    <td>
      <code>340K</code>
    </td>
    <td>
      <code>340K</code>
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
    <td><code>2.7 s</code></td>
    <td><code>2.8 s</code></td>
  </tr>
  <tr>
    <td>Total Blocking Time</td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
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
    <td><code>2.8 s</code></td>
    <td><code>2.8 s</code></td>
  </tr>
  <tr>
    <td>Total Blocking Time</td>
    <td><code>10 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
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
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
    <td><code>0 ms</code></td>
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

- **Zoneless mode** provides immediate performance improvements and reduces bundle size by eliminating zone.js overhead.
- **Signals and Control Flow syntax** lead to even better rendering performance and lighter main bundles, with faster contentful paints and lower blocking times.
- **Standalone components** and **lazy loading** aid in modularity and code splitting, although they introduce a small overhead (via chunks), they do not compromise total size significantly.
- **ChangeDetectionStrategy.OnPush**, while beneficial in some advanced apps, shows diminishing returns when Signals are already in use—suggesting it’s an optimization worth applying case-by-case.

### Recommendation
For modern Angular 18 projects:
- Favor **zoneless + Signals** for the best performance/maintainability balance.
- Adopt **standalone components and lazy loading** where scalable or modular design is needed.
- Use **OnPush** selectively for large, frequently updated UIs where fine-grained control of change detection is critical.


## Try it in local

(I used node 20.10.0 on Mac or Windows)

### Prerequisites

- node version `^18.19.1 || ^20.11.1 || ^22.0.0` for Angular 19.2 (see [Version compatibility](https://angular.dev/reference/versions))
- For performance test: [Chrome-Browser](https://www.google.com/chrome/us/download-chrome/) must be installed.

### Setup

Install dependencies:
```sh
npm i
```
### Run performance test for all project

There are 2 scripts written for Mac and Windows:
- `./scripts/mac/auto-serve-static-and-run-performance-test.sh`
- `./scripts/windows/auto-serve-static-and-run-performance-test.sh`

To run these script, the current folder should be direct inside desired script folder. For example for Mac:
- Go inside the folder: `cd ./scripts/mac`
- Start the script: `./auto-serve-static-and-run-performance-test.sh`

These scripts will execute the following steps for each project:
- Build project
- Start a server on localhost:4200 to serve these static files built from the previous step
- Trigger performance test on localhost:4200
- Stop the server

After all projects are tested successfully, 2 reports will be written under `./dist/lighthouse/`:
- `summarize-file-size.md`: File size of each project in total and for each file inside
- `summarize-performance-report.sh`: Summarization of performance of each projects on each page

These reports are written in .md format and can be used to update result in this README.md

### Run tasks manually on each single project

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
