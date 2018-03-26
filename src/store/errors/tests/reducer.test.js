import reducer, { defaultError } from '../reducer';
import { currenciesFetchRequestFailure } from '../../currencies/actions';
import {
  favouritesFetchRequestFailure,
  favouritesAddRequestFailure,
  favouritesRemoveRequestFailure,
} from '../../favourites/actions';
import { errorsClearMessage } from '../actions';

describe('Errors Reducer', () => {
  it('should handle `errorsClearMessage` correctly', () => {
    const expected = {
      message: defaultError,
    };

    const actual = reducer(
      {
        message: defaultError,
      },
      errorsClearMessage()
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `favouritesFetchRequestFailure` correctly', () => {
    const errorMessage = 'Fetch failure!';
    const expected = {
      message: errorMessage,
    };

    const actual = reducer(
      {
        message: errorMessage,
      },
      favouritesFetchRequestFailure({ message: errorMessage })
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `favouritesAddRequestFailure` correctly', () => {
    const errorMessage = 'Fetch failure!';
    const expected = {
      message: errorMessage,
    };

    const actual = reducer(
      {
        message: errorMessage,
      },
      favouritesAddRequestFailure({ message: errorMessage })
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `favouritesRemoveRequestFailure` correctly', () => {
    const errorMessage = 'Fetch failure!';
    const expected = {
      message: errorMessage,
    };

    const actual = reducer(
      {
        message: errorMessage,
      },
      favouritesRemoveRequestFailure({ message: errorMessage })
    );

    expect(actual).toEqual(expected);
  });

  it('should handle `currenciesFetchRequestFailure` correctly', () => {
    const errorMessage = 'Fetch failure!';
    const expected = {
      message: errorMessage,
    };

    const actual = reducer(
      {
        message: errorMessage,
      },
      currenciesFetchRequestFailure({ message: errorMessage })
    );

    expect(actual).toEqual(expected);
  });
});
