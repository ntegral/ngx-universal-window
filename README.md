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
- [Prerequisites](#prerequisites)
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

The simplest way to use `@ntegral/ngx-universal-window` is as follows: