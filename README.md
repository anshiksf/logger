# logger

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install LoggerComponent using `npm`;

```sh
$ [npm install | yarn add] logger
```

## Basic Use

Configure and load LoggerComponent in the application constructor
as shown below.

```ts
import {LoggerComponent, LoggerComponentOptions, DEFAULT_LOGGER_OPTIONS} from 'logger';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: LoggerComponentOptions = DEFAULT_LOGGER_OPTIONS;
    this.configure(LoggerComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(LoggerComponent);
    // ...
  }
  // ...
}
```
