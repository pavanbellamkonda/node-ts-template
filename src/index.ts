import { v4 as uuid } from 'uuid';

console.log('Hello World!', generateGuid());

export function generateGuid(): string {
  return uuid();
}