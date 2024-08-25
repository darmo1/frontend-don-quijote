import { tokenService } from "../services/token";


class tokenManager {
  tokenPromise: Promise<{}> | null;
  expires: number | null;

  constructor(){
    this.tokenPromise = null;
  }

  public getToken():Promise<{}>{
    if( this.tokenPromise ) {
      return this.tokenPromise.then(( data)=> {
        if( data.expiration < Date.now()) {
          return this._getNewToken()
        }else{
          return data
        }
      })
    }else{
      return this._getNewToken()
    }
  }


  private _getNewToken(): Promise<{}>{
    this.tokenPromise = tokenService()
    .then( data => ({
      ...data,
      expiration: Date.now() + data.expires_in * 1000 - 18000
    }))
    .catch( error => {
      this.tokenPromise = null;
      throw error
    });

    return this.tokenPromise
  }
}

export const tokenManagerInstance = new tokenManager();