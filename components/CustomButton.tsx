import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  handlePress: () => void;
  containerStyles?: string | null;
  textStyles?: string | null;
  isLoading: boolean;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles = null,
  textStyles = null,
  isLoading = false,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
