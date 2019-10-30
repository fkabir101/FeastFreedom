export interface IMenu{
  name : string;
  vegi : boolean;
  price : Number;
  kitchen: String;
}

export interface IResponse{
  dbModel : {
    item : []
  };
}