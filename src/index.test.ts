import { generateGuid } from './index';

describe('Tests', () => {
    test('returns a GUID', () => {
        expect(generateGuid()).toBeTruthy();
    })
});