import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigation from "./src/routing/stack/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <AppNavigation />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
