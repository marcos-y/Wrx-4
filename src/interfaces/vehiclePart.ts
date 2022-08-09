export interface IVehiclePart {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  information: any;
  dataSheet: string;
  vehicleId: number;
  description: string;
  instructions: string[];
  renderModelFileName: string;
  instructionsFilePath: string;
}
