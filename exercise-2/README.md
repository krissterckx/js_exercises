# NuageNetworks

## Exercise #2

This exercise comes with a RESTful server that provides a list of names.

These are the available endpoints:

- GET /people

  Response:
  ```
  {
    data: [
      {
        id: '123',
        _link: '/people/123',
      },
      {
        id: '124',
        _link: '/people/124',
      },
      {
        id: '125',
        _link: '/people/125',
      },
      ...
    ]
  }
  ```

- GET /people/{id}

  response:
  ```
  {
    data: {
      id: '123',
      name: 'John Smith'
    }
  }
  ```

Write a javascript snippet that fetches every name and print it to console.

### Usage

To start the server, run from the root folder:

```
npm install
npm run exercise2
```

The server will be running on http://localhost:8080
