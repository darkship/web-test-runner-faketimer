import { expect } from 'chai';
import sinon from 'sinon'

describe('<App>', () => {
  it('test is stuck', () => {
    const clock = sinon.useFakeTimers(Date.now());

    clock.tick(10000001)
    console.log('done');
    expect(true)
  });
});
