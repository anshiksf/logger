import {
  Application,
  injectable,
  Component,
  config,
  ContextTags,
  CoreBindings,
  inject
} from '@loopback/core';
import {LoggerBindings, LoggerComponentBindings} from './keys'
import {DEFAULT_LOGGER_OPTIONS, LoggerComponentOptions} from './types';
import winston, { Logger } from 'winston';

// Configure the binding for LoggerComponent
@injectable({tags: {[ContextTags.KEY]: LoggerComponentBindings.COMPONENT}})
export class LoggerComponent implements Component {
  private logger: Logger

  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
    @config()
    private options: LoggerComponentOptions = DEFAULT_LOGGER_OPTIONS,
  ) {
    this.logger = winston.createLogger({
      level: this.options.level || 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'application.log'})
      ]
    });

    // Bind the logger instance to the application context
    this.application.bind(LoggerBindings.LOGGER).to(this.logger);
  }
}
