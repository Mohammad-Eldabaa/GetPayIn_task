import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { WelcomeComponentStyle } from "../styles/WelcomCompoenetStyle";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export default function WelcomeComponent() {
  const [conected, setConnected] = useState<boolean>(true);
  const [change, setChange] = useState<boolean>(true);
  const selector = useSelector((store: RootState) => store.auth.user);
  let interval: NodeJS.Timeout = null;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, [change]);

  useEffect(() => {
    clearInterval(interval);
    interval = setInterval(() => {
      setChange(!change);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={WelcomeComponentStyle.container}>
      <Text style={WelcomeComponentStyle.WelcomMessage}>
        Hello {selector?.firstName || ""} 👋
      </Text>
      <View style={[WelcomeComponentStyle.onlineViweContainer]}>
        <View
          style={[
            WelcomeComponentStyle.onlineView,
            {
              backgroundColor: conected ? "#49df71ff" : "red",
              shadowColor: conected ? "#48d051ff" : "#e16c6cff",
            },
          ]}
        ></View>
      </View>
    </View>
  );
}
