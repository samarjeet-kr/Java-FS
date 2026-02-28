### What is react ?
 - React is a javascript library through which we can develop frontend application.

Commands to install react app
1. Using vite - `npm create vit@latest app_name`
2. Using CRA(Create React App) - `npx create-react-app app_name`

npm - node package manager
npx - node package execute

```jsx
// JSX = Javascript + XML
function App(){
  // js code
  return (
    <>
    <div>
      {/* write html tags */}
    </div>
    </>
  )
}

export default App
// rafce es7
```

Every jsx file should carry PascalCase naming convention

There are 2 types of component
1. Functional component [Majority]
2. functional class component [if we want to use OOP approach]


SPA - Single page application
SPA - 1 Component
App.jsx -> main.jsx -> index.html



### What is Hooks?
It is a function that makes DOM manipulation more easy.

e.g. - useState, useEffect, useReducer, useContext, useNavigate, useParams, useRef, useMemo, etc.

`npm  i react-router-dom@latest`


Command to start JSON server -
```bash
npx json-server --watch ./folder_name/file_name --port xxxx

npx json-server --watch ./data/db.json --port 8000
```

---
Client
react-router-dom
axios

### Axios
It is js lib through which we can handle http request and response objects using http methods e. get, post, put, delete.



`useParam()`
Used to grab id  on any path variable's value from URL.
So that we  can map the data those are associated with the path variable.



sync/async

