import { IconButton } from "@components/common/IconButton";
import MoonIcon from "@components/common/Icons/MoonIcon";
import SunIcon from "@components/common/Icons/SunIcon";
import { useAppContext } from "@contexts/AppContext";

export default () => {
  const { darkMode, toggleDarkMode } = useAppContext();

  return (
    <IconButton
      color={"brand"}
      icon={darkMode ? SunIcon : MoonIcon}
      size={"xl"}
      px={"md"}
      cta
      rounded
      onPress={() => toggleDarkMode()}
    />
  );
};
