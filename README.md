# Example unit Tests

Example of unit tests with node and jest

## install
1. install __dependencies__ ```npm install
2. run __tests__ ```run test```

## use
```bash

# jest
npm install --save-dev jest

# babel
npm install --save-dev @babel/core @babel/preset-env
```

create __.eslintrc__
```
{
  "env": {
    "jest": true
  }
}
```

create __.babelrc__
```
{
  "presets": ["@babel/preset-env"]
}
```

add script en __package.json__
```
"test": "jest --verbose --coverage"
```


## Author

- [@patricio-dsgn](https://www.github.com/patricio-dsgn)

