import { useEffect } from "react";
import * as Font from "expo-font";

type PrepareAppProps = {
  onPrepareDone?: () => void;
  onPrepareError?: (err: unknown) => void;
};

export const usePrepareApp = ({
  onPrepareDone,
  onPrepareError,
}: PrepareAppProps) => {
  useEffect(() => {
    async function prepare() {
      try {
        // load fonts
        await Font.loadAsync({
          KosugiMaru: require("../assets/fonts/KosugiMaru-Regular.ttf"),
          Coolvetica: require("../assets/fonts/coolvetica-regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
        onPrepareError && onPrepareError(e);
      } finally {
        onPrepareDone && onPrepareDone();
      }
    }

    prepare();
  }, []);
};
