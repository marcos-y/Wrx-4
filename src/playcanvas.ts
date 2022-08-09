declare var document: any;

export enum EPlaycanvasEvents {
  IFrameReady = "IFrameReady",
  ParseData = "ParseData",
  StartGame = "StartGame",
  SelectVehicle = "Select vehicle",
  AddVehiclePart = "Add vehicle part",
  RemoveVehiclePart = "Remove vehicle part",
  RemoveAllVehicleParts = "Remove all vehicle parts",
  TakeScreenshot = "Take screenshot",
}

class Playcanvas {
  public iframeReady: boolean;
  private iframeContent: any;
  private messagesQueue: any[];

  constructor() {
    this.iframeReady = false;
    this.messagesQueue = [];
  }

  connectToIframe() {
    this.iframeContent = document.getElementById("game-iframe").contentWindow;

    // --- postMessage event handlers
    window.onmessage = this.parseMessage.bind(this);
  }

  parseMessage(event: any) {
    if (!event.data || !event.data.type) return;

    switch (event.data.type) {
      case EPlaycanvasEvents.IFrameReady:
        this.iframeReady = true;
        // --- send queue messages
        this.messagesQueue.forEach((message) => {
          this.sendMessage(message.type, message.data);
        });

        break;

      case EPlaycanvasEvents.StartGame:
        break;

      case EPlaycanvasEvents.SelectVehicle:
        this.sendMessage(EPlaycanvasEvents.SelectVehicle, event.data.body);
        break;

      case EPlaycanvasEvents.AddVehiclePart:
        this.sendMessage(EPlaycanvasEvents.AddVehiclePart, event.data.body);
        break;

      case EPlaycanvasEvents.RemoveVehiclePart:
        this.sendMessage(EPlaycanvasEvents.RemoveVehiclePart, event.data.body);
        break;

      case EPlaycanvasEvents.RemoveAllVehicleParts:
        this.sendMessage(EPlaycanvasEvents.RemoveAllVehicleParts);
        break;

      case EPlaycanvasEvents.TakeScreenshot:
        this.sendMessage(EPlaycanvasEvents.TakeScreenshot);
        break;
    }
  }

  sendMessage(type: EPlaycanvasEvents, data?: any) {
    // --- if we aren't ready, queue messages for sending later
    if (this.iframeReady === false) {
      this.messagesQueue.push({
        type,
        data,
      });

      return;
    }

    this.iframeContent.postMessage(
      {
        type,
        data,
      },
      "*"
    );
  }
}

export default Playcanvas;
