import { windowWidth } from "./WindowSize";

const textFont = "Helvetica";

const eventCard = {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 5,
  marginHorizontal: windowWidth * 0.1,
  width: windowWidth * 0.8,
  marginVertical: Math.min(25, windowWidth * 0.1),
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.5,
  shadowRadius: 10,
  padding: 15,
};

export { textFont, eventCard };
