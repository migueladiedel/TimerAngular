import { ToComaDecimalPipe } from './numericos.pipe';

describe('ToComaDecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new ToComaDecimalPipe();
    expect(pipe).toBeTruthy();
  });
});
