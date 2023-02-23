/**
 * Explame 
 * 
 * `function d(i){`
 * 
 * `new RunCheck().CheckArgs(i,"object");`
 * 
 * `}`
 * 
 */
export default class RunCheck {
    CheckArgs(input: any, type: "string" | "number" | "object" | "void"|"boolen"): void {
      switch (type) {
        case "string":
          if (type !== typeof input) {
            throw new Error("Wrong Type");
          }
        case "number":
          if (type !== typeof input) {
            throw new Error("Wrong Type");
          }
        case "object":
          if (type !== typeof input) {
            throw new Error("Wrong Type");
          }
        case "boolen":
          if (type !== typeof input) {
            throw new Error("Wrong Type");
          }
        default:
          console.log(``);
      }
    }
}
  
