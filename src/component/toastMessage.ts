import Toast, { ToastType } from "react-native-toast-message";

export default function ShowToast({
  type,
  title,
  body,
}: {
  type: ToastType;
  title: string;
  body: string;
}) {
  console.log("show taost");
  Toast.show({
    type: type,
    text1: title,
    text2: body,
    visibilityTime: 2000,
  });
}
