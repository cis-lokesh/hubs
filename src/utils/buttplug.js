// import { buttplugInit, ButtplugWebsocketConnectorOptions, ButtplugClient } from "buttplug";

export const buttplugConnection = Buttplug => {
  Buttplug.buttplugInit().then(async () => {
    console.log("hello");
    const connector = new Buttplug.ButtplugWebsocketConnectorOptions();
    connector.address = "ws://127.0.0.1:12345";
    const client = new Buttplug.ButtplugClient("RDL");
    try {
      await client.connect(connector).catch(e => {
        console.log("=========connectorsuccess", e);
      });
      console.log("hello");
    } catch (ex) {
      console.log("-------------------------error", ex);
    }
    console.log("Connected!", client.Devices);
  });
};
