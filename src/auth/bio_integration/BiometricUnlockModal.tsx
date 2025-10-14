import { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { handleBiometricAuth } from "./handleBiometricAuth";

export default function BiometricUnlockModal({
  visible,
  onSuccess,
}: {
  visible: boolean;
  onSuccess: () => {};
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (visible) handleBiometricAuth({ setLoading, setError, onSuccess });
  }, [visible]);

  return (
    <View>
      <Modal visible={visible} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 25,
              borderRadius: 16,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Biometric Authentication
            </Text>

            {loading ? (
              <ActivityIndicator size="large" style={{ marginVertical: 20 }} />
            ) : (
              <>
                <Text style={{ marginVertical: 10, color: "gray" }}>
                  Use your fingerprint or face to unlock
                </Text>
                {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    backgroundColor: "#007bff",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 8,
                  }}
                  onPress={() =>
                    handleBiometricAuth({ setLoading, setError, onSuccess })
                  }
                >
                  <Text style={{ color: "#fff" }}>Try Again</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
