import * as LocalAuthentication from "expo-local-authentication";

export const handleBiometricAuth = async ({
  setError,
  setLoading,
  onSuccess,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  onSuccess: () => void;
}) => {
  setLoading(true);
  setError("");

  const hasHardware = await LocalAuthentication.hasHardwareAsync();
  const supported =
    await LocalAuthentication.supportedAuthenticationTypesAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();

  if (!hasHardware || !enrolled) {
    setError("Biometrics not available or not set up on this device.");
    setLoading(false);
    return;
  }

  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: "Unlock with Face ID / Fingerprint",
    fallbackLabel: "Use Passcode",
    disableDeviceFallback: false,
  });

  setLoading(false);

  if (result.success) {
    onSuccess();
  } else {
    setError("Authentication failed. Try again.");
  }
};
