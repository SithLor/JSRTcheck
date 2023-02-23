import RunTimeCheck from "JSRTcheck"
function app(s){
   new RunTimeCheck().CheckArgs(s,"number")
}
app("s")