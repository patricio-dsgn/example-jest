# Example unit Tests

Example of unit tests with node and jest

1. install __dependencies__ ```npm install```

2. install __jest__ ```npm install --save-dev jest```

3. install __babel__ ```npm install --save-dev @babel/core @babel/preset-env```

4. create __.eslintrc__
```
{
  "env": {
    "jest": true
  }
}
```

5. create __.babelrc__
```
{
  "presets": ["@babel/preset-env"]
}
```

6. add script en __package.json__ ```"test": "jest --verbose --coverage"```

7. run tests ```run test```

## Author

- [@patricio-dsgn](https://www.github.com/patricio-dsgn)

