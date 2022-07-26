
module.exports = class Error {
  constructor(param,msg,value){
    this._param = param
    this._msg = msg
    this._value = value
  }
  

  get param(){
    return this._param
  }

  get msg(){
    return this._msg
  }

  get value(){
    return this._value
  }

}