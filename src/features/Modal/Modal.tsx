import { View, Text, TouchableOpacity } from "react-native";
import RNModal from "react-native-modal";
import { CloseIcon } from "../../assets/images/close-icon";

type ModalWrapperProps = {
  isVisible: boolean;
  children: React.ReactNode;
  title?: string;
  onPressClose?: () => void;
};
export const Modal = ({
  children,
  isVisible,
  title,
  onPressClose,
}: ModalWrapperProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      style={{ width: "100%", margin: 5 }}
      onBackdropPress={onPressClose}
    >
      <View className="bg-white min-h-[350] mt-auto rounded-t-lg w-full">
        <View className="py-2 px-4 border-b-gray-200 flex flex-row justify-between">
          <Text className="text-lg font-bold font-coolvetica text-gray-500">
            {title}
          </Text>
          <TouchableOpacity
            onPress={onPressClose}
            className="flex flex-row py-1 px-2 bg-gray-100 rounded-md"
          >
            <CloseIcon
              height={20}
              width={20}
              className="text-gray-700 my-auto "
            />
          </TouchableOpacity>
        </View>
        <View className="p-4">{children}</View>
      </View>
    </RNModal>
  );
};
