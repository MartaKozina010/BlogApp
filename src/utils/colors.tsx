import { isWhiteSpaceLike } from "typescript";

export type Color = keyof typeof colors;

export const colors = {
    "darkBlue": "#282938",
    "lightBlue": "#535460",
    "darkYellow": "#FCD980",
    "lightYellow": "#FDE4A6",
    "white": "white"
}

export const getContrastColor = (color: Color) => {
    switch (color) {
        case "darkBlue":
        case "lightBlue":
            return colors.white;
        default:
            return colors.darkBlue;
    }
}

