import { useEffect, useState } from "react";
import { View, Modal } from "react-native";
import { handleBiometricAuth } from "./handleBiometricAuth";
import { ModalStyles } from "../../styles/ModalBiometricStyle";
import BiometricCheck from "../../component/biometricCheck";

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
          <BiometricCheck
            error={error}
            loading={loading}
            setVisible={setVisible}
          />
        </View>
      </Modal>
    </View>
  );
}
