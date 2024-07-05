/**
* Interface defining the component's options object
*/
export interface LoggerComponentOptions {
  // Add the definitions here
  level?: 'info' | 'error' | 'warn' | 'log'
}

/**
* Default options for the component
*/
export const DEFAULT_LOGGER_OPTIONS: LoggerComponentOptions = {
  // Specify the values here

};
