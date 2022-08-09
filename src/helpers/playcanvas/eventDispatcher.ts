import { EPlaycanvasEvents } from "../../playcanvas";

interface IPart {
  id: string | number;
  category: VehiclePartCategories;
  price: number;
  name: string;
  renderModelFileName: string;
}

// TO DO: Tiene que estar sync con el Back end
export enum VehiclePartCategories {
  ParagolpesDelanteros = "Paragolpes Delanteros",
  ParagolpesTraseros = "Paragolpes Traseros",
}

export const eventDispatcher = (eventType: EPlaycanvasEvents, part: IPart) => {
  var event;

  switch (eventType) {
    case EPlaycanvasEvents.SelectVehicle:
      event = {
        data: {
          type: EPlaycanvasEvents.SelectVehicle,
          // body: {
          //   vehicleModel:
          // }
        },
      };
      break;
    case EPlaycanvasEvents.AddVehiclePart:
      event = {
        data: {
          type: EPlaycanvasEvents.AddVehiclePart,
          body: {
            modelAssetName: part.renderModelFileName,
            partName: part.name,
          },
        },
      };
      break;
    case EPlaycanvasEvents.RemoveVehiclePart:
      event = {
        data: {
          type: EPlaycanvasEvents.RemoveVehiclePart,
          body: {
            partName: part.name,
          },
        },
      };
      break;
    case EPlaycanvasEvents.RemoveAllVehicleParts:
      event = {
        data: {
          type: EPlaycanvasEvents.RemoveAllVehicleParts,
        },
      };
      break;

    case EPlaycanvasEvents.TakeScreenshot:
      event = {
        data: {
          type: EPlaycanvasEvents.TakeScreenshot,
        },
      };
      break;
  }

  return event;
};
