import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const lightColors = {
  background: "#f0f0f0",
  text: "#000102ff",
};

const darkColors = {
  background: "#06213fff",
  text: "#ffffff",
};

const baseStyles = {
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 20,
  } as ViewStyle,
  title: {
    fontSize: 20,
    textAlign: "left",
    padding: 60,
  } as TextStyle,
  content: {
    fontSize: 25,
  } as TextStyle,
};

type StyleMenu = {
  container: ViewStyle;
  title: TextStyle;
  content: TextStyle;
};

export function getStyleMenu(isDarkMode: boolean): Record<keyof StyleMenu, any> {
  const theme = isDarkMode ? darkColors : lightColors;

  return StyleSheet.create({
    container: {
      ...baseStyles.container,
      backgroundColor: theme.background,
    },
    title: {
      ...baseStyles.title,
      color: theme.text,
    },
    content: {
      ...baseStyles.content,
      color: theme.text,
    },
  });
}



export const tabStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#050202ff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -5 },
    shadowRadius: 10,
  },
  tabIconContainer: {
    alignItems: "center",
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#007AFF",
    marginTop: 4,
  },
});
