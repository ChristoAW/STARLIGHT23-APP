import { extendTheme, theme as base } from "@chakra-ui/react";
import colors from "./colors";

const theme = {
    colors: colors,
    fonts: {
        heading: `Montserrat, ${base.fonts.heading}`,
        body: `Montserrat, ${base.fonts.body}`,
        exodus: `Exodus, ${base.fonts.body}`,
        montserrat: `Montserrat, ${base.fonts.heading}`
    }
};

export default extendTheme(theme);