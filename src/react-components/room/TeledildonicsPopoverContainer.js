// import React, { useEffect, useState } from "react";
import React from "react";
import { TeledildonicsPopoverButton } from "./TeledildonicsPopover";
// import { buttplugConnection } from "../../utils/buttplug";
// import { getMicrophonePresences } from "../../utils/microphone-presence";
// const Buttplug = window.Buttplug;
// export function userFromPresence(sessionId, presence, micPresences, mySessionId) {
//   const meta = presence.metas[presence.metas.length - 1];
//   const micPresence = micPresences.get(sessionId);
//   return { id: sessionId, isMe: mySessionId === sessionId, micPresence, ...meta };
// }

// function usePeopleList(presences, mySessionId, micUpdateFrequency = 500) {
//   const [people, setPeople] = useState([]);

//   useEffect(
//     () => {
//       let timeout;

//       function updateMicrophoneState() {
//         const micPresences = getMicrophonePresences();

//         setPeople(
//           Object.entries(presences).map(([id, presence]) => {
//             return userFromPresence(id, presence, micPresences, mySessionId);
//           })
//         );

//         timeout = setTimeout(updateMicrophoneState, micUpdateFrequency);
//       }

//       updateMicrophoneState();

//       return () => {
//         clearTimeout(timeout);
//       };
//     },
//     [presences, micUpdateFrequency, setPeople, mySessionId]
//   );

//   return people;
// }

export function TeledildonicsPopoverContainer({ presences, mySessionId }) {
  // const people = usePeopleList(presences, mySessionId);
  console.log("🚀 ~ file: ListGridPopover.js ~ line 8 ~ ListGridPopover ~ items");
  // const tools = document.createElement("script");
  // tools.setAttribute("src", "https://cdn.jsdelivr.net/npm/buttplug@1.0.1/dist/web/buttplug.min.js");
  // document.head.appendChild(tools);
  // tools.onload =
  // buttplugConnection(Buttplug);
  return <TeledildonicsPopoverButton />;
}
