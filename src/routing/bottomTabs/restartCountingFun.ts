import { AppState, AppStateStatus } from "react-native";
import { navigationRef } from "../stack/navigation";

let timer: NodeJS.Timeout | null = null;
let appState = AppState.currentState;

export const startInactivityTimer = (delay: number = 10000) => {
  const subscription = AppState.addEventListener(
    "change",
    (nextAppState: AppStateStatus) => {
      if (nextAppState === "background") {
        resetInactivityTimer(delay);
        console.log("onBackground");
      } else if (nextAppState === "active") {
        console.log("onActive");
        if (timer) clearTimeout(timer);
        timer = null;
      }
      appState = nextAppState;
    }
  );

  return () => {
    if (timer) clearTimeout(timer);
    console.log("end");
    subscription.remove();
  };
};

export const resetInactivityTimer = (delay: number = 10000) => {
  console.log("timerStarted");
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("10s of inactivity detected!");
    if (navigationRef.isReady()) {
      navigationRef.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  }, delay);
};
