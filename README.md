# Redux-Promise-Mock
Middleware meant to be used with Redux Promise that can be used to mock remote API calls with mock data.

This middleware will automatically return mock data whenever the API promise-based request executed via `redux-promise` (https://github.com/acdlite/redux-promise) throws an error.

## Basic Usage

Import `createMockMiddleware` wherever you create your Redux store middleware.
```js
import { createMockMiddleware } from 'redux-promise-mock';
```

Call the `createMockMiddleware`, passing it an object where the keys match action types that will be dispatched to your Redux reducers where you wish to mock the data that's returned.
```js
const mockData = createMockMiddleware({
  LOAD_CONTACT_DETAIL: {
    ID: 1,
    name: 'Eric',
    email: 'eric@email.com'
  },
  LOAD_CONTACT_LIST: [
    {
      ID: 1,
      name: 'Eric',
      email: 'eric@email.com'
    },
    {
      ID: 2,
      name: 'Hyun',
      email: 'hyun@email.com'
    }
  ]
});
```

Use Redux's `applyMiddleware` to attach your newly created `mockData` middleware.

```js
applyMiddleware(ReduxPromise, mockData);
```
