/**
 * This file represents a shared library, or a dir in a monorepo that holds definitions for the data and options shared between the worker and client
 */

/**
 * This defines the data structure for the job data, it can be email, invoice data,...
 */
export interface Payload {
  name: string;
}

/**
 * List of supported job types, i.e. queue names
 */
export enum JobCategory {
  TEST = 'test:queue'
}

/**
 * A list of job priorities
 */
export enum JobPriority {
  URGENT = 1,
  HIGH = 2,
  MEDIUM = 3,
  LOW = 4
}
