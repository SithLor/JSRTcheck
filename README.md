# JSRTCheck
## installtion
```
npm i RTCheck
```

## usage
ESM 
```js
import RunTimeCheck from "RTcheck"
function app(s){
   new RunTimeCheck().CheckArgs(s,"number")
}
app("s")
```
CJS
```js
var a = require('rtcheck')
function app(s){
   new a.default().CheckArgs(s,"number")
}
app("s")
``` 
## info
CJS not get all the support as esm beacasue esm work on the browser
