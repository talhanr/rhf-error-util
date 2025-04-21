import { ReturnError } from "./types";

export const isEmpty = (obj: any) => {
    for(const _ in obj) return false;
    return true;
  }
  
  export const getError = (errors: any, name: string): ReturnError | undefined => {
    if(isEmpty(errors)) return;
    if(!name.includes(".")) return errors?.[name];
    
    const errorKeys = name.split(".");
    if(!(errorKeys[0] in errors)){
      return;
    }
    let result: any = errors[errorKeys[0]];
    errorKeys.shift();
    for(const key of errorKeys){
      result = result?.[key]
    }
    return result;
  }