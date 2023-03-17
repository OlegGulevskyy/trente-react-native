import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { TouchableOpacity } from "react-native";
import { ArrowBackIcon } from "../../../../assets/images/arrow-back";

type ArrowBackProps = HeaderBackButtonProps & {
  onPress: () => void;
};
export const ArrowBack = ({ canGoBack, onPress }: ArrowBackProps) => {
  if (!canGoBack) return null;
  return (
    <TouchableOpacity onPress={onPress}>
      <ArrowBackIcon />
    </TouchableOpacity>
  );
};
