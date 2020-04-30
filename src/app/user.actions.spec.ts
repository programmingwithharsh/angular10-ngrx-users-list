import * as UserActions from './user.actions';

describe('User', () => {
  it('should create an instance', () => {
    expect(new UserActions.LoadUsers()).toBeTruthy();
  });
});
