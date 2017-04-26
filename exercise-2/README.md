# NuageNetworks

## Exercise #2

Given the following endpoints:

- GET /people

  Response:
  ```
  {
    data: [
      {
        id: '123',
        _links: '/people/123',
      },
      {
        id: '124',
        _links: '/people/124',
      },
      {
        id: '125',
        _links: '/people/125',
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
      name: 'John Smith'
    }
  }
  ```

Fetch all people names and print them. You may use any library to fetch data.
