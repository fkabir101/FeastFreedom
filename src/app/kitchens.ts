export interface IKitchen {
  name: string;
  workingDays: [boolean];
  startHour: Number;
  endHour: Number;
  creator: String;
  imageLocation: String;
}

export interface IKitchenCreate {
  name: string;
  workingDays: [boolean];
  startHour: Number;
  endHour: Number;
  creator: String;
  kitchenImage: File;
  _id: string;
}
