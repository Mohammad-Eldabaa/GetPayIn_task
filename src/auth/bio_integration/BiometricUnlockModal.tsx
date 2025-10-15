import { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { handleBiometricAuth } from "./handleBiometricAuth";
import { ModalStyles } from "./modalStyle";

export default function BiometricUnlockModal({
  visible,
  onSuccess,
  setVisible,
}: {
  visible: boolean;
  onSuccess: () => void;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (visible) handleBiometricAuth({ setLoading, setError, onSuccess });
  }, [visible]);

  return (
    <View>
      <Modal visible={visible} transparent animationType="slide">
        <View style={ModalStyles.overlay}>
          <View style={ModalStyles.modalContainer}>
            <Text style={ModalStyles.title}>Biometric Authentication</Text>

            {loading ? (
              <ActivityIndicator
                size="large"
                style={ModalStyles.loadingIndicator}
              />
            ) : (
              <>
                <Text style={ModalStyles.description}>
                  Use your fingerprint or face to unlock
                </Text>
                {error ? (
                  <Text style={ModalStyles.errorText}>{error}</Text>
                ) : null}

                <TouchableOpacity
                  style={ModalStyles.tryAgainButton}
                  onPress={() => setVisible(false)}
                >
                  <Text style={ModalStyles.tryAgainText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
