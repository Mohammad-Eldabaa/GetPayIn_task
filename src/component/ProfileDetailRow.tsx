import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { ProfileStyles } from "../styles/ProfileStyles";
type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

export const DetailRow = ({
  icon,
  label,
  value,
}: {
  icon: MaterialIconName;
  label: string;
  value: string;
}) => (
  <View style={ProfileStyles.detailRow}>
    <MaterialIcons name={icon} size={18} color="#007BFF" />
    <View style={ProfileStyles.detailContent}>
      <Text style={ProfileStyles.detailLabel}>{label}</Text>
      <Text style={ProfileStyles.detailValue}>{value}</Text>
    </View>
  </View>
);
