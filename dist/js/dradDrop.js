import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "upload-drop-zone": {
        "height": 200,
        "borderWidth": 2,
        "marginBottom": 20,
        "color": "#ccc",
        "borderStyle": "dashed",
        "borderColor": "#ccc",
        "lineHeight": 200,
        "textAlign": "center"
    },
    "upload-drop-zonedrop": {
        "color": "#222",
        "borderColor": "#222"
    }
});