import { TemperaturePipePipe } from './temperature-pipe.pipe';

describe('TemperaturePipePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return correct temperature string', () => {
    const pipe = new TemperaturePipePipe();
    expect(pipe.transform(3)).toBe('+3 ℃');
    expect(pipe.transform(-3)).toBe('-3 ℃');
    expect(pipe.transform(0)).toBe('0 ℃');
  })
});