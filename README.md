[![npm version](http://img.shields.io/npm/v/@ntegral/ngx-universal-window.svg?style=flat)](https://npmjs.org/package/@ntegral/ngx-universal-window "View this project on npm")
[![Codecov Coverage](https://img.shields.io/codecov/c/github/ntegral/ngx-universal-window/master.svg?style=flat-square)](https://codecov.io/gh/ntegral/ngx-universal-window)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PM2PTQ6Z2XATQ&source=url)

<p align="center">
  <h3 align="center">
    @ntegral/ngx-universal-window
  </h3>

  <p align="center">
    Fix for: ReferenceError: window is not defined , angular universal
  </p>
</p>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)


## About

Angular Universal: ReferenceError: window is not defined. This error can be caused by a reference to the Window object if you are rendering your application from a server like Node.js. This error can also be caused by your code that references the Window object or any third-party module that references the Window object without having a defensive check against an undefined value of Window.


## Installation

```bash
npm install --save @ntegral/ngx-universal-window
```

## Getting Started

The simplest way to use `@ntegral/ngx-universal-window` is as follows: After you have added Server-side rendering to your angular project: Open the server.ts file and add the following lines of code before the app function. Note: your <project-name> will need to be replace with the name referenced in you angular.json file. It is typically the first object defined in the "projects": {} object.

```typescript
import { applyDomino } from '@ntegral/ngx-universal-window';

const BROWSER_DIR = join(process.cwd(), 'dist/<project-name>/browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

// ===== the code listed below is only for reference purposes //
// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express { ...

```

# Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Angular Universal](https://www.angular.io)

Copyright &copy; 2020 Ntegral Inc.