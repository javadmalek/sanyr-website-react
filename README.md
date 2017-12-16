# SANYR

## Setup
1. Build to 'build' directory (it's ignored by git, see .gitignore)
`npm run build`
2. Start the express.js app`node server`
3. Start the project `npm start`
Open: [http://localhost:3000](url:http://localhost:3000)


##Scrits
```
  "scripts": {
    "start": "react-scripts start",
    "start:server": "node server",
    "build": "react-scripts build",
    "eject": "react-scripts eject",
    "test": "mocha test"
  },
```

## Structures and Routes
```
const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
    </Router>
);

```

## Docker Settings
1. Let’s create an image named sanyr-com:
`docker build -t sanyr-com .`
2. start a container named sanyr-com-instance at port 80.
`docker run -p 80:9000 --name sanyr-com-instance sanyr-com`

[REF](url:https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)

