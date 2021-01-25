import { TestBed } from '@angular/core/testing';

import { TestPageResolver } from './test-page.resolver';

describe('TestPageResolver', () => {
  let resolver: TestPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TestPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
