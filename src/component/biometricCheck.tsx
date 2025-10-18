import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { ModalStyles } from "../styles/ModalBiometricStyle";

export default function BiometricCheck({
  error,
  loading,
  setVisible,
}: {
  error: string;
  loading: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <View style={ModalStyles.modalContainer}>
      <Text style={ModalStyles.title}>Biometric Authentication</Text>

      {loading ? (
        <ActivityIndicator size="large" style={ModalStyles.loadingIndicator} />
      ) : (
        <>
          <Text style={ModalStyles.description}>
            Use your fingerprint or face to unlock
          </Text>
          {error ? <Text style={ModalStyles.errorText}>{error}</Text> : null}

          <TouchableOpacity
            style={ModalStyles.tryAgainButton}
            onPress={() => setVisible(false)}
          >
            <Text style={ModalStyles.tryAgainText}>Close</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
