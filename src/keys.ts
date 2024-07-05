import {BindingKey, CoreBindings} from '@loopback/core';
import {LoggerComponent} from './component';
import { Logger } from 'winston';

/**
 * Binding keys used by this component.
 */
export namespace LoggerComponentBindings {
  export const COMPONENT = BindingKey.create<LoggerComponent>(
    `${CoreBindings.COMPONENTS}.LoggerComponent`,
  );
}

export namespace LoggerBindings {
  export const LOGGER = BindingKey.create<Logger>('services.Logger');
}