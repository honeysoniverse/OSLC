import { extendTheme } from "@chakra-ui/react";
import { Text as textStyles } from "./components/text";
import { Link as linkStyles } from "./components/link";

const theme = extendTheme({
  components: {
    Text: textStyles,
    Link: linkStyles,
  },
  styles: {
    global: {
      html: {
        scrollbarWidth: "none",
        height: "100%",
        // overflowY: "hidden",
        // overflowY: 'scroll',
        font: "roboto",
        whiteSpace: "inherit",
        wordBreak: "break-word",
        wordWrap: "break-word",
        textSizeAdjust: "100%",
        mozOsxFontSmoothing: "grayscale",
        webkitFontSmoothing: "antialiased",
      },
      body: {
        display: "flex",
        flexFlow: "column nowrap",
        height: "auto",
        margin: 0,
        minHeight: "100%",
        // overflow: "hidden",
      },
      "#root": {
        flex: 1,
        display: "flex",
        flexFlow: "column nowrap",
      },
    },
  },
  colors: {},
  sizes: {},
});

export default theme;
