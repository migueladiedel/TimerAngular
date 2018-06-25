import { BancaCoreModule } from './banca-core.module';

describe('BancaCoreModule', () => {
  let bancaCoreModule: BancaCoreModule;

  beforeEach(() => {
    bancaCoreModule = new BancaCoreModule();
  });

  it('should create an instance', () => {
    expect(bancaCoreModule).toBeTruthy();
  });
});
