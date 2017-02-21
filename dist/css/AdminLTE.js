import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%"
    },
    "body": {
        "height": "100%",
        "fontFamily": "'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "fontWeight": "400",
        "overflowX": "hidden",
        "overflowY": "auto"
    },
    "layout-boxed html": {
        "height": "100%"
    },
    "layout-boxed body": {
        "height": "100%"
    },
    "wrapper": {
        "height": "100%",
        "position": "relative",
        "overflowX": "hidden",
        "overflowY": "auto"
    },
    "wrapper:before": {
        "content": " ",
        "display": "table"
    },
    "wrapper:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "layout-boxed wrapper": {
        "maxWidth": 1250,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "minHeight": "100%",
        "boxShadow": "0 0 8px rgba(0, 0, 0, 0.5)",
        "position": "relative"
    },
    "layout-boxed": {
        "background": "url('../img/boxed-bg.jpg') repeat fixed"
    },
    "content-wrapper": {
        "WebkitTransition": "-webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "MozTransition": "-moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "OTransition": "-o-transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "transition": "transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "marginLeft": 230,
        "zIndex": 800,
        "minHeight": "100%",
        "backgroundColor": "#ecf0f5"
    },
    "right-side": {
        "WebkitTransition": "-webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "MozTransition": "-moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "OTransition": "-o-transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "transition": "transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "marginLeft": 230,
        "zIndex": 800,
        "minHeight": "100%",
        "backgroundColor": "#ecf0f5"
    },
    "main-footer": {
        "WebkitTransition": "-webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "MozTransition": "-moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "OTransition": "-o-transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "transition": "transform 0.3s ease-in-out, margin 0.3s ease-in-out",
        "marginLeft": 230,
        "zIndex": 820,
        "background": "#fff",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "color": "#444",
        "borderTop": "1px solid #d2d6de"
    },
    "layout-top-nav content-wrapper": {
        "marginLeft": 0
    },
    "layout-top-nav right-side": {
        "marginLeft": 0
    },
    "layout-top-nav main-footer": {
        "marginLeft": 0
    },
    "fixed main-header": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "left": 0
    },
    "fixed main-sidebar": {
        "position": "fixed"
    },
    "fixed left-side": {
        "position": "fixed"
    },
    "fixed content-wrapper": {
        "paddingTop": 50
    },
    "fixed right-side": {
        "paddingTop": 50
    },
    "fixedlayout-boxed wrapper": {
        "maxWidth": "100%"
    },
    "bodyhold-transition content-wrapper": {
        "WebkitTransition": "none",
        "OTransition": "none",
        "transition": "none"
    },
    "bodyhold-transition right-side": {
        "WebkitTransition": "none",
        "OTransition": "none",
        "transition": "none"
    },
    "bodyhold-transition main-footer": {
        "WebkitTransition": "none",
        "OTransition": "none",
        "transition": "none"
    },
    "bodyhold-transition main-sidebar": {
        "WebkitTransition": "none",
        "OTransition": "none",
        "transition": "none"
    },
    "bodyhold-transition left-side": {
        "WebkitTransition": "none",
        "OTransition": "none",
        "transition": "none"
    },
    "bodyhold-transition main-header navbar": {
        "WebkitTransition": "none",
        "OTransition": "none",
        "transition": "none"
    },
    "bodyhold-transition main-header logo": {
        "WebkitTransition": "none",
        "OTransition": "none",
        "transition": "none"
    },
    "content": {
        "minHeight": 250,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginRight": "auto",
        "marginLeft": "auto"
    },
    "h1": {
        "fontFamily": "'Source Sans Pro', sans-serif"
    },
    "h2": {
        "fontFamily": "'Source Sans Pro', sans-serif"
    },
    "h3": {
        "fontFamily": "'Source Sans Pro', sans-serif"
    },
    "h4": {
        "fontFamily": "'Source Sans Pro', sans-serif"
    },
    "h5": {
        "fontFamily": "'Source Sans Pro', sans-serif"
    },
    "h6": {
        "fontFamily": "'Source Sans Pro', sans-serif"
    },
    "a": {
        "color": "#3c8dbc"
    },
    "a:hover": {
        "outline": "none",
        "textDecoration": "none",
        "color": "#72afd2"
    },
    "a:active": {
        "outline": "none",
        "textDecoration": "none",
        "color": "#72afd2"
    },
    "a:focus": {
        "outline": "none",
        "textDecoration": "none",
        "color": "#72afd2"
    },
    "page-header": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "fontSize": 22
    },
    "page-header > small": {
        "color": "#666",
        "display": "block",
        "marginTop": 5
    },
    "main-header": {
        "position": "relative",
        "maxHeight": 100,
        "zIndex": 1030
    },
    "main-header navbar": {
        "WebkitTransition": "margin-left 0.3s ease-in-out",
        "OTransition": "margin-left 0.3s ease-in-out",
        "transition": "margin-left 0.3s ease-in-out",
        "marginBottom": 0,
        "marginLeft": 230,
        "border": "none",
        "minHeight": 50,
        "borderRadius": 0
    },
    "layout-top-nav main-header navbar": {
        "marginLeft": 0
    },
    "main-header navbar-search-inputform-control": {
        "background": "rgba(255, 255, 255, 0.2)",
        "borderColor": "transparent"
    },
    "main-header navbar-search-inputform-control:focus": {
        "borderColor": "rgba(0, 0, 0, 0.1)",
        "background": "rgba(255, 255, 255, 0.9)"
    },
    "main-header navbar-search-inputform-control:active": {
        "borderColor": "rgba(0, 0, 0, 0.1)",
        "background": "rgba(255, 255, 255, 0.9)"
    },
    "main-header navbar-search-inputform-control::-moz-placeholder": {
        "color": "#ccc",
        "opacity": 1
    },
    "main-header navbar-search-inputform-control:-ms-input-placeholder": {
        "color": "#ccc"
    },
    "main-header navbar-search-inputform-control::-webkit-input-placeholder": {
        "color": "#ccc"
    },
    "main-header navbar-custom-menu": {
        "float": "right"
    },
    "main-header navbar-right": {
        "float": "right"
    },
    "main-header sidebar-toggle": {
        "float": "left",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "fontFamily": "fontAwesome"
    },
    "main-header sidebar-toggle:before": {
        "content": "\\f0c9"
    },
    "main-header sidebar-toggle:hover": {
        "color": "#fff"
    },
    "main-header sidebar-toggle:focus": {
        "background": "transparent"
    },
    "main-header sidebar-toggle:active": {
        "background": "transparent"
    },
    "main-header sidebar-toggle icon-bar": {
        "display": "none"
    },
    "main-header navbar nav > liuser > a > fa": {
        "marginRight": 5
    },
    "main-header navbar nav > liuser > a > glyphicon": {
        "marginRight": 5
    },
    "main-header navbar nav > liuser > a > ion": {
        "marginRight": 5
    },
    "main-header navbar nav > li > a > label": {
        "position": "absolute",
        "top": 9,
        "right": 7,
        "textAlign": "center",
        "fontSize": 9,
        "paddingTop": 2,
        "paddingRight": 3,
        "paddingBottom": 2,
        "paddingLeft": 3,
        "lineHeight": 0.9
    },
    "main-header logo": {
        "WebkitTransition": "width 0.3s ease-in-out",
        "OTransition": "width 0.3s ease-in-out",
        "transition": "width 0.3s ease-in-out",
        "display": "block",
        "float": "left",
        "height": 50,
        "fontSize": 20,
        "lineHeight": 50,
        "textAlign": "center",
        "width": 230,
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "fontWeight": "300",
        "overflow": "hidden"
    },
    "main-header logo logo-lg": {
        "display": "block"
    },
    "main-header logo logo-mini": {
        "display": "none"
    },
    "main-header navbar-brand": {
        "color": "#fff"
    },
    "content-header": {
        "position": "relative",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "content-header > h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 24
    },
    "content-header > h1 > small": {
        "fontSize": 15,
        "display": "inline-block",
        "paddingLeft": 4,
        "fontWeight": "300"
    },
    "content-header > breadcrumb": {
        "float": "right",
        "background": "transparent",
        "marginTop": 0,
        "marginBottom": 0,
        "fontSize": 12,
        "paddingTop": 7,
        "paddingRight": 5,
        "paddingBottom": 7,
        "paddingLeft": 5,
        "position": "absolute",
        "top": 15,
        "right": 10,
        "borderRadius": 2
    },
    "content-header > breadcrumb > li > a": {
        "color": "#444",
        "textDecoration": "none",
        "display": "inline-block"
    },
    "content-header > breadcrumb > li > a > fa": {
        "marginRight": 5
    },
    "content-header > breadcrumb > li > a > glyphicon": {
        "marginRight": 5
    },
    "content-header > breadcrumb > li > a > ion": {
        "marginRight": 5
    },
    "content-header > breadcrumb > li + li:before": {
        "content": "'>\\00a0'"
    },
    "navbar-toggle": {
        "color": "#fff",
        "border": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "main-sidebar": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "paddingTop": 50,
        "minHeight": "100%",
        "width": 230,
        "zIndex": 810,
        "WebkitTransition": "-webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out",
        "MozTransition": "-moz-transform 0.3s ease-in-out, width 0.3s ease-in-out",
        "OTransition": "-o-transform 0.3s ease-in-out, width 0.3s ease-in-out",
        "transition": "transform 0.3s ease-in-out, width 0.3s ease-in-out"
    },
    "left-side": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "paddingTop": 50,
        "minHeight": "100%",
        "width": 230,
        "zIndex": 810,
        "WebkitTransition": "-webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out",
        "MozTransition": "-moz-transform 0.3s ease-in-out, width 0.3s ease-in-out",
        "OTransition": "-o-transform 0.3s ease-in-out, width 0.3s ease-in-out",
        "transition": "transform 0.3s ease-in-out, width 0.3s ease-in-out"
    },
    "sidebar": {
        "paddingBottom": 10
    },
    "sidebar-form input:focus": {
        "borderColor": "transparent"
    },
    "user-panel": {
        "position": "relative",
        "width": "100%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "overflow": "hidden"
    },
    "user-panel:before": {
        "content": " ",
        "display": "table"
    },
    "user-panel:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "user-panel > image > img": {
        "width": "100%",
        "maxWidth": 45,
        "height": "auto"
    },
    "user-panel > info": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "lineHeight": 1,
        "position": "absolute",
        "left": 55
    },
    "user-panel > info > p": {
        "fontWeight": "600",
        "marginBottom": 9
    },
    "user-panel > info > a": {
        "textDecoration": "none",
        "paddingRight": 5,
        "marginTop": 3,
        "fontSize": 11
    },
    "user-panel > info > a > fa": {
        "marginRight": 3
    },
    "user-panel > info > a > ion": {
        "marginRight": 3
    },
    "user-panel > info > a > glyphicon": {
        "marginRight": 3
    },
    "sidebar-menu": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "whiteSpace": "nowrap",
        "overflow": "hidden"
    },
    "sidebar-menu > li": {
        "position": "relative",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "sidebar-menu > li > a": {
        "paddingTop": 12,
        "paddingRight": 5,
        "paddingBottom": 12,
        "paddingLeft": 15,
        "display": "block"
    },
    "sidebar-menu > li > a > fa": {
        "width": 20
    },
    "sidebar-menu > li > a > glyphicon": {
        "width": 20
    },
    "sidebar-menu > li > a > ion": {
        "width": 20
    },
    "sidebar-menu > li label": {
        "marginRight": 5
    },
    "sidebar-menu > li badge": {
        "marginRight": 5,
        "marginTop": 3
    },
    "sidebar-menu liheader": {
        "paddingTop": 10,
        "paddingRight": 25,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "fontSize": 12
    },
    "sidebar-menu li > a > fa-angle-left": {
        "width": "auto",
        "height": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginRight": 10,
        "position": "absolute",
        "top": "50%",
        "right": 10,
        "marginTop": -8
    },
    "sidebar-menu li > a > pull-right-container > fa-angle-left": {
        "width": "auto",
        "height": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginRight": 10
    },
    "sidebar-menu liactive > a > fa-angle-left": {
        "WebkitTransform": "rotate(-90deg)",
        "MsTransform": "rotate(-90deg)",
        "OTransform": "rotate(-90deg)",
        "transform": "rotate(-90deg)"
    },
    "sidebar-menu liactive > a > pull-right-container > fa-angle-left": {
        "WebkitTransform": "rotate(-90deg)",
        "MsTransform": "rotate(-90deg)",
        "OTransform": "rotate(-90deg)",
        "transform": "rotate(-90deg)"
    },
    "sidebar-menu liactive > treeview-menu": {
        "display": "block"
    },
    "sidebar-menu treeview-menu": {
        "display": "none",
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "sidebar-menu treeview-menu treeview-menu": {
        "paddingLeft": 20
    },
    "sidebar-menu treeview-menu > li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "sidebar-menu treeview-menu > li > a": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "display": "block",
        "fontSize": 14
    },
    "sidebar-menu treeview-menu > li > a > fa": {
        "width": 20
    },
    "sidebar-menu treeview-menu > li > a > glyphicon": {
        "width": 20
    },
    "sidebar-menu treeview-menu > li > a > ion": {
        "width": 20
    },
    "sidebar-menu treeview-menu > li > a > pull-right-container > fa-angle-left": {
        "width": "auto"
    },
    "sidebar-menu treeview-menu > li > a > pull-right-container > fa-angle-down": {
        "width": "auto"
    },
    "sidebar-menu treeview-menu > li > a > fa-angle-left": {
        "width": "auto"
    },
    "sidebar-menu treeview-menu > li > a > fa-angle-down": {
        "width": "auto"
    },
    "main-sidebar user-panel": {
        "whiteSpace": "nowrap",
        "overflow": "hidden"
    },
    "sidebar-menu > liheader": {
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "clip"
    },
    "sidebar-menu:hover": {
        "overflow": "visible"
    },
    "sidebar-form": {
        "overflow": "hidden",
        "textOverflow": "clip"
    },
    "sidebar-menu li > a": {
        "position": "relative"
    },
    "sidebar-menu li > a > pull-right-container": {
        "position": "absolute",
        "right": 10,
        "top": "50%",
        "marginTop": -7
    },
    "control-sidebar-bg": {
        "position": "fixed",
        "zIndex": 1000,
        "bottom": 0,
        "top": 0,
        "right": -230,
        "width": 230,
        "WebkitTransition": "right 0.3s ease-in-out",
        "OTransition": "right 0.3s ease-in-out",
        "transition": "right 0.3s ease-in-out"
    },
    "control-sidebar": {
        "top": 0,
        "right": -230,
        "width": 230,
        "WebkitTransition": "right 0.3s ease-in-out",
        "OTransition": "right 0.3s ease-in-out",
        "transition": "right 0.3s ease-in-out",
        "position": "absolute",
        "paddingTop": 50,
        "zIndex": 1010
    },
    "control-sidebar > tab-content": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15
    },
    "control-sidebarcontrol-sidebar-open": {
        "right": 0
    },
    "control-sidebarcontrol-sidebar-open + control-sidebar-bg": {
        "right": 0
    },
    "control-sidebar-open control-sidebar-bg": {
        "right": 0
    },
    "control-sidebar-open control-sidebar": {
        "right": 0
    },
    "nav-tabscontrol-sidebar-tabs > li:first-of-type > a": {
        "borderLeftWidth": 0
    },
    "nav-tabscontrol-sidebar-tabs > li:first-of-type > a:hover": {
        "borderLeftWidth": 0
    },
    "nav-tabscontrol-sidebar-tabs > li:first-of-type > a:focus": {
        "borderLeftWidth": 0
    },
    "nav-tabscontrol-sidebar-tabs > li > a": {
        "borderRadius": 0,
        "borderTop": "none",
        "borderRight": "none",
        "borderLeft": "1px solid transparent",
        "borderBottom": "1px solid transparent"
    },
    "nav-tabscontrol-sidebar-tabs > li > a:hover": {
        "borderTop": "none",
        "borderRight": "none",
        "borderLeft": "1px solid transparent",
        "borderBottom": "1px solid transparent"
    },
    "nav-tabscontrol-sidebar-tabs > li > a icon": {
        "fontSize": 16
    },
    "nav-tabscontrol-sidebar-tabs > liactive > a": {
        "borderTop": "none",
        "borderRight": "none",
        "borderBottom": "none"
    },
    "nav-tabscontrol-sidebar-tabs > liactive > a:hover": {
        "borderTop": "none",
        "borderRight": "none",
        "borderBottom": "none"
    },
    "nav-tabscontrol-sidebar-tabs > liactive > a:focus": {
        "borderTop": "none",
        "borderRight": "none",
        "borderBottom": "none"
    },
    "nav-tabscontrol-sidebar-tabs > liactive > a:active": {
        "borderTop": "none",
        "borderRight": "none",
        "borderBottom": "none"
    },
    "control-sidebar-heading": {
        "fontWeight": "400",
        "fontSize": 16,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "marginBottom": 10
    },
    "control-sidebar-subheading": {
        "display": "block",
        "fontWeight": "400",
        "fontSize": 14
    },
    "control-sidebar-menu": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": -15,
        "marginBottom": 0,
        "marginLeft": -15
    },
    "control-sidebar-menu > li > a": {
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15
    },
    "control-sidebar-menu > li > a:before": {
        "content": " ",
        "display": "table"
    },
    "control-sidebar-menu > li > a:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "control-sidebar-menu > li > a > control-sidebar-subheading": {
        "marginTop": 0
    },
    "control-sidebar-menu menu-icon": {
        "float": "left",
        "width": 35,
        "height": 35,
        "borderRadius": "50%",
        "textAlign": "center",
        "lineHeight": 35
    },
    "control-sidebar-menu menu-info": {
        "marginLeft": 45,
        "marginTop": 3
    },
    "control-sidebar-menu menu-info > control-sidebar-subheading": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "control-sidebar-menu menu-info > p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 11
    },
    "control-sidebar-menu progress": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "control-sidebar-dark": {
        "color": "#b8c7ce",
        "background": "#222d32"
    },
    "control-sidebar-dark + control-sidebar-bg": {
        "background": "#222d32"
    },
    "control-sidebar-dark nav-tabscontrol-sidebar-tabs": {
        "borderBottom": "#1c2529"
    },
    "control-sidebar-dark nav-tabscontrol-sidebar-tabs > li > a": {
        "background": "#181f23",
        "color": "#b8c7ce",
        "borderLeftColor": "#141a1d",
        "borderBottomColor": "#141a1d"
    },
    "control-sidebar-dark nav-tabscontrol-sidebar-tabs > li > a:hover": {
        "borderLeftColor": "#141a1d",
        "borderBottomColor": "#141a1d",
        "background": "#1c2529",
        "color": "#fff"
    },
    "control-sidebar-dark nav-tabscontrol-sidebar-tabs > li > a:focus": {
        "borderLeftColor": "#141a1d",
        "borderBottomColor": "#141a1d",
        "background": "#1c2529"
    },
    "control-sidebar-dark nav-tabscontrol-sidebar-tabs > li > a:active": {
        "background": "#1c2529"
    },
    "control-sidebar-dark nav-tabscontrol-sidebar-tabs > liactive > a": {
        "background": "#222d32",
        "color": "#fff"
    },
    "control-sidebar-dark nav-tabscontrol-sidebar-tabs > liactive > a:hover": {
        "background": "#222d32",
        "color": "#fff"
    },
    "control-sidebar-dark nav-tabscontrol-sidebar-tabs > liactive > a:focus": {
        "background": "#222d32",
        "color": "#fff"
    },
    "control-sidebar-dark nav-tabscontrol-sidebar-tabs > liactive > a:active": {
        "background": "#222d32",
        "color": "#fff"
    },
    "control-sidebar-dark control-sidebar-heading": {
        "color": "#fff"
    },
    "control-sidebar-dark control-sidebar-subheading": {
        "color": "#fff"
    },
    "control-sidebar-dark control-sidebar-menu > li > a:hover": {
        "background": "#1e282c"
    },
    "control-sidebar-dark control-sidebar-menu > li > a menu-info > p": {
        "color": "#b8c7ce"
    },
    "control-sidebar-light": {
        "color": "#5e5e5e",
        "background": "#f9fafc",
        "borderLeft": "1px solid #d2d6de"
    },
    "control-sidebar-light + control-sidebar-bg": {
        "background": "#f9fafc",
        "borderLeft": "1px solid #d2d6de"
    },
    "control-sidebar-light nav-tabscontrol-sidebar-tabs": {
        "borderBottom": "#d2d6de"
    },
    "control-sidebar-light nav-tabscontrol-sidebar-tabs > li > a": {
        "background": "#e8ecf4",
        "color": "#444444",
        "borderLeftColor": "#d2d6de",
        "borderBottomColor": "#d2d6de"
    },
    "control-sidebar-light nav-tabscontrol-sidebar-tabs > li > a:hover": {
        "borderLeftColor": "#d2d6de",
        "borderBottomColor": "#d2d6de",
        "background": "#eff1f7"
    },
    "control-sidebar-light nav-tabscontrol-sidebar-tabs > li > a:focus": {
        "borderLeftColor": "#d2d6de",
        "borderBottomColor": "#d2d6de",
        "background": "#eff1f7"
    },
    "control-sidebar-light nav-tabscontrol-sidebar-tabs > li > a:active": {
        "background": "#eff1f7"
    },
    "control-sidebar-light nav-tabscontrol-sidebar-tabs > liactive > a": {
        "background": "#f9fafc",
        "color": "#111"
    },
    "control-sidebar-light nav-tabscontrol-sidebar-tabs > liactive > a:hover": {
        "background": "#f9fafc",
        "color": "#111"
    },
    "control-sidebar-light nav-tabscontrol-sidebar-tabs > liactive > a:focus": {
        "background": "#f9fafc",
        "color": "#111"
    },
    "control-sidebar-light nav-tabscontrol-sidebar-tabs > liactive > a:active": {
        "background": "#f9fafc",
        "color": "#111"
    },
    "control-sidebar-light control-sidebar-heading": {
        "color": "#111"
    },
    "control-sidebar-light control-sidebar-subheading": {
        "color": "#111"
    },
    "control-sidebar-light control-sidebar-menu": {
        "marginLeft": -14
    },
    "control-sidebar-light control-sidebar-menu > li > a:hover": {
        "background": "#f4f4f5"
    },
    "control-sidebar-light control-sidebar-menu > li > a menu-info > p": {
        "color": "#5e5e5e"
    },
    "dropdown-menu": {
        "boxShadow": "none",
        "borderColor": "#eee"
    },
    "dropdown-menu > li > a": {
        "color": "#777"
    },
    "dropdown-menu > li > a > glyphicon": {
        "marginRight": 10
    },
    "dropdown-menu > li > a > fa": {
        "marginRight": 10
    },
    "dropdown-menu > li > a > ion": {
        "marginRight": 10
    },
    "dropdown-menu > li > a:hover": {
        "backgroundColor": "#e1e3e9",
        "color": "#333"
    },
    "dropdown-menu > divider": {
        "backgroundColor": "#eee"
    },
    "navbar-nav > notifications-menu > dropdown-menu": {
        "width": 280,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "top": "100%"
    },
    "navbar-nav > messages-menu > dropdown-menu": {
        "width": 280,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "top": "100%"
    },
    "navbar-nav > tasks-menu > dropdown-menu": {
        "width": 280,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "top": "100%"
    },
    "navbar-nav > notifications-menu > dropdown-menu > li": {
        "position": "relative"
    },
    "navbar-nav > messages-menu > dropdown-menu > li": {
        "position": "relative"
    },
    "navbar-nav > tasks-menu > dropdown-menu > li": {
        "position": "relative"
    },
    "navbar-nav > notifications-menu > dropdown-menu > liheader": {
        "borderTopLeftRadius": 4,
        "borderTopRightRadius": 4,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0,
        "backgroundColor": "#ffffff",
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10,
        "borderBottom": "1px solid #f4f4f4",
        "color": "#444444",
        "fontSize": 14
    },
    "navbar-nav > messages-menu > dropdown-menu > liheader": {
        "borderTopLeftRadius": 4,
        "borderTopRightRadius": 4,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0,
        "backgroundColor": "#ffffff",
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10,
        "borderBottom": "1px solid #f4f4f4",
        "color": "#444444",
        "fontSize": 14
    },
    "navbar-nav > tasks-menu > dropdown-menu > liheader": {
        "borderTopLeftRadius": 4,
        "borderTopRightRadius": 4,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0,
        "backgroundColor": "#ffffff",
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10,
        "borderBottom": "1px solid #f4f4f4",
        "color": "#444444",
        "fontSize": 14
    },
    "navbar-nav > notifications-menu > dropdown-menu > lifooter > a": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4,
        "fontSize": 12,
        "backgroundColor": "#fff",
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10,
        "borderBottom": "1px solid #eeeeee",
        "color": "#444 !important",
        "textAlign": "center"
    },
    "navbar-nav > messages-menu > dropdown-menu > lifooter > a": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4,
        "fontSize": 12,
        "backgroundColor": "#fff",
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10,
        "borderBottom": "1px solid #eeeeee",
        "color": "#444 !important",
        "textAlign": "center"
    },
    "navbar-nav > tasks-menu > dropdown-menu > lifooter > a": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4,
        "fontSize": 12,
        "backgroundColor": "#fff",
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10,
        "borderBottom": "1px solid #eeeeee",
        "color": "#444 !important",
        "textAlign": "center"
    },
    "navbar-nav > notifications-menu > dropdown-menu > lifooter > a:hover": {
        "textDecoration": "none",
        "fontWeight": "normal"
    },
    "navbar-nav > messages-menu > dropdown-menu > lifooter > a:hover": {
        "textDecoration": "none",
        "fontWeight": "normal"
    },
    "navbar-nav > tasks-menu > dropdown-menu > lifooter > a:hover": {
        "textDecoration": "none",
        "fontWeight": "normal"
    },
    "navbar-nav > notifications-menu > dropdown-menu > li menu": {
        "maxHeight": 200,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "overflowX": "hidden"
    },
    "navbar-nav > messages-menu > dropdown-menu > li menu": {
        "maxHeight": 200,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "overflowX": "hidden"
    },
    "navbar-nav > tasks-menu > dropdown-menu > li menu": {
        "maxHeight": 200,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "overflowX": "hidden"
    },
    "navbar-nav > notifications-menu > dropdown-menu > li menu > li > a": {
        "display": "block",
        "whiteSpace": "nowrap",
        "borderBottom": "1px solid #f4f4f4",
        "color": "#444444",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "navbar-nav > messages-menu > dropdown-menu > li menu > li > a": {
        "display": "block",
        "whiteSpace": "nowrap",
        "borderBottom": "1px solid #f4f4f4",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "navbar-nav > tasks-menu > dropdown-menu > li menu > li > a": {
        "display": "block",
        "whiteSpace": "nowrap",
        "borderBottom": "1px solid #f4f4f4",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "navbar-nav > notifications-menu > dropdown-menu > li menu > li > a:hover": {
        "background": "#f4f4f4",
        "textDecoration": "none"
    },
    "navbar-nav > messages-menu > dropdown-menu > li menu > li > a:hover": {
        "background": "#f4f4f4",
        "textDecoration": "none"
    },
    "navbar-nav > tasks-menu > dropdown-menu > li menu > li > a:hover": {
        "background": "#f4f4f4",
        "textDecoration": "none"
    },
    "navbar-nav > notifications-menu > dropdown-menu > li menu > li > a > glyphicon": {
        "width": 20
    },
    "navbar-nav > notifications-menu > dropdown-menu > li menu > li > a > fa": {
        "width": 20
    },
    "navbar-nav > notifications-menu > dropdown-menu > li menu > li > a > ion": {
        "width": 20
    },
    "navbar-nav > messages-menu > dropdown-menu > li menu > li > a > div > img": {
        "marginTop": "auto",
        "marginRight": 10,
        "marginBottom": "auto",
        "marginLeft": "auto",
        "width": 40,
        "height": 40
    },
    "navbar-nav > messages-menu > dropdown-menu > li menu > li > a > h4": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 45,
        "color": "#444444",
        "fontSize": 15,
        "position": "relative"
    },
    "navbar-nav > messages-menu > dropdown-menu > li menu > li > a > h4 > small": {
        "color": "#999999",
        "fontSize": 10,
        "position": "absolute",
        "top": 0,
        "right": 0
    },
    "navbar-nav > messages-menu > dropdown-menu > li menu > li > a > p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 45,
        "fontSize": 12,
        "color": "#888888"
    },
    "navbar-nav > messages-menu > dropdown-menu > li menu > li > a:before": {
        "content": " ",
        "display": "table"
    },
    "navbar-nav > messages-menu > dropdown-menu > li menu > li > a:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "navbar-nav > tasks-menu > dropdown-menu > li menu > li > a > h3": {
        "fontSize": 14,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "color": "#666666"
    },
    "navbar-nav > tasks-menu > dropdown-menu > li menu > li > a > progress": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "navbar-nav > user-menu > dropdown-menu": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0,
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderTopWidth": 0,
        "width": 280,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "navbar-nav > user-menu > dropdown-menu > user-body": {
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "borderBottom": "1px solid #f4f4f4",
        "borderTop": "1px solid #dddddd"
    },
    "navbar-nav > user-menu > dropdown-menu > liuser-header": {
        "height": 175,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "textAlign": "center"
    },
    "navbar-nav > user-menu > dropdown-menu > liuser-header > img": {
        "zIndex": 5,
        "height": 90,
        "width": 90,
        "border": "3px solid",
        "borderColor": "rgba(255, 255, 255, 0.2)"
    },
    "navbar-nav > user-menu > dropdown-menu > liuser-header > p": {
        "zIndex": 5,
        "color": "rgba(255, 255, 255, 0.8)",
        "fontSize": 17,
        "marginTop": 10
    },
    "navbar-nav > user-menu > dropdown-menu > liuser-header > p > small": {
        "display": "block",
        "fontSize": 12
    },
    "navbar-nav > user-menu > dropdown-menu > user-body:before": {
        "content": " ",
        "display": "table"
    },
    "navbar-nav > user-menu > dropdown-menu > user-body:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "navbar-nav > user-menu > dropdown-menu > user-body a": {
        "color": "#444 !important"
    },
    "navbar-nav > user-menu > dropdown-menu > user-footer": {
        "backgroundColor": "#f9f9f9",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "navbar-nav > user-menu > dropdown-menu > user-footer:before": {
        "content": " ",
        "display": "table"
    },
    "navbar-nav > user-menu > dropdown-menu > user-footer:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "navbar-nav > user-menu > dropdown-menu > user-footer btn-default": {
        "color": "#666666"
    },
    "navbar-nav > user-menu user-image": {
        "float": "left",
        "width": 25,
        "height": 25,
        "borderRadius": "50%",
        "marginRight": 10,
        "marginTop": -2
    },
    "open:not(dropup) > animated-dropdown-menu": {
        "backfaceVisibility": "visible !important",
        "WebkitAnimation": "flipInX 0.7s both",
        "OAnimation": "flipInX 0.7s both",
        "animation": "flipInX 0.7s both"
    },
    "navbar-custom-menu > navbar-nav > li": {
        "position": "relative"
    },
    "navbar-custom-menu > navbar-nav > li > dropdown-menu": {
        "position": "absolute",
        "right": 0,
        "left": "auto"
    },
    "form-control": {
        "borderRadius": 0,
        "boxShadow": "none",
        "borderColor": "#d2d6de"
    },
    "form-control:focus": {
        "borderColor": "#3c8dbc",
        "boxShadow": "none"
    },
    "form-control::-moz-placeholder": {
        "color": "#bbb",
        "opacity": 1
    },
    "form-control:-ms-input-placeholder": {
        "color": "#bbb",
        "opacity": 1
    },
    "form-control::-webkit-input-placeholder": {
        "color": "#bbb",
        "opacity": 1
    },
    "form-control:not(select)": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "form-grouphas-success label": {
        "color": "#00a65a"
    },
    "form-grouphas-success form-control": {
        "borderColor": "#00a65a",
        "boxShadow": "none"
    },
    "form-grouphas-success input-group-addon": {
        "borderColor": "#00a65a",
        "boxShadow": "none"
    },
    "form-grouphas-success help-block": {
        "color": "#00a65a"
    },
    "form-grouphas-warning label": {
        "color": "#f39c12"
    },
    "form-grouphas-warning form-control": {
        "borderColor": "#f39c12",
        "boxShadow": "none"
    },
    "form-grouphas-warning input-group-addon": {
        "borderColor": "#f39c12",
        "boxShadow": "none"
    },
    "form-grouphas-warning help-block": {
        "color": "#f39c12"
    },
    "form-grouphas-error label": {
        "color": "#dd4b39"
    },
    "form-grouphas-error form-control": {
        "borderColor": "#dd4b39",
        "boxShadow": "none"
    },
    "form-grouphas-error input-group-addon": {
        "borderColor": "#dd4b39",
        "boxShadow": "none"
    },
    "form-grouphas-error help-block": {
        "color": "#dd4b39"
    },
    "input-group input-group-addon": {
        "borderRadius": 0,
        "borderColor": "#d2d6de",
        "backgroundColor": "#fff"
    },
    "btn-group-vertical btnbtn-flat:first-of-type": {
        "borderRadius": 0
    },
    "btn-group-vertical btnbtn-flat:last-of-type": {
        "borderRadius": 0
    },
    "icheck > label": {
        "paddingLeft": 0
    },
    "form-control-feedbackfa": {
        "lineHeight": 34
    },
    "input-lg + form-control-feedbackfa": {
        "lineHeight": 46
    },
    "input-group-lg + form-control-feedbackfa": {
        "lineHeight": 46
    },
    "form-group-lg form-control + form-control-feedbackfa": {
        "lineHeight": 46
    },
    "input-sm + form-control-feedbackfa": {
        "lineHeight": 30
    },
    "input-group-sm + form-control-feedbackfa": {
        "lineHeight": 30
    },
    "form-group-sm form-control + form-control-feedbackfa": {
        "lineHeight": 30
    },
    "progress": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderRadius": 1
    },
    "progress > progress-bar": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderRadius": 1
    },
    "progress progress-bar": {
        "borderRadius": 1
    },
    "progress > progress-bar progress-bar": {
        "borderRadius": 1
    },
    "progresssm": {
        "height": 10,
        "borderRadius": 1
    },
    "progress-sm": {
        "height": 10,
        "borderRadius": 1
    },
    "progresssm progress-bar": {
        "borderRadius": 1
    },
    "progress-sm progress-bar": {
        "borderRadius": 1
    },
    "progressxs": {
        "height": 7,
        "borderRadius": 1
    },
    "progress-xs": {
        "height": 7,
        "borderRadius": 1
    },
    "progressxs progress-bar": {
        "borderRadius": 1
    },
    "progress-xs progress-bar": {
        "borderRadius": 1
    },
    "progressxxs": {
        "height": 3,
        "borderRadius": 1
    },
    "progress-xxs": {
        "height": 3,
        "borderRadius": 1
    },
    "progressxxs progress-bar": {
        "borderRadius": 1
    },
    "progress-xxs progress-bar": {
        "borderRadius": 1
    },
    "progressvertical": {
        "position": "relative",
        "width": 30,
        "height": 200,
        "display": "inline-block",
        "marginRight": 10
    },
    "progressvertical > progress-bar": {
        "width": "100%",
        "position": "absolute",
        "bottom": 0
    },
    "progressverticalsm": {
        "width": 20
    },
    "progressverticalprogress-sm": {
        "width": 20
    },
    "progressverticalxs": {
        "width": 10
    },
    "progressverticalprogress-xs": {
        "width": 10
    },
    "progressverticalxxs": {
        "width": 3
    },
    "progressverticalprogress-xxs": {
        "width": 3
    },
    "progress-group progress-text": {
        "fontWeight": "600"
    },
    "progress-group progress-number": {
        "float": "right"
    },
    "table tr > td progress": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "progress-bar-light-blue": {
        "backgroundColor": "#3c8dbc"
    },
    "progress-bar-primary": {
        "backgroundColor": "#3c8dbc"
    },
    "progress-striped progress-bar-light-blue": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-striped progress-bar-primary": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-green": {
        "backgroundColor": "#00a65a"
    },
    "progress-bar-success": {
        "backgroundColor": "#00a65a"
    },
    "progress-striped progress-bar-green": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-striped progress-bar-success": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-aqua": {
        "backgroundColor": "#00c0ef"
    },
    "progress-bar-info": {
        "backgroundColor": "#00c0ef"
    },
    "progress-striped progress-bar-aqua": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-striped progress-bar-info": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-yellow": {
        "backgroundColor": "#f39c12"
    },
    "progress-bar-warning": {
        "backgroundColor": "#f39c12"
    },
    "progress-striped progress-bar-yellow": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-striped progress-bar-warning": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-bar-red": {
        "backgroundColor": "#dd4b39"
    },
    "progress-bar-danger": {
        "backgroundColor": "#dd4b39"
    },
    "progress-striped progress-bar-red": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "progress-striped progress-bar-danger": {
        "backgroundImage": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "small-box": {
        "borderRadius": 2,
        "position": "relative",
        "display": "block",
        "marginBottom": 20,
        "boxShadow": "0 1px 1px rgba(0, 0, 0, 0.1)"
    },
    "small-box > inner": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "small-box > small-box-footer": {
        "position": "relative",
        "textAlign": "center",
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0,
        "color": "rgba(255, 255, 255, 0.8)",
        "display": "block",
        "zIndex": 10,
        "background": "rgba(0, 0, 0, 0.1)",
        "textDecoration": "none"
    },
    "small-box > small-box-footer:hover": {
        "color": "#fff",
        "background": "rgba(0, 0, 0, 0.15)"
    },
    "small-box h3": {
        "fontSize": 38,
        "fontWeight": "bold",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "whiteSpace": "nowrap",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "zIndex": 5
    },
    "small-box p": {
        "fontSize": 15,
        "zIndex": 5
    },
    "small-box p > small": {
        "display": "block",
        "color": "#f9f9f9",
        "fontSize": 13,
        "marginTop": 5
    },
    "small-box icon": {
        "WebkitTransition": "all 0.3s linear",
        "OTransition": "all 0.3s linear",
        "transition": "all 0.3s linear",
        "position": "absolute",
        "top": -10,
        "right": 10,
        "zIndex": 0,
        "fontSize": 90,
        "color": "rgba(0, 0, 0, 0.15)"
    },
    "small-box:hover": {
        "textDecoration": "none",
        "color": "#f9f9f9"
    },
    "small-box:hover icon": {
        "fontSize": 95
    },
    "box": {
        "position": "relative",
        "borderRadius": 3,
        "background": "#ffffff",
        "borderTop": "3px solid #d2d6de",
        "marginBottom": 20,
        "width": "100%",
        "boxShadow": "0 1px 1px rgba(0, 0, 0, 0.1)"
    },
    "boxbox-primary": {
        "borderTopColor": "#3c8dbc"
    },
    "boxbox-info": {
        "borderTopColor": "#00c0ef"
    },
    "boxbox-danger": {
        "borderTopColor": "#dd4b39"
    },
    "boxbox-warning": {
        "borderTopColor": "#f39c12"
    },
    "boxbox-success": {
        "borderTopColor": "#00a65a"
    },
    "boxbox-default": {
        "borderTopColor": "#d2d6de"
    },
    "boxcollapsed-box box-body": {
        "display": "none"
    },
    "boxcollapsed-box box-footer": {
        "display": "none"
    },
    "box nav-stacked > li": {
        "borderBottom": "1px solid #f4f4f4",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "box nav-stacked > li:last-of-type": {
        "borderBottom": "none"
    },
    "boxheight-control box-body": {
        "maxHeight": 300,
        "overflow": "auto"
    },
    "box border-right": {
        "borderRight": "1px solid #f4f4f4"
    },
    "box border-left": {
        "borderLeft": "1px solid #f4f4f4"
    },
    "boxbox-solid": {
        "borderTop": 0
    },
    "boxbox-solid > box-header btnbtn-default": {
        "background": "transparent"
    },
    "boxbox-solid > box-header btn:hover": {
        "background": "rgba(0, 0, 0, 0.1)"
    },
    "boxbox-solid > box-header a:hover": {
        "background": "rgba(0, 0, 0, 0.1)"
    },
    "boxbox-solidbox-default": {
        "border": "1px solid #d2d6de"
    },
    "boxbox-solidbox-default > box-header": {
        "color": "#444444",
        "background": "#d2d6de",
        "backgroundColor": "#d2d6de"
    },
    "boxbox-solidbox-default > box-header a": {
        "color": "#444444"
    },
    "boxbox-solidbox-default > box-header btn": {
        "color": "#444444"
    },
    "boxbox-solidbox-primary": {
        "border": "1px solid #3c8dbc"
    },
    "boxbox-solidbox-primary > box-header": {
        "color": "#ffffff",
        "background": "#3c8dbc",
        "backgroundColor": "#3c8dbc"
    },
    "boxbox-solidbox-primary > box-header a": {
        "color": "#ffffff"
    },
    "boxbox-solidbox-primary > box-header btn": {
        "color": "#ffffff"
    },
    "boxbox-solidbox-info": {
        "border": "1px solid #00c0ef"
    },
    "boxbox-solidbox-info > box-header": {
        "color": "#ffffff",
        "background": "#00c0ef",
        "backgroundColor": "#00c0ef"
    },
    "boxbox-solidbox-info > box-header a": {
        "color": "#ffffff"
    },
    "boxbox-solidbox-info > box-header btn": {
        "color": "#ffffff"
    },
    "boxbox-solidbox-danger": {
        "border": "1px solid #dd4b39"
    },
    "boxbox-solidbox-danger > box-header": {
        "color": "#ffffff",
        "background": "#dd4b39",
        "backgroundColor": "#dd4b39"
    },
    "boxbox-solidbox-danger > box-header a": {
        "color": "#ffffff"
    },
    "boxbox-solidbox-danger > box-header btn": {
        "color": "#ffffff"
    },
    "boxbox-solidbox-warning": {
        "border": "1px solid #f39c12"
    },
    "boxbox-solidbox-warning > box-header": {
        "color": "#ffffff",
        "background": "#f39c12",
        "backgroundColor": "#f39c12"
    },
    "boxbox-solidbox-warning > box-header a": {
        "color": "#ffffff"
    },
    "boxbox-solidbox-warning > box-header btn": {
        "color": "#ffffff"
    },
    "boxbox-solidbox-success": {
        "border": "1px solid #00a65a"
    },
    "boxbox-solidbox-success > box-header": {
        "color": "#ffffff",
        "background": "#00a65a",
        "backgroundColor": "#00a65a"
    },
    "boxbox-solidbox-success > box-header a": {
        "color": "#ffffff"
    },
    "boxbox-solidbox-success > box-header btn": {
        "color": "#ffffff"
    },
    "boxbox-solid > box-header > box-tools btn": {
        "border": 0,
        "boxShadow": "none"
    },
    "boxbox-solid[class*='bg'] > box-header": {
        "color": "#fff"
    },
    "box box-group > box": {
        "marginBottom": 5
    },
    "box knob-label": {
        "textAlign": "center",
        "color": "#333",
        "fontWeight": "100",
        "fontSize": 12,
        "marginBottom": 0.3
    },
    "box > overlay": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%"
    },
    "overlay-wrapper > overlay": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%"
    },
    "box > loading-img": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%"
    },
    "overlay-wrapper > loading-img": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%"
    },
    "box overlay": {
        "zIndex": 50,
        "background": "rgba(255, 255, 255, 0.7)",
        "borderRadius": 3
    },
    "overlay-wrapper overlay": {
        "zIndex": 50,
        "background": "rgba(255, 255, 255, 0.7)",
        "borderRadius": 3
    },
    "box overlay > fa": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "marginLeft": -15,
        "marginTop": -15,
        "color": "#000",
        "fontSize": 30
    },
    "overlay-wrapper overlay > fa": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "marginLeft": -15,
        "marginTop": -15,
        "color": "#000",
        "fontSize": 30
    },
    "box overlaydark": {
        "background": "rgba(0, 0, 0, 0.5)"
    },
    "overlay-wrapper overlaydark": {
        "background": "rgba(0, 0, 0, 0.5)"
    },
    "box-header:before": {
        "content": " ",
        "display": "table"
    },
    "box-body:before": {
        "content": " ",
        "display": "table"
    },
    "box-footer:before": {
        "content": " ",
        "display": "table"
    },
    "box-header:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "box-body:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "box-footer:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "box-header": {
        "color": "#444",
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "position": "relative"
    },
    "box-headerwith-border": {
        "borderBottom": "1px solid #f4f4f4"
    },
    "collapsed-box box-headerwith-border": {
        "borderBottom": "none"
    },
    "box-header > fa": {
        "display": "inline-block",
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1
    },
    "box-header > glyphicon": {
        "display": "inline-block",
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1
    },
    "box-header > ion": {
        "display": "inline-block",
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1
    },
    "box-header box-title": {
        "display": "inline-block",
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1
    },
    "box-header > box-tools": {
        "position": "absolute",
        "right": 10,
        "top": 5
    },
    "box-header > box-tools [data-toggle=\"tooltip\"]": {
        "position": "relative"
    },
    "box-header > box-toolspull-right dropdown-menu": {
        "right": 0,
        "left": "auto"
    },
    "box-header > box-tools dropdown-menu > li > a": {
        "color": "#444!important"
    },
    "btn-box-tool": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "fontSize": 12,
        "background": "transparent",
        "color": "#97a0b3"
    },
    "open btn-box-tool": {
        "color": "#606c84"
    },
    "btn-box-tool:hover": {
        "color": "#606c84"
    },
    "btn-box-toolbtn:active": {
        "boxShadow": "none"
    },
    "box-body": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "no-header box-body": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "box-body > table": {
        "marginBottom": 0
    },
    "box-body fc": {
        "marginTop": 5
    },
    "box-body full-width-chart": {
        "marginTop": -19,
        "marginRight": -19,
        "marginBottom": -19,
        "marginLeft": -19
    },
    "box-bodyno-padding full-width-chart": {
        "marginTop": -9,
        "marginRight": -9,
        "marginBottom": -9,
        "marginLeft": -9
    },
    "box-body box-pane": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 3
    },
    "box-body box-pane-right": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 0
    },
    "box-footer": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3,
        "borderTop": "1px solid #f4f4f4",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "backgroundColor": "#ffffff"
    },
    "chart-legend": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "box-comments": {
        "background": "#f7f7f7"
    },
    "box-comments box-comment": {
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 8,
        "paddingLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "box-comments box-comment:before": {
        "content": " ",
        "display": "table"
    },
    "box-comments box-comment:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "box-comments box-comment:last-of-type": {
        "borderBottom": 0
    },
    "box-comments box-comment:first-of-type": {
        "paddingTop": 0
    },
    "box-comments box-comment img": {
        "float": "left",
        "width": "30px !important",
        "height": "30px !important"
    },
    "box-comments comment-text": {
        "marginLeft": 40,
        "color": "#555"
    },
    "box-comments username": {
        "color": "#444",
        "display": "block",
        "fontWeight": "600"
    },
    "box-comments text-muted": {
        "fontWeight": "400",
        "fontSize": 12
    },
    "todo-list": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "overflow": "auto"
    },
    "todo-list > li": {
        "borderRadius": 2,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "background": "#f4f4f4",
        "marginBottom": 2,
        "borderLeft": "2px solid #e6e7e8",
        "color": "#444"
    },
    "todo-list > li:last-of-type": {
        "marginBottom": 0
    },
    "todo-list > li > input[type='checkbox']": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 5
    },
    "todo-list > li text": {
        "display": "inline-block",
        "marginLeft": 5,
        "fontWeight": "600"
    },
    "todo-list > li label": {
        "marginLeft": 10,
        "fontSize": 9
    },
    "todo-list > li tools": {
        "display": "none",
        "float": "right",
        "color": "#dd4b39"
    },
    "todo-list > li tools > fa": {
        "marginRight": 5,
        "cursor": "pointer"
    },
    "todo-list > li tools > glyphicon": {
        "marginRight": 5,
        "cursor": "pointer"
    },
    "todo-list > li tools > ion": {
        "marginRight": 5,
        "cursor": "pointer"
    },
    "todo-list > li:hover tools": {
        "display": "inline-block"
    },
    "todo-list > lidone": {
        "color": "#999"
    },
    "todo-list > lidone text": {
        "textDecoration": "line-through",
        "fontWeight": "500"
    },
    "todo-list > lidone label": {
        "background": "#d2d6de !important"
    },
    "todo-list danger": {
        "borderLeftColor": "#dd4b39"
    },
    "todo-list warning": {
        "borderLeftColor": "#f39c12"
    },
    "todo-list info": {
        "borderLeftColor": "#00c0ef"
    },
    "todo-list success": {
        "borderLeftColor": "#00a65a"
    },
    "todo-list primary": {
        "borderLeftColor": "#3c8dbc"
    },
    "todo-list handle": {
        "display": "inline-block",
        "cursor": "move",
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5
    },
    "chat": {
        "paddingTop": 5,
        "paddingRight": 20,
        "paddingBottom": 5,
        "paddingLeft": 10
    },
    "chat item": {
        "marginBottom": 10
    },
    "chat item:before": {
        "content": " ",
        "display": "table"
    },
    "chat item:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "chat item > img": {
        "width": 40,
        "height": 40,
        "border": "2px solid transparent",
        "borderRadius": "50%"
    },
    "chat item > online": {
        "border": "2px solid #00a65a"
    },
    "chat item > offline": {
        "border": "2px solid #dd4b39"
    },
    "chat item > message": {
        "marginLeft": 55,
        "marginTop": -40
    },
    "chat item > message > name": {
        "display": "block",
        "fontWeight": "600"
    },
    "chat item > attachment": {
        "borderRadius": 3,
        "background": "#f4f4f4",
        "marginLeft": 65,
        "marginRight": 15,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "chat item > attachment > h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "fontWeight": "600",
        "fontSize": 14
    },
    "chat item > attachment > p": {
        "fontWeight": "600",
        "fontSize": 13,
        "fontStyle": "italic",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "chat item > attachment > filename": {
        "fontWeight": "600",
        "fontSize": 13,
        "fontStyle": "italic",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "chat item > attachment:before": {
        "content": " ",
        "display": "table"
    },
    "chat item > attachment:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "box-input": {
        "maxWidth": 200
    },
    "modal panel-body": {
        "color": "#444"
    },
    "info-box": {
        "display": "block",
        "minHeight": 90,
        "background": "#fff",
        "width": "100%",
        "boxShadow": "0 1px 1px rgba(0, 0, 0, 0.1)",
        "borderRadius": 2,
        "marginBottom": 15
    },
    "info-box small": {
        "fontSize": 14
    },
    "info-box progress": {
        "background": "rgba(0, 0, 0, 0.2)",
        "marginTop": 5,
        "marginRight": -10,
        "marginBottom": 5,
        "marginLeft": -10,
        "height": 2,
        "borderRadius": 0
    },
    "info-box progress progress-bar": {
        "borderRadius": 0,
        "background": "#fff"
    },
    "info-box-icon": {
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 2,
        "display": "block",
        "float": "left",
        "height": 90,
        "width": 90,
        "textAlign": "center",
        "fontSize": 45,
        "lineHeight": 90,
        "background": "rgba(0, 0, 0, 0.2)"
    },
    "info-box-icon > img": {
        "maxWidth": "100%"
    },
    "info-box-content": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "marginLeft": 90
    },
    "info-box-number": {
        "display": "block",
        "fontWeight": "bold",
        "fontSize": 18
    },
    "progress-description": {
        "display": "block",
        "fontSize": 14,
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "info-box-text": {
        "display": "block",
        "fontSize": 14,
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "textTransform": "uppercase"
    },
    "info-box-more": {
        "display": "block"
    },
    "timeline": {
        "position": "relative",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "timeline:before": {
        "content": "''",
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "width": 4,
        "background": "#ddd",
        "left": 31,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderRadius": 2
    },
    "timeline > li": {
        "position": "relative",
        "marginRight": 10,
        "marginBottom": 15
    },
    "timeline > li:before": {
        "content": " ",
        "display": "table"
    },
    "timeline > li:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "timeline > li > timeline-item": {
        "WebkitBoxShadow": "0 1px 1px rgba(0, 0, 0, 0.1)",
        "boxShadow": "0 1px 1px rgba(0, 0, 0, 0.1)",
        "borderRadius": 3,
        "marginTop": 0,
        "background": "#fff",
        "color": "#444",
        "marginLeft": 60,
        "marginRight": 15,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "relative"
    },
    "timeline > li > timeline-item > time": {
        "color": "#999",
        "float": "right",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 12
    },
    "timeline > li > timeline-item > timeline-header": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#555",
        "borderBottom": "1px solid #f4f4f4",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 16,
        "lineHeight": 1.1
    },
    "timeline > li > timeline-item > timeline-header > a": {
        "fontWeight": "600"
    },
    "timeline > li > timeline-item > timeline-body": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "timeline > li > timeline-item > timeline-footer": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "timeline > li > fa": {
        "width": 30,
        "height": 30,
        "fontSize": 15,
        "lineHeight": 30,
        "position": "absolute",
        "color": "#666",
        "background": "#d2d6de",
        "borderRadius": "50%",
        "textAlign": "center",
        "left": 18,
        "top": 0
    },
    "timeline > li > glyphicon": {
        "width": 30,
        "height": 30,
        "fontSize": 15,
        "lineHeight": 30,
        "position": "absolute",
        "color": "#666",
        "background": "#d2d6de",
        "borderRadius": "50%",
        "textAlign": "center",
        "left": 18,
        "top": 0
    },
    "timeline > li > ion": {
        "width": 30,
        "height": 30,
        "fontSize": 15,
        "lineHeight": 30,
        "position": "absolute",
        "color": "#666",
        "background": "#d2d6de",
        "borderRadius": "50%",
        "textAlign": "center",
        "left": 18,
        "top": 0
    },
    "timeline > time-label > span": {
        "fontWeight": "600",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "display": "inline-block",
        "backgroundColor": "#fff",
        "borderRadius": 4
    },
    "timeline-inverse > li > timeline-item": {
        "background": "#f0f0f0",
        "border": "1px solid #ddd",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "timeline-inverse > li > timeline-item > timeline-header": {
        "borderBottomColor": "#ddd"
    },
    "btn": {
        "borderRadius": 3,
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "border": "1px solid transparent"
    },
    "btnuppercase": {
        "textTransform": "uppercase"
    },
    "btnbtn-flat": {
        "borderRadius": 0,
        "WebkitBoxShadow": "none",
        "MozBoxShadow": "none",
        "boxShadow": "none",
        "borderWidth": 1
    },
    "btn:active": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "MozBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
    },
    "btn:focus": {
        "outline": "none"
    },
    "btnbtn-file": {
        "position": "relative",
        "overflow": "hidden"
    },
    "btnbtn-file > input[type='file']": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "minWidth": "100%",
        "minHeight": "100%",
        "fontSize": 100,
        "textAlign": "right",
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "outline": "none",
        "background": "white",
        "cursor": "inherit",
        "display": "block"
    },
    "btn-default": {
        "backgroundColor": "#f4f4f4",
        "color": "#444",
        "borderColor": "#ddd"
    },
    "btn-default:hover": {
        "backgroundColor": "#e7e7e7"
    },
    "btn-default:active": {
        "backgroundColor": "#e7e7e7"
    },
    "btn-defaulthover": {
        "backgroundColor": "#e7e7e7"
    },
    "btn-primary": {
        "backgroundColor": "#3c8dbc",
        "borderColor": "#367fa9"
    },
    "btn-primary:hover": {
        "backgroundColor": "#367fa9"
    },
    "btn-primary:active": {
        "backgroundColor": "#367fa9"
    },
    "btn-primaryhover": {
        "backgroundColor": "#367fa9"
    },
    "btn-success": {
        "backgroundColor": "#00a65a",
        "borderColor": "#008d4c"
    },
    "btn-success:hover": {
        "backgroundColor": "#008d4c"
    },
    "btn-success:active": {
        "backgroundColor": "#008d4c"
    },
    "btn-successhover": {
        "backgroundColor": "#008d4c"
    },
    "btn-info": {
        "backgroundColor": "#00c0ef",
        "borderColor": "#00acd6"
    },
    "btn-info:hover": {
        "backgroundColor": "#00acd6"
    },
    "btn-info:active": {
        "backgroundColor": "#00acd6"
    },
    "btn-infohover": {
        "backgroundColor": "#00acd6"
    },
    "btn-danger": {
        "backgroundColor": "#dd4b39",
        "borderColor": "#d73925"
    },
    "btn-danger:hover": {
        "backgroundColor": "#d73925"
    },
    "btn-danger:active": {
        "backgroundColor": "#d73925"
    },
    "btn-dangerhover": {
        "backgroundColor": "#d73925"
    },
    "btn-warning": {
        "backgroundColor": "#f39c12",
        "borderColor": "#e08e0b"
    },
    "btn-warning:hover": {
        "backgroundColor": "#e08e0b"
    },
    "btn-warning:active": {
        "backgroundColor": "#e08e0b"
    },
    "btn-warninghover": {
        "backgroundColor": "#e08e0b"
    },
    "btn-outline": {
        "border": "1px solid #fff",
        "background": "transparent",
        "color": "#fff"
    },
    "btn-outline:hover": {
        "color": "rgba(255, 255, 255, 0.7)",
        "borderColor": "rgba(255, 255, 255, 0.7)"
    },
    "btn-outline:focus": {
        "color": "rgba(255, 255, 255, 0.7)",
        "borderColor": "rgba(255, 255, 255, 0.7)"
    },
    "btn-outline:active": {
        "color": "rgba(255, 255, 255, 0.7)",
        "borderColor": "rgba(255, 255, 255, 0.7)"
    },
    "btn-link": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn[class*='bg-']:hover": {
        "WebkitBoxShadow": "inset 0 0 100px rgba(0, 0, 0, 0.2)",
        "boxShadow": "inset 0 0 100px rgba(0, 0, 0, 0.2)"
    },
    "btn-app": {
        "borderRadius": 3,
        "position": "relative",
        "paddingTop": 15,
        "paddingRight": 5,
        "paddingBottom": 15,
        "paddingLeft": 5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 10,
        "minWidth": 80,
        "height": 60,
        "textAlign": "center",
        "color": "#666",
        "border": "1px solid #ddd",
        "backgroundColor": "#f4f4f4",
        "fontSize": 12
    },
    "btn-app > fa": {
        "fontSize": 20,
        "display": "block"
    },
    "btn-app > glyphicon": {
        "fontSize": 20,
        "display": "block"
    },
    "btn-app > ion": {
        "fontSize": 20,
        "display": "block"
    },
    "btn-app:hover": {
        "background": "#f4f4f4",
        "color": "#444",
        "borderColor": "#aaa"
    },
    "btn-app:active": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "MozBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
    },
    "btn-app:focus": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "MozBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
    },
    "btn-app > badge": {
        "position": "absolute",
        "top": -3,
        "right": -10,
        "fontSize": 10,
        "fontWeight": "400"
    },
    "callout": {
        "borderRadius": 3,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "paddingTop": 15,
        "paddingRight": 30,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "borderLeft": "5px solid #eee"
    },
    "callout a": {
        "color": "#fff",
        "textDecoration": "underline"
    },
    "callout a:hover": {
        "color": "#eee"
    },
    "callout h4": {
        "marginTop": 0,
        "fontWeight": "600"
    },
    "callout p:last-child": {
        "marginBottom": 0
    },
    "callout code": {
        "backgroundColor": "#fff"
    },
    "callout highlight": {
        "backgroundColor": "#fff"
    },
    "calloutcallout-danger": {
        "borderColor": "#c23321",
        "color": "#fff !important",
        "backgroundColor": "#dd4b39 !important"
    },
    "calloutcallout-warning": {
        "borderColor": "#c87f0a",
        "color": "#fff !important",
        "backgroundColor": "#f39c12 !important"
    },
    "calloutcallout-info": {
        "borderColor": "#0097bc",
        "color": "#fff !important",
        "backgroundColor": "#00c0ef !important"
    },
    "calloutcallout-success": {
        "borderColor": "#00733e",
        "color": "#fff !important",
        "backgroundColor": "#00a65a !important"
    },
    "alert": {
        "borderRadius": 3
    },
    "alert h4": {
        "fontWeight": "600"
    },
    "alert icon": {
        "marginRight": 10
    },
    "alert close": {
        "color": "#000",
        "opacity": 0.2,
        "filter": "alpha(opacity=20)"
    },
    "alert close:hover": {
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "alert a": {
        "color": "#fff",
        "textDecoration": "underline"
    },
    "alert-success": {
        "borderColor": "#008d4c",
        "color": "#fff !important",
        "backgroundColor": "#00a65a !important"
    },
    "alert-danger": {
        "borderColor": "#d73925",
        "color": "#fff !important",
        "backgroundColor": "#dd4b39 !important"
    },
    "alert-error": {
        "borderColor": "#d73925",
        "color": "#fff !important",
        "backgroundColor": "#dd4b39 !important"
    },
    "alert-warning": {
        "borderColor": "#e08e0b",
        "color": "#fff !important",
        "backgroundColor": "#f39c12 !important"
    },
    "alert-info": {
        "borderColor": "#00acd6",
        "color": "#fff !important",
        "backgroundColor": "#00c0ef !important"
    },
    "nav > li > a:hover": {
        "color": "#444",
        "background": "#f7f7f7"
    },
    "nav > li > a:active": {
        "color": "#444",
        "background": "#f7f7f7"
    },
    "nav > li > a:focus": {
        "color": "#444",
        "background": "#f7f7f7"
    },
    "nav-pills > li > a": {
        "borderRadius": 0,
        "borderTop": "3px solid transparent",
        "color": "#444"
    },
    "nav-pills > li > a > fa": {
        "marginRight": 5
    },
    "nav-pills > li > a > glyphicon": {
        "marginRight": 5
    },
    "nav-pills > li > a > ion": {
        "marginRight": 5
    },
    "nav-pills > liactive > a": {
        "borderTopColor": "#3c8dbc",
        "fontWeight": "600"
    },
    "nav-pills > liactive > a:hover": {
        "borderTopColor": "#3c8dbc"
    },
    "nav-pills > liactive > a:focus": {
        "borderTopColor": "#3c8dbc"
    },
    "nav-stacked > li > a": {
        "borderRadius": 0,
        "borderTop": 0,
        "borderLeft": "3px solid transparent",
        "color": "#444"
    },
    "nav-stacked > liactive > a": {
        "background": "transparent",
        "color": "#444",
        "borderTop": 0,
        "borderLeftColor": "#3c8dbc"
    },
    "nav-stacked > liactive > a:hover": {
        "background": "transparent",
        "color": "#444",
        "borderTop": 0,
        "borderLeftColor": "#3c8dbc"
    },
    "nav-stacked > liheader": {
        "borderBottom": "1px solid #ddd",
        "color": "#777",
        "marginBottom": 10,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "textTransform": "uppercase"
    },
    "nav-tabs-custom": {
        "marginBottom": 20,
        "background": "#fff",
        "boxShadow": "0 1px 1px rgba(0, 0, 0, 0.1)",
        "borderRadius": 3
    },
    "nav-tabs-custom > nav-tabs": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderBottomColor": "#f4f4f4",
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "nav-tabs-custom > nav-tabs > li": {
        "borderTop": "3px solid transparent",
        "marginBottom": -2,
        "marginRight": 5
    },
    "nav-tabs-custom > nav-tabs > li > a": {
        "color": "#444",
        "borderRadius": 0,
        "background": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "nav-tabs-custom > nav-tabs > li > atext-muted": {
        "color": "#999"
    },
    "nav-tabs-custom > nav-tabs > li > a:hover": {
        "background": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#999"
    },
    "nav-tabs-custom > nav-tabs > li:not(active) > a:hover": {
        "borderColor": "transparent"
    },
    "nav-tabs-custom > nav-tabs > li:not(active) > a:focus": {
        "borderColor": "transparent"
    },
    "nav-tabs-custom > nav-tabs > li:not(active) > a:active": {
        "borderColor": "transparent"
    },
    "nav-tabs-custom > nav-tabs > liactive": {
        "borderTopColor": "#3c8dbc"
    },
    "nav-tabs-custom > nav-tabs > liactive > a": {
        "backgroundColor": "#fff",
        "color": "#444",
        "borderTopColor": "transparent",
        "borderLeftColor": "#f4f4f4",
        "borderRightColor": "#f4f4f4"
    },
    "nav-tabs-custom > nav-tabs > liactive:hover > a": {
        "backgroundColor": "#fff",
        "color": "#444"
    },
    "nav-tabs-custom > nav-tabs > li:first-of-type": {
        "marginLeft": 0
    },
    "nav-tabs-custom > nav-tabs > li:first-of-typeactive > a": {
        "borderLeftColor": "transparent"
    },
    "nav-tabs-custom > nav-tabspull-right": {
        "float": "none !important"
    },
    "nav-tabs-custom > nav-tabspull-right > li": {
        "float": "right"
    },
    "nav-tabs-custom > nav-tabspull-right > li:first-of-type": {
        "marginRight": 0
    },
    "nav-tabs-custom > nav-tabspull-right > li:first-of-type > a": {
        "borderLeftWidth": 1
    },
    "nav-tabs-custom > nav-tabspull-right > li:first-of-typeactive > a": {
        "borderLeftColor": "#f4f4f4",
        "borderRightColor": "transparent"
    },
    "nav-tabs-custom > nav-tabs > liheader": {
        "lineHeight": 35,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "fontSize": 20,
        "color": "#444"
    },
    "nav-tabs-custom > nav-tabs > liheader > fa": {
        "marginRight": 5
    },
    "nav-tabs-custom > nav-tabs > liheader > glyphicon": {
        "marginRight": 5
    },
    "nav-tabs-custom > nav-tabs > liheader > ion": {
        "marginRight": 5
    },
    "nav-tabs-custom > tab-content": {
        "background": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "nav-tabs-custom dropdownopen > a:active": {
        "background": "transparent",
        "color": "#999"
    },
    "nav-tabs-custom dropdownopen > a:focus": {
        "background": "transparent",
        "color": "#999"
    },
    "nav-tabs-customtab-primary > nav-tabs > liactive": {
        "borderTopColor": "#3c8dbc"
    },
    "nav-tabs-customtab-info > nav-tabs > liactive": {
        "borderTopColor": "#00c0ef"
    },
    "nav-tabs-customtab-danger > nav-tabs > liactive": {
        "borderTopColor": "#dd4b39"
    },
    "nav-tabs-customtab-warning > nav-tabs > liactive": {
        "borderTopColor": "#f39c12"
    },
    "nav-tabs-customtab-success > nav-tabs > liactive": {
        "borderTopColor": "#00a65a"
    },
    "nav-tabs-customtab-default > nav-tabs > liactive": {
        "borderTopColor": "#d2d6de"
    },
    "pagination > li > a": {
        "background": "#fafafa",
        "color": "#666"
    },
    "paginationpagination-flat > li > a": {
        "borderRadius": "0 !important"
    },
    "products-list": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "products-list > item": {
        "borderRadius": 3,
        "WebkitBoxShadow": "0 1px 1px rgba(0, 0, 0, 0.1)",
        "boxShadow": "0 1px 1px rgba(0, 0, 0, 0.1)",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "background": "#fff"
    },
    "products-list > item:before": {
        "content": " ",
        "display": "table"
    },
    "products-list > item:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "products-list product-img": {
        "float": "left"
    },
    "products-list product-img img": {
        "width": 50,
        "height": 50
    },
    "products-list product-info": {
        "marginLeft": 60
    },
    "products-list product-title": {
        "fontWeight": "600"
    },
    "products-list product-description": {
        "display": "block",
        "color": "#999",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis"
    },
    "product-list-in-box > item": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderRadius": 0,
        "borderBottom": "1px solid #f4f4f4"
    },
    "product-list-in-box > item:last-of-type": {
        "borderBottomWidth": 0
    },
    "table > thead > tr > th": {
        "borderTop": "1px solid #f4f4f4",
        "borderBottom": "2px solid #f4f4f4"
    },
    "table > tbody > tr > th": {
        "borderTop": "1px solid #f4f4f4"
    },
    "table > tfoot > tr > th": {
        "borderTop": "1px solid #f4f4f4"
    },
    "table > thead > tr > td": {
        "borderTop": "1px solid #f4f4f4"
    },
    "table > tbody > tr > td": {
        "borderTop": "1px solid #f4f4f4"
    },
    "table > tfoot > tr > td": {
        "borderTop": "1px solid #f4f4f4"
    },
    "table tr td progress": {
        "marginTop": 5
    },
    "table-bordered": {
        "border": "1px solid #f4f4f4"
    },
    "table-bordered > thead > tr > th": {
        "border": "1px solid #f4f4f4",
        "borderBottomWidth": 2
    },
    "table-bordered > tbody > tr > th": {
        "border": "1px solid #f4f4f4"
    },
    "table-bordered > tfoot > tr > th": {
        "border": "1px solid #f4f4f4"
    },
    "table-bordered > thead > tr > td": {
        "border": "1px solid #f4f4f4",
        "borderBottomWidth": 2
    },
    "table-bordered > tbody > tr > td": {
        "border": "1px solid #f4f4f4"
    },
    "table-bordered > tfoot > tr > td": {
        "border": "1px solid #f4f4f4"
    },
    "tableno-border": {
        "border": 0
    },
    "tableno-border td": {
        "border": 0
    },
    "tableno-border th": {
        "border": 0
    },
    "tabletext-center": {
        "textAlign": "center"
    },
    "tabletext-center td": {
        "textAlign": "center"
    },
    "tabletext-center th": {
        "textAlign": "center"
    },
    "tablealign th": {
        "textAlign": "left"
    },
    "tablealign td": {
        "textAlign": "right"
    },
    "label-default": {
        "backgroundColor": "#d2d6de",
        "color": "#444"
    },
    "direct-chat box-body": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0,
        "position": "relative",
        "overflowX": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "direct-chatchat-pane-open direct-chat-contacts": {
        "WebkitTransform": "translate(0, 0)",
        "MsTransform": "translate(0, 0)",
        "OTransform": "translate(0, 0)",
        "transform": "translate(0, 0)"
    },
    "direct-chat-messages": {
        "WebkitTransform": "translate(0, 0)",
        "MsTransform": "translate(0, 0)",
        "OTransform": "translate(0, 0)",
        "transform": "translate(0, 0)",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "height": 250,
        "overflow": "auto",
        "WebkitTransition": "-webkit-transform 0.5s ease-in-out",
        "MozTransition": "-moz-transform 0.5s ease-in-out",
        "OTransition": "-o-transform 0.5s ease-in-out",
        "transition": "transform 0.5s ease-in-out"
    },
    "direct-chat-msg": {
        "display": "block",
        "marginBottom": 10
    },
    "direct-chat-text": {
        "display": "block",
        "borderRadius": 5,
        "position": "relative",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "background": "#d2d6de",
        "border": "1px solid #d2d6de",
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 50,
        "color": "#444444"
    },
    "direct-chat-msg:before": {
        "content": " ",
        "display": "table"
    },
    "direct-chat-msg:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "direct-chat-contacts": {
        "WebkitTransition": "-webkit-transform 0.5s ease-in-out",
        "MozTransition": "-moz-transform 0.5s ease-in-out",
        "OTransition": "-o-transform 0.5s ease-in-out",
        "transition": "transform 0.5s ease-in-out",
        "WebkitTransform": "translate(101%, 0)",
        "MsTransform": "translate(101%, 0)",
        "OTransform": "translate(101%, 0)",
        "transform": "translate(101%, 0)",
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "height": 250,
        "width": "100%",
        "background": "#222d32",
        "color": "#fff",
        "overflow": "auto"
    },
    "direct-chat-text:after": {
        "position": "absolute",
        "right": "100%",
        "top": 15,
        "border": "solid transparent",
        "borderRightColor": "#d2d6de",
        "content": "' '",
        "height": 0,
        "width": 0,
        "pointerEvents": "none",
        "borderWidth": 5,
        "marginTop": -5
    },
    "direct-chat-text:before": {
        "position": "absolute",
        "right": "100%",
        "top": 15,
        "border": "solid transparent",
        "borderRightColor": "#d2d6de",
        "content": "' '",
        "height": 0,
        "width": 0,
        "pointerEvents": "none",
        "borderWidth": 6,
        "marginTop": -6
    },
    "right direct-chat-text": {
        "marginRight": 50,
        "marginLeft": 0
    },
    "right direct-chat-text:after": {
        "right": "auto",
        "left": "100%",
        "borderRightColor": "transparent",
        "borderLeftColor": "#d2d6de"
    },
    "right direct-chat-text:before": {
        "right": "auto",
        "left": "100%",
        "borderRightColor": "transparent",
        "borderLeftColor": "#d2d6de"
    },
    "direct-chat-img": {
        "borderRadius": "50%",
        "float": "left",
        "width": 40,
        "height": 40
    },
    "right direct-chat-img": {
        "float": "right"
    },
    "direct-chat-info": {
        "display": "block",
        "marginBottom": 2,
        "fontSize": 12
    },
    "direct-chat-name": {
        "fontWeight": "600"
    },
    "direct-chat-timestamp": {
        "color": "#999"
    },
    "direct-chat-contacts-open direct-chat-contacts": {
        "WebkitTransform": "translate(0, 0)",
        "MsTransform": "translate(0, 0)",
        "OTransform": "translate(0, 0)",
        "transform": "translate(0, 0)"
    },
    "contacts-list > li": {
        "borderBottom": "1px solid rgba(0, 0, 0, 0.2)",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "contacts-list > li:before": {
        "content": " ",
        "display": "table"
    },
    "contacts-list > li:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "contacts-list > li:last-of-type": {
        "borderBottom": "none"
    },
    "contacts-list-img": {
        "borderRadius": "50%",
        "width": 40,
        "float": "left"
    },
    "contacts-list-info": {
        "marginLeft": 45,
        "color": "#fff"
    },
    "contacts-list-name": {
        "display": "block",
        "fontWeight": "600"
    },
    "contacts-list-status": {
        "display": "block",
        "fontSize": 12
    },
    "contacts-list-date": {
        "color": "#aaa",
        "fontWeight": "normal"
    },
    "contacts-list-msg": {
        "color": "#999"
    },
    "direct-chat-danger right > direct-chat-text": {
        "background": "#dd4b39",
        "borderColor": "#dd4b39",
        "color": "#ffffff"
    },
    "direct-chat-danger right > direct-chat-text:after": {
        "borderLeftColor": "#dd4b39"
    },
    "direct-chat-danger right > direct-chat-text:before": {
        "borderLeftColor": "#dd4b39"
    },
    "direct-chat-primary right > direct-chat-text": {
        "background": "#3c8dbc",
        "borderColor": "#3c8dbc",
        "color": "#ffffff"
    },
    "direct-chat-primary right > direct-chat-text:after": {
        "borderLeftColor": "#3c8dbc"
    },
    "direct-chat-primary right > direct-chat-text:before": {
        "borderLeftColor": "#3c8dbc"
    },
    "direct-chat-warning right > direct-chat-text": {
        "background": "#f39c12",
        "borderColor": "#f39c12",
        "color": "#ffffff"
    },
    "direct-chat-warning right > direct-chat-text:after": {
        "borderLeftColor": "#f39c12"
    },
    "direct-chat-warning right > direct-chat-text:before": {
        "borderLeftColor": "#f39c12"
    },
    "direct-chat-info right > direct-chat-text": {
        "background": "#00c0ef",
        "borderColor": "#00c0ef",
        "color": "#ffffff"
    },
    "direct-chat-info right > direct-chat-text:after": {
        "borderLeftColor": "#00c0ef"
    },
    "direct-chat-info right > direct-chat-text:before": {
        "borderLeftColor": "#00c0ef"
    },
    "direct-chat-success right > direct-chat-text": {
        "background": "#00a65a",
        "borderColor": "#00a65a",
        "color": "#ffffff"
    },
    "direct-chat-success right > direct-chat-text:after": {
        "borderLeftColor": "#00a65a"
    },
    "direct-chat-success right > direct-chat-text:before": {
        "borderLeftColor": "#00a65a"
    },
    "users-list > li": {
        "width": "25%",
        "float": "left",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "textAlign": "center"
    },
    "users-list > li img": {
        "borderRadius": "50%",
        "maxWidth": "100%",
        "height": "auto"
    },
    "users-list > li > a:hover": {
        "color": "#999"
    },
    "users-list > li > a:hover users-list-name": {
        "color": "#999"
    },
    "users-list-name": {
        "display": "block",
        "fontWeight": "600",
        "color": "#444",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis"
    },
    "users-list-date": {
        "display": "block",
        "color": "#999",
        "fontSize": 12
    },
    "carousel-controlleft": {
        "backgroundImage": "none"
    },
    "carousel-controlright": {
        "backgroundImage": "none"
    },
    "carousel-control > fa": {
        "fontSize": 40,
        "position": "absolute",
        "top": "50%",
        "zIndex": 5,
        "display": "inline-block",
        "marginTop": -20
    },
    "modal": {
        "background": "rgba(0, 0, 0, 0.3)"
    },
    "modal-content": {
        "borderRadius": 0,
        "WebkitBoxShadow": "0 2px 3px rgba(0, 0, 0, 0.125)",
        "boxShadow": "0 2px 3px rgba(0, 0, 0, 0.125)",
        "border": 0
    },
    "modal-header": {
        "borderBottomColor": "#f4f4f4"
    },
    "modal-footer": {
        "borderTopColor": "#f4f4f4"
    },
    "modal-primary modal-header": {
        "borderColor": "#307095",
        "color": "#fff !important",
        "backgroundColor": "#357ca5 !important"
    },
    "modal-primary modal-footer": {
        "borderColor": "#307095",
        "color": "#fff !important",
        "backgroundColor": "#357ca5 !important"
    },
    "modal-warning modal-header": {
        "borderColor": "#c87f0a",
        "color": "#fff !important",
        "backgroundColor": "#db8b0b !important"
    },
    "modal-warning modal-footer": {
        "borderColor": "#c87f0a",
        "color": "#fff !important",
        "backgroundColor": "#db8b0b !important"
    },
    "modal-info modal-header": {
        "borderColor": "#0097bc",
        "color": "#fff !important",
        "backgroundColor": "#00a7d0 !important"
    },
    "modal-info modal-footer": {
        "borderColor": "#0097bc",
        "color": "#fff !important",
        "backgroundColor": "#00a7d0 !important"
    },
    "modal-success modal-header": {
        "borderColor": "#00733e",
        "color": "#fff !important",
        "backgroundColor": "#008d4c !important"
    },
    "modal-success modal-footer": {
        "borderColor": "#00733e",
        "color": "#fff !important",
        "backgroundColor": "#008d4c !important"
    },
    "modal-danger modal-header": {
        "borderColor": "#c23321",
        "color": "#fff !important",
        "backgroundColor": "#d33724 !important"
    },
    "modal-danger modal-footer": {
        "borderColor": "#c23321",
        "color": "#fff !important",
        "backgroundColor": "#d33724 !important"
    },
    "box-widget": {
        "border": "none",
        "position": "relative"
    },
    "widget-user widget-user-header": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "height": 120,
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "widget-user widget-user-username": {
        "marginTop": 0,
        "marginBottom": 5,
        "fontSize": 25,
        "fontWeight": "300",
        "textShadow": "0 1px 1px rgba(0, 0, 0, 0.2)"
    },
    "widget-user widget-user-desc": {
        "marginTop": 0
    },
    "widget-user widget-user-image": {
        "position": "absolute",
        "top": 65,
        "left": "50%",
        "marginLeft": -45
    },
    "widget-user widget-user-image > img": {
        "width": 90,
        "height": "auto",
        "border": "3px solid #fff"
    },
    "widget-user box-footer": {
        "paddingTop": 30
    },
    "widget-user-2 widget-user-header": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "widget-user-2 widget-user-username": {
        "marginTop": 5,
        "marginBottom": 5,
        "fontSize": 25,
        "fontWeight": "300",
        "marginLeft": 75
    },
    "widget-user-2 widget-user-desc": {
        "marginTop": 0,
        "marginLeft": 75
    },
    "widget-user-2 widget-user-image > img": {
        "width": 65,
        "height": "auto",
        "float": "left"
    },
    "mailbox-messages > table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "mailbox-controls": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "mailbox-controlswith-border": {
        "borderBottom": "1px solid #f4f4f4"
    },
    "mailbox-read-info": {
        "borderBottom": "1px solid #f4f4f4",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "mailbox-read-info h3": {
        "fontSize": 20,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "mailbox-read-info h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "mailbox-read-time": {
        "color": "#999",
        "fontSize": 13
    },
    "mailbox-read-message": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "mailbox-attachments li": {
        "float": "left",
        "width": 200,
        "border": "1px solid #eee",
        "marginBottom": 10,
        "marginRight": 10
    },
    "mailbox-attachment-name": {
        "fontWeight": "bold",
        "color": "#666"
    },
    "mailbox-attachment-icon": {
        "display": "block",
        "textAlign": "center",
        "fontSize": 65,
        "color": "#666",
        "paddingTop": 20,
        "paddingRight": 10,
        "paddingBottom": 20,
        "paddingLeft": 10
    },
    "mailbox-attachment-info": {
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "background": "#f4f4f4"
    },
    "mailbox-attachment-size": {
        "display": "block",
        "color": "#999",
        "fontSize": 12
    },
    "mailbox-attachment-iconhas-img": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "mailbox-attachment-iconhas-img > img": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "lockscreen": {
        "background": "#d2d6de"
    },
    "lockscreen-logo": {
        "fontSize": 35,
        "textAlign": "center",
        "marginBottom": 25,
        "fontWeight": "300"
    },
    "lockscreen-logo a": {
        "color": "#444"
    },
    "lockscreen-wrapper": {
        "maxWidth": 400,
        "marginTop": "10%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "lockscreen lockscreen-name": {
        "textAlign": "center",
        "fontWeight": "600"
    },
    "lockscreen-item": {
        "borderRadius": 4,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "background": "#fff",
        "position": "relative",
        "marginTop": 10,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "width": 290
    },
    "lockscreen-image": {
        "borderRadius": "50%",
        "position": "absolute",
        "left": -10,
        "top": -25,
        "background": "#fff",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "zIndex": 10
    },
    "lockscreen-image > img": {
        "borderRadius": "50%",
        "width": 70,
        "height": 70
    },
    "lockscreen-credentials": {
        "marginLeft": 70
    },
    "lockscreen-credentials form-control": {
        "border": 0
    },
    "lockscreen-credentials btn": {
        "backgroundColor": "#fff",
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "lockscreen-footer": {
        "marginTop": 10
    },
    "login-logo": {
        "fontSize": 35,
        "textAlign": "center",
        "marginBottom": 25,
        "fontWeight": "300"
    },
    "register-logo": {
        "fontSize": 35,
        "textAlign": "center",
        "marginBottom": 25,
        "fontWeight": "300"
    },
    "login-logo a": {
        "color": "#444"
    },
    "register-logo a": {
        "color": "#444"
    },
    "login-page": {
        "background": "#d2d6de"
    },
    "register-page": {
        "background": "#d2d6de"
    },
    "login-box": {
        "width": 360,
        "marginTop": "7%",
        "marginRight": "auto",
        "marginBottom": "7%",
        "marginLeft": "auto"
    },
    "register-box": {
        "width": 360,
        "marginTop": "7%",
        "marginRight": "auto",
        "marginBottom": "7%",
        "marginLeft": "auto"
    },
    "login-box-body": {
        "background": "#fff",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderTop": 0,
        "color": "#666"
    },
    "register-box-body": {
        "background": "#fff",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderTop": 0,
        "color": "#666"
    },
    "login-box-body form-control-feedback": {
        "color": "#777"
    },
    "register-box-body form-control-feedback": {
        "color": "#777"
    },
    "login-box-msg": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "register-box-msg": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "social-auth-links": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "error-page": {
        "width": 600,
        "marginTop": 20,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "error-page > headline": {
        "float": "left",
        "fontSize": 100,
        "fontWeight": "300"
    },
    "error-page > error-content": {
        "marginLeft": 190,
        "display": "block"
    },
    "error-page > error-content > h3": {
        "fontWeight": "300",
        "fontSize": 25
    },
    "invoice": {
        "position": "relative",
        "background": "#fff",
        "border": "1px solid #f4f4f4",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginTop": 10,
        "marginRight": 25,
        "marginBottom": 10,
        "marginLeft": 25
    },
    "invoice-title": {
        "marginTop": 0
    },
    "profile-user-img": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 100,
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "border": "3px solid #d2d6de"
    },
    "profile-username": {
        "fontSize": 21,
        "marginTop": 5
    },
    "post": {
        "borderBottom": "1px solid #d2d6de",
        "marginBottom": 15,
        "paddingBottom": 15,
        "color": "#666"
    },
    "post:last-of-type": {
        "borderBottom": 0,
        "marginBottom": 0,
        "paddingBottom": 0
    },
    "post user-block": {
        "marginBottom": 15
    },
    "btn-social": {
        "position": "relative",
        "paddingLeft": 44,
        "textAlign": "left",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
    },
    "btn-social > :first-child": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": 0,
        "width": 32,
        "lineHeight": 34,
        "fontSize": 1.6,
        "textAlign": "center",
        "borderRight": "1px solid rgba(0, 0, 0, 0.2)"
    },
    "btn-socialbtn-lg": {
        "paddingLeft": 61
    },
    "btn-socialbtn-lg > :first-child": {
        "lineHeight": 45,
        "width": 45,
        "fontSize": 1.8
    },
    "btn-socialbtn-sm": {
        "paddingLeft": 38
    },
    "btn-socialbtn-sm > :first-child": {
        "lineHeight": 28,
        "width": 28,
        "fontSize": 1.4
    },
    "btn-socialbtn-xs": {
        "paddingLeft": 30
    },
    "btn-socialbtn-xs > :first-child": {
        "lineHeight": 20,
        "width": 20,
        "fontSize": 1.2
    },
    "btn-social-icon": {
        "position": "relative",
        "paddingLeft": 0,
        "textAlign": "left",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "height": 34,
        "width": 34,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0
    },
    "btn-social-icon > :first-child": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": 0,
        "width": "100%",
        "lineHeight": 34,
        "fontSize": 1.6,
        "textAlign": "center",
        "borderRight": "1px solid rgba(0, 0, 0, 0.2)",
        "border": "none"
    },
    "btn-social-iconbtn-lg": {
        "paddingLeft": 0,
        "height": 45,
        "width": 45,
        "paddingRight": 0
    },
    "btn-social-iconbtn-lg > :first-child": {
        "lineHeight": 45,
        "width": 45,
        "fontSize": 1.8
    },
    "btn-social-iconbtn-sm": {
        "paddingLeft": 0,
        "height": 30,
        "width": 30,
        "paddingRight": 0
    },
    "btn-social-iconbtn-sm > :first-child": {
        "lineHeight": 28,
        "width": 28,
        "fontSize": 1.4
    },
    "btn-social-iconbtn-xs": {
        "paddingLeft": 0,
        "height": 22,
        "width": 22,
        "paddingRight": 0
    },
    "btn-social-iconbtn-xs > :first-child": {
        "lineHeight": 20,
        "width": 20,
        "fontSize": 1.2
    },
    "btn-adn": {
        "color": "#ffffff",
        "backgroundColor": "#d87a68",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-adn:focus": {
        "color": "#ffffff",
        "backgroundColor": "#ce563f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-adnfocus": {
        "color": "#ffffff",
        "backgroundColor": "#ce563f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-adn:hover": {
        "color": "#ffffff",
        "backgroundColor": "#ce563f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-adn:active": {
        "color": "#ffffff",
        "backgroundColor": "#ce563f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-adnactive": {
        "color": "#ffffff",
        "backgroundColor": "#ce563f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-adn": {
        "color": "#ffffff",
        "backgroundColor": "#ce563f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-adn badge": {
        "color": "#d87a68",
        "backgroundColor": "#ffffff"
    },
    "btn-bitbucket": {
        "color": "#ffffff",
        "backgroundColor": "#205081",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-bitbucket:focus": {
        "color": "#ffffff",
        "backgroundColor": "#163758",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-bitbucketfocus": {
        "color": "#ffffff",
        "backgroundColor": "#163758",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-bitbucket:hover": {
        "color": "#ffffff",
        "backgroundColor": "#163758",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-bitbucket:active": {
        "color": "#ffffff",
        "backgroundColor": "#163758",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-bitbucketactive": {
        "color": "#ffffff",
        "backgroundColor": "#163758",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-bitbucket": {
        "color": "#ffffff",
        "backgroundColor": "#163758",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-bitbucket badge": {
        "color": "#205081",
        "backgroundColor": "#ffffff"
    },
    "btn-dropbox": {
        "color": "#ffffff",
        "backgroundColor": "#1087dd",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-dropbox:focus": {
        "color": "#ffffff",
        "backgroundColor": "#0d6aad",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-dropboxfocus": {
        "color": "#ffffff",
        "backgroundColor": "#0d6aad",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-dropbox:hover": {
        "color": "#ffffff",
        "backgroundColor": "#0d6aad",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-dropbox:active": {
        "color": "#ffffff",
        "backgroundColor": "#0d6aad",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-dropboxactive": {
        "color": "#ffffff",
        "backgroundColor": "#0d6aad",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-dropbox": {
        "color": "#ffffff",
        "backgroundColor": "#0d6aad",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-dropbox badge": {
        "color": "#1087dd",
        "backgroundColor": "#ffffff"
    },
    "btn-facebook": {
        "color": "#ffffff",
        "backgroundColor": "#3b5998",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-facebook:focus": {
        "color": "#ffffff",
        "backgroundColor": "#2d4373",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-facebookfocus": {
        "color": "#ffffff",
        "backgroundColor": "#2d4373",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-facebook:hover": {
        "color": "#ffffff",
        "backgroundColor": "#2d4373",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-facebook:active": {
        "color": "#ffffff",
        "backgroundColor": "#2d4373",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-facebookactive": {
        "color": "#ffffff",
        "backgroundColor": "#2d4373",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-facebook": {
        "color": "#ffffff",
        "backgroundColor": "#2d4373",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-facebook badge": {
        "color": "#3b5998",
        "backgroundColor": "#ffffff"
    },
    "btn-flickr": {
        "color": "#ffffff",
        "backgroundColor": "#ff0084",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-flickr:focus": {
        "color": "#ffffff",
        "backgroundColor": "#cc006a",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-flickrfocus": {
        "color": "#ffffff",
        "backgroundColor": "#cc006a",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-flickr:hover": {
        "color": "#ffffff",
        "backgroundColor": "#cc006a",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-flickr:active": {
        "color": "#ffffff",
        "backgroundColor": "#cc006a",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-flickractive": {
        "color": "#ffffff",
        "backgroundColor": "#cc006a",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-flickr": {
        "color": "#ffffff",
        "backgroundColor": "#cc006a",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-flickr badge": {
        "color": "#ff0084",
        "backgroundColor": "#ffffff"
    },
    "btn-foursquare": {
        "color": "#ffffff",
        "backgroundColor": "#f94877",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-foursquare:focus": {
        "color": "#ffffff",
        "backgroundColor": "#f71752",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-foursquarefocus": {
        "color": "#ffffff",
        "backgroundColor": "#f71752",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-foursquare:hover": {
        "color": "#ffffff",
        "backgroundColor": "#f71752",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-foursquare:active": {
        "color": "#ffffff",
        "backgroundColor": "#f71752",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-foursquareactive": {
        "color": "#ffffff",
        "backgroundColor": "#f71752",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-foursquare": {
        "color": "#ffffff",
        "backgroundColor": "#f71752",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-foursquare badge": {
        "color": "#f94877",
        "backgroundColor": "#ffffff"
    },
    "btn-github": {
        "color": "#ffffff",
        "backgroundColor": "#444444",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-github:focus": {
        "color": "#ffffff",
        "backgroundColor": "#2b2b2b",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-githubfocus": {
        "color": "#ffffff",
        "backgroundColor": "#2b2b2b",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-github:hover": {
        "color": "#ffffff",
        "backgroundColor": "#2b2b2b",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-github:active": {
        "color": "#ffffff",
        "backgroundColor": "#2b2b2b",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-githubactive": {
        "color": "#ffffff",
        "backgroundColor": "#2b2b2b",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-github": {
        "color": "#ffffff",
        "backgroundColor": "#2b2b2b",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-github badge": {
        "color": "#444444",
        "backgroundColor": "#ffffff"
    },
    "btn-google": {
        "color": "#ffffff",
        "backgroundColor": "#dd4b39",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-google:focus": {
        "color": "#ffffff",
        "backgroundColor": "#c23321",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-googlefocus": {
        "color": "#ffffff",
        "backgroundColor": "#c23321",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-google:hover": {
        "color": "#ffffff",
        "backgroundColor": "#c23321",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-google:active": {
        "color": "#ffffff",
        "backgroundColor": "#c23321",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-googleactive": {
        "color": "#ffffff",
        "backgroundColor": "#c23321",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-google": {
        "color": "#ffffff",
        "backgroundColor": "#c23321",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-google badge": {
        "color": "#dd4b39",
        "backgroundColor": "#ffffff"
    },
    "btn-instagram": {
        "color": "#ffffff",
        "backgroundColor": "#3f729b",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-instagram:focus": {
        "color": "#ffffff",
        "backgroundColor": "#305777",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-instagramfocus": {
        "color": "#ffffff",
        "backgroundColor": "#305777",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-instagram:hover": {
        "color": "#ffffff",
        "backgroundColor": "#305777",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-instagram:active": {
        "color": "#ffffff",
        "backgroundColor": "#305777",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-instagramactive": {
        "color": "#ffffff",
        "backgroundColor": "#305777",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-instagram": {
        "color": "#ffffff",
        "backgroundColor": "#305777",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-instagram badge": {
        "color": "#3f729b",
        "backgroundColor": "#ffffff"
    },
    "btn-linkedin": {
        "color": "#ffffff",
        "backgroundColor": "#007bb6",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-linkedin:focus": {
        "color": "#ffffff",
        "backgroundColor": "#005983",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-linkedinfocus": {
        "color": "#ffffff",
        "backgroundColor": "#005983",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-linkedin:hover": {
        "color": "#ffffff",
        "backgroundColor": "#005983",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-linkedin:active": {
        "color": "#ffffff",
        "backgroundColor": "#005983",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-linkedinactive": {
        "color": "#ffffff",
        "backgroundColor": "#005983",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-linkedin": {
        "color": "#ffffff",
        "backgroundColor": "#005983",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-linkedin badge": {
        "color": "#007bb6",
        "backgroundColor": "#ffffff"
    },
    "btn-microsoft": {
        "color": "#ffffff",
        "backgroundColor": "#2672ec",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-microsoft:focus": {
        "color": "#ffffff",
        "backgroundColor": "#125acd",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-microsoftfocus": {
        "color": "#ffffff",
        "backgroundColor": "#125acd",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-microsoft:hover": {
        "color": "#ffffff",
        "backgroundColor": "#125acd",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-microsoft:active": {
        "color": "#ffffff",
        "backgroundColor": "#125acd",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-microsoftactive": {
        "color": "#ffffff",
        "backgroundColor": "#125acd",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-microsoft": {
        "color": "#ffffff",
        "backgroundColor": "#125acd",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-microsoft badge": {
        "color": "#2672ec",
        "backgroundColor": "#ffffff"
    },
    "btn-openid": {
        "color": "#ffffff",
        "backgroundColor": "#f7931e",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-openid:focus": {
        "color": "#ffffff",
        "backgroundColor": "#da7908",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-openidfocus": {
        "color": "#ffffff",
        "backgroundColor": "#da7908",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-openid:hover": {
        "color": "#ffffff",
        "backgroundColor": "#da7908",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-openid:active": {
        "color": "#ffffff",
        "backgroundColor": "#da7908",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-openidactive": {
        "color": "#ffffff",
        "backgroundColor": "#da7908",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-openid": {
        "color": "#ffffff",
        "backgroundColor": "#da7908",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-openid badge": {
        "color": "#f7931e",
        "backgroundColor": "#ffffff"
    },
    "btn-pinterest": {
        "color": "#ffffff",
        "backgroundColor": "#cb2027",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-pinterest:focus": {
        "color": "#ffffff",
        "backgroundColor": "#9f191f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-pinterestfocus": {
        "color": "#ffffff",
        "backgroundColor": "#9f191f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-pinterest:hover": {
        "color": "#ffffff",
        "backgroundColor": "#9f191f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-pinterest:active": {
        "color": "#ffffff",
        "backgroundColor": "#9f191f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-pinterestactive": {
        "color": "#ffffff",
        "backgroundColor": "#9f191f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-pinterest": {
        "color": "#ffffff",
        "backgroundColor": "#9f191f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-pinterest badge": {
        "color": "#cb2027",
        "backgroundColor": "#ffffff"
    },
    "btn-reddit": {
        "color": "#000000",
        "backgroundColor": "#eff7ff",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-reddit:focus": {
        "color": "#000000",
        "backgroundColor": "#bcddff",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-redditfocus": {
        "color": "#000000",
        "backgroundColor": "#bcddff",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-reddit:hover": {
        "color": "#000000",
        "backgroundColor": "#bcddff",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-reddit:active": {
        "color": "#000000",
        "backgroundColor": "#bcddff",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-redditactive": {
        "color": "#000000",
        "backgroundColor": "#bcddff",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-reddit": {
        "color": "#000000",
        "backgroundColor": "#bcddff",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-reddit badge": {
        "color": "#eff7ff",
        "backgroundColor": "#000000"
    },
    "btn-soundcloud": {
        "color": "#ffffff",
        "backgroundColor": "#ff5500",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-soundcloud:focus": {
        "color": "#ffffff",
        "backgroundColor": "#cc4400",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-soundcloudfocus": {
        "color": "#ffffff",
        "backgroundColor": "#cc4400",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-soundcloud:hover": {
        "color": "#ffffff",
        "backgroundColor": "#cc4400",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-soundcloud:active": {
        "color": "#ffffff",
        "backgroundColor": "#cc4400",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-soundcloudactive": {
        "color": "#ffffff",
        "backgroundColor": "#cc4400",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-soundcloud": {
        "color": "#ffffff",
        "backgroundColor": "#cc4400",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-soundcloud badge": {
        "color": "#ff5500",
        "backgroundColor": "#ffffff"
    },
    "btn-tumblr": {
        "color": "#ffffff",
        "backgroundColor": "#2c4762",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-tumblr:focus": {
        "color": "#ffffff",
        "backgroundColor": "#1c2d3f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-tumblrfocus": {
        "color": "#ffffff",
        "backgroundColor": "#1c2d3f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-tumblr:hover": {
        "color": "#ffffff",
        "backgroundColor": "#1c2d3f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-tumblr:active": {
        "color": "#ffffff",
        "backgroundColor": "#1c2d3f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-tumblractive": {
        "color": "#ffffff",
        "backgroundColor": "#1c2d3f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-tumblr": {
        "color": "#ffffff",
        "backgroundColor": "#1c2d3f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-tumblr badge": {
        "color": "#2c4762",
        "backgroundColor": "#ffffff"
    },
    "btn-twitter": {
        "color": "#ffffff",
        "backgroundColor": "#55acee",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-twitter:focus": {
        "color": "#ffffff",
        "backgroundColor": "#2795e9",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-twitterfocus": {
        "color": "#ffffff",
        "backgroundColor": "#2795e9",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-twitter:hover": {
        "color": "#ffffff",
        "backgroundColor": "#2795e9",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-twitter:active": {
        "color": "#ffffff",
        "backgroundColor": "#2795e9",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-twitteractive": {
        "color": "#ffffff",
        "backgroundColor": "#2795e9",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-twitter": {
        "color": "#ffffff",
        "backgroundColor": "#2795e9",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-twitter badge": {
        "color": "#55acee",
        "backgroundColor": "#ffffff"
    },
    "btn-vimeo": {
        "color": "#ffffff",
        "backgroundColor": "#1ab7ea",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-vimeo:focus": {
        "color": "#ffffff",
        "backgroundColor": "#1295bf",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-vimeofocus": {
        "color": "#ffffff",
        "backgroundColor": "#1295bf",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-vimeo:hover": {
        "color": "#ffffff",
        "backgroundColor": "#1295bf",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-vimeo:active": {
        "color": "#ffffff",
        "backgroundColor": "#1295bf",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-vimeoactive": {
        "color": "#ffffff",
        "backgroundColor": "#1295bf",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-vimeo": {
        "color": "#ffffff",
        "backgroundColor": "#1295bf",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-vimeo badge": {
        "color": "#1ab7ea",
        "backgroundColor": "#ffffff"
    },
    "btn-vk": {
        "color": "#ffffff",
        "backgroundColor": "#587ea3",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-vk:focus": {
        "color": "#ffffff",
        "backgroundColor": "#466482",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-vkfocus": {
        "color": "#ffffff",
        "backgroundColor": "#466482",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-vk:hover": {
        "color": "#ffffff",
        "backgroundColor": "#466482",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-vk:active": {
        "color": "#ffffff",
        "backgroundColor": "#466482",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-vkactive": {
        "color": "#ffffff",
        "backgroundColor": "#466482",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-vk": {
        "color": "#ffffff",
        "backgroundColor": "#466482",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-vk badge": {
        "color": "#587ea3",
        "backgroundColor": "#ffffff"
    },
    "btn-yahoo": {
        "color": "#ffffff",
        "backgroundColor": "#720e9e",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-yahoo:focus": {
        "color": "#ffffff",
        "backgroundColor": "#500a6f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-yahoofocus": {
        "color": "#ffffff",
        "backgroundColor": "#500a6f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-yahoo:hover": {
        "color": "#ffffff",
        "backgroundColor": "#500a6f",
        "borderColor": "rgba(0, 0, 0, 0.2)"
    },
    "btn-yahoo:active": {
        "color": "#ffffff",
        "backgroundColor": "#500a6f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-yahooactive": {
        "color": "#ffffff",
        "backgroundColor": "#500a6f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "open > dropdown-togglebtn-yahoo": {
        "color": "#ffffff",
        "backgroundColor": "#500a6f",
        "borderColor": "rgba(0, 0, 0, 0.2)",
        "backgroundImage": "none"
    },
    "btn-yahoo badge": {
        "color": "#720e9e",
        "backgroundColor": "#ffffff"
    },
    "fc-button": {
        "background": "#f4f4f4",
        "backgroundImage": "none",
        "color": "#444",
        "borderColor": "#ddd",
        "borderBottomColor": "#ddd"
    },
    "fc-button:hover": {
        "backgroundColor": "#e9e9e9"
    },
    "fc-button:active": {
        "backgroundColor": "#e9e9e9"
    },
    "fc-buttonhover": {
        "backgroundColor": "#e9e9e9"
    },
    "fc-header-title h2": {
        "fontSize": 15,
        "lineHeight": 1.6,
        "color": "#666",
        "marginLeft": 10
    },
    "fc-header-right": {
        "paddingRight": 10
    },
    "fc-header-left": {
        "paddingLeft": 10
    },
    "fc-widget-header": {
        "background": "#fafafa"
    },
    "fc-grid": {
        "width": "100%",
        "border": 0
    },
    "fc-widget-header:first-of-type": {
        "borderLeft": 0,
        "borderRight": 0
    },
    "fc-widget-content:first-of-type": {
        "borderLeft": 0,
        "borderRight": 0
    },
    "fc-widget-header:last-of-type": {
        "borderRight": 0
    },
    "fc-widget-content:last-of-type": {
        "borderRight": 0
    },
    "fc-toolbar": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "fc-day-number": {
        "fontSize": 20,
        "fontWeight": "300",
        "paddingRight": 10
    },
    "fc-color-picker": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "fc-color-picker > li": {
        "float": "left",
        "fontSize": 30,
        "marginRight": 5,
        "lineHeight": 30
    },
    "fc-color-picker > li fa": {
        "WebkitTransition": "-webkit-transform linear 0.3s",
        "MozTransition": "-moz-transform linear 0.3s",
        "OTransition": "-o-transform linear 0.3s",
        "transition": "transform linear 0.3s"
    },
    "fc-color-picker > li fa:hover": {
        "WebkitTransform": "rotate(30deg)",
        "MsTransform": "rotate(30deg)",
        "OTransform": "rotate(30deg)",
        "transform": "rotate(30deg)"
    },
    "add-new-event": {
        "WebkitTransition": "all linear 0.3s",
        "OTransition": "all linear 0.3s",
        "transition": "all linear 0.3s"
    },
    "external-event": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontWeight": "bold",
        "marginBottom": 4,
        "boxShadow": "0 1px 1px rgba(0, 0, 0, 0.1)",
        "textShadow": "0 1px 1px rgba(0, 0, 0, 0.1)",
        "borderRadius": 3,
        "cursor": "move"
    },
    "external-event:hover": {
        "boxShadow": "inset 0 0 90px rgba(0, 0, 0, 0.2)"
    },
    "select2-container--defaultselect2-container--focus": {
        "outline": "none"
    },
    "select2-selectionselect2-container--focus": {
        "outline": "none"
    },
    "select2-container--default:focus": {
        "outline": "none"
    },
    "select2-selection:focus": {
        "outline": "none"
    },
    "select2-container--default:active": {
        "outline": "none"
    },
    "select2-selection:active": {
        "outline": "none"
    },
    "select2-container--default select2-selection--single": {
        "border": "1px solid #d2d6de",
        "borderRadius": 0,
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "height": 34
    },
    "select2-selection select2-selection--single": {
        "border": "1px solid #d2d6de",
        "borderRadius": 0,
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "height": 34
    },
    "select2-container--defaultselect2-container--open": {
        "borderColor": "#3c8dbc"
    },
    "select2-dropdown": {
        "border": "1px solid #d2d6de",
        "borderRadius": 0
    },
    "select2-container--default select2-results__option--highlighted[aria-selected]": {
        "backgroundColor": "#3c8dbc",
        "color": "white"
    },
    "select2-results__option": {
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "userSelect": "none",
        "WebkitUserSelect": "none"
    },
    "select2-container select2-selection--single select2-selection__rendered": {
        "paddingLeft": 0,
        "paddingRight": 10,
        "height": "auto",
        "marginTop": -4
    },
    "select2-container[dir=\"rtl\"] select2-selection--single select2-selection__rendered": {
        "paddingRight": 6,
        "paddingLeft": 20
    },
    "select2-container--default select2-selection--single select2-selection__arrow": {
        "height": 28,
        "right": 3
    },
    "select2-container--default select2-selection--single select2-selection__arrow b": {
        "marginTop": 0
    },
    "select2-dropdown select2-search__field": {
        "border": "1px solid #d2d6de"
    },
    "select2-search--inline select2-search__field": {
        "border": "1px solid #d2d6de"
    },
    "select2-dropdown select2-search__field:focus": {
        "outline": "none",
        "border": "1px solid #3c8dbc"
    },
    "select2-search--inline select2-search__field:focus": {
        "outline": "none",
        "border": "1px solid #3c8dbc"
    },
    "select2-container--default select2-results__option[aria-disabled=true]": {
        "color": "#999"
    },
    "select2-container--default select2-results__option[aria-selected=true]": {
        "backgroundColor": "#ddd",
        "color": "#444"
    },
    "select2-container--default select2-results__option[aria-selected=true]:hover": {
        "color": "#444"
    },
    "select2-container--default select2-selection--multiple": {
        "border": "1px solid #d2d6de",
        "borderRadius": 0
    },
    "select2-container--default select2-selection--multiple:focus": {
        "borderColor": "#3c8dbc"
    },
    "select2-container--defaultselect2-container--focus select2-selection--multiple": {
        "borderColor": "#d2d6de"
    },
    "select2-container--default select2-selection--multiple select2-selection__choice": {
        "backgroundColor": "#3c8dbc",
        "borderColor": "#367fa9",
        "paddingTop": 1,
        "paddingRight": 10,
        "paddingBottom": 1,
        "paddingLeft": 10,
        "color": "#fff"
    },
    "select2-container--default select2-selection--multiple select2-selection__choice__remove": {
        "marginRight": 5,
        "color": "rgba(255, 255, 255, 0.7)"
    },
    "select2-container--default select2-selection--multiple select2-selection__choice__remove:hover": {
        "color": "#fff"
    },
    "pad": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "margin": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "margin-bottom": {
        "marginBottom": 20
    },
    "margin-bottom-none": {
        "marginBottom": 0
    },
    "margin-r-5": {
        "marginRight": 5
    },
    "inline": {
        "display": "inline"
    },
    "description-block": {
        "display": "block",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "textAlign": "center"
    },
    "description-blockmargin-bottom": {
        "marginBottom": 25
    },
    "description-block > description-header": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontWeight": "600",
        "fontSize": 16
    },
    "description-block > description-text": {
        "textTransform": "uppercase"
    },
    "bg-red": {
        "color": "#fff !important",
        "backgroundColor": "#dd4b39 !important"
    },
    "bg-yellow": {
        "color": "#fff !important",
        "backgroundColor": "#f39c12 !important"
    },
    "bg-aqua": {
        "color": "#fff !important",
        "backgroundColor": "#00c0ef !important"
    },
    "bg-blue": {
        "color": "#fff !important",
        "backgroundColor": "#0073b7 !important"
    },
    "bg-light-blue": {
        "color": "#fff !important",
        "backgroundColor": "#3c8dbc !important"
    },
    "bg-green": {
        "color": "#fff !important",
        "backgroundColor": "#00a65a !important"
    },
    "bg-navy": {
        "color": "#fff !important",
        "backgroundColor": "#001f3f !important"
    },
    "bg-teal": {
        "color": "#fff !important",
        "backgroundColor": "#39cccc !important"
    },
    "bg-olive": {
        "color": "#fff !important",
        "backgroundColor": "#3d9970 !important"
    },
    "bg-lime": {
        "color": "#fff !important",
        "backgroundColor": "#01ff70 !important"
    },
    "bg-orange": {
        "color": "#fff !important",
        "backgroundColor": "#ff851b !important"
    },
    "bg-fuchsia": {
        "color": "#fff !important",
        "backgroundColor": "#f012be !important"
    },
    "bg-purple": {
        "color": "#fff !important",
        "backgroundColor": "#605ca8 !important"
    },
    "bg-maroon": {
        "color": "#fff !important",
        "backgroundColor": "#d81b60 !important"
    },
    "bg-black": {
        "color": "#fff !important",
        "backgroundColor": "#111111 !important"
    },
    "bg-red-active": {
        "color": "#fff !important",
        "backgroundColor": "#d33724 !important"
    },
    "bg-yellow-active": {
        "color": "#fff !important",
        "backgroundColor": "#db8b0b !important"
    },
    "bg-aqua-active": {
        "color": "#fff !important",
        "backgroundColor": "#00a7d0 !important"
    },
    "bg-blue-active": {
        "color": "#fff !important",
        "backgroundColor": "#005384 !important"
    },
    "bg-light-blue-active": {
        "color": "#fff !important",
        "backgroundColor": "#357ca5 !important"
    },
    "bg-green-active": {
        "color": "#fff !important",
        "backgroundColor": "#008d4c !important"
    },
    "bg-navy-active": {
        "color": "#fff !important",
        "backgroundColor": "#001a35 !important"
    },
    "bg-teal-active": {
        "color": "#fff !important",
        "backgroundColor": "#30bbbb !important"
    },
    "bg-olive-active": {
        "color": "#fff !important",
        "backgroundColor": "#368763 !important"
    },
    "bg-lime-active": {
        "color": "#fff !important",
        "backgroundColor": "#00e765 !important"
    },
    "bg-orange-active": {
        "color": "#fff !important",
        "backgroundColor": "#ff7701 !important"
    },
    "bg-fuchsia-active": {
        "color": "#fff !important",
        "backgroundColor": "#db0ead !important"
    },
    "bg-purple-active": {
        "color": "#fff !important",
        "backgroundColor": "#555299 !important"
    },
    "bg-maroon-active": {
        "color": "#fff !important",
        "backgroundColor": "#ca195a !important"
    },
    "bg-black-active": {
        "color": "#fff !important",
        "backgroundColor": "#000000 !important"
    },
    "label-danger": {
        "color": "#fff !important",
        "backgroundColor": "#dd4b39 !important"
    },
    "label-info": {
        "color": "#fff !important",
        "backgroundColor": "#00c0ef !important"
    },
    "label-warning": {
        "color": "#fff !important",
        "backgroundColor": "#f39c12 !important"
    },
    "label-primary": {
        "color": "#fff !important",
        "backgroundColor": "#3c8dbc !important"
    },
    "label-success": {
        "color": "#fff !important",
        "backgroundColor": "#00a65a !important"
    },
    "modal-primary modal-body": {
        "color": "#fff !important",
        "backgroundColor": "#3c8dbc !important"
    },
    "modal-warning modal-body": {
        "color": "#fff !important",
        "backgroundColor": "#f39c12 !important"
    },
    "modal-info modal-body": {
        "color": "#fff !important",
        "backgroundColor": "#00c0ef !important"
    },
    "modal-success modal-body": {
        "color": "#fff !important",
        "backgroundColor": "#00a65a !important"
    },
    "modal-danger modal-body": {
        "color": "#fff !important",
        "backgroundColor": "#dd4b39 !important"
    },
    "bg-gray": {
        "color": "#000",
        "backgroundColor": "#d2d6de !important"
    },
    "bg-gray-light": {
        "backgroundColor": "#f7f7f7"
    },
    "bg-gray-active": {
        "color": "#000",
        "backgroundColor": "#b5bbc8 !important"
    },
    "[class^=\"bg-\"]disabled": {
        "opacity": 0.65,
        "filter": "alpha(opacity=65)"
    },
    "text-red": {
        "color": "#dd4b39 !important"
    },
    "text-yellow": {
        "color": "#f39c12 !important"
    },
    "text-aqua": {
        "color": "#00c0ef !important"
    },
    "text-blue": {
        "color": "#0073b7 !important"
    },
    "text-black": {
        "color": "#111111 !important"
    },
    "text-light-blue": {
        "color": "#3c8dbc !important"
    },
    "text-green": {
        "color": "#00a65a !important"
    },
    "text-gray": {
        "color": "#d2d6de !important"
    },
    "text-navy": {
        "color": "#001f3f !important"
    },
    "text-teal": {
        "color": "#39cccc !important"
    },
    "text-olive": {
        "color": "#3d9970 !important"
    },
    "text-lime": {
        "color": "#01ff70 !important"
    },
    "text-orange": {
        "color": "#ff851b !important"
    },
    "text-fuchsia": {
        "color": "#f012be !important"
    },
    "text-purple": {
        "color": "#605ca8 !important"
    },
    "text-maroon": {
        "color": "#d81b60 !important"
    },
    "link-muted": {
        "color": "#7a869d"
    },
    "link-muted:hover": {
        "color": "#606c84"
    },
    "link-muted:focus": {
        "color": "#606c84"
    },
    "link-black": {
        "color": "#666"
    },
    "link-black:hover": {
        "color": "#999"
    },
    "link-black:focus": {
        "color": "#999"
    },
    "hide": {
        "display": "none !important"
    },
    "no-border": {
        "border": "0 !important"
    },
    "no-padding": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "no-margin": {
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important"
    },
    "no-shadow": {
        "boxShadow": "none !important"
    },
    "list-unstyled": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "contacts-list": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "users-list": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "mailbox-attachments": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "list-group-unbordered > list-group-item": {
        "borderLeft": 0,
        "borderRight": 0,
        "borderRadius": 0,
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "flat": {
        "borderRadius": "0 !important"
    },
    "text-bold": {
        "fontWeight": "700"
    },
    "text-boldtable td": {
        "fontWeight": "700"
    },
    "text-boldtable th": {
        "fontWeight": "700"
    },
    "text-sm": {
        "fontSize": 12
    },
    "jqstooltip": {
        "paddingTop": 5,
        "paddingRight": "!important",
        "paddingBottom": 5,
        "paddingLeft": "!important",
        "width": "auto !important",
        "height": "auto !important"
    },
    "bg-teal-gradient": {
        "background": "-o-linear-gradient(#7adddd, #39cccc) !important",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#7adddd', endColorstr='#39cccc', GradientType=0) !important",
        "color": "#fff"
    },
    "bg-light-blue-gradient": {
        "background": "-o-linear-gradient(#67a8ce, #3c8dbc) !important",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#67a8ce', endColorstr='#3c8dbc', GradientType=0) !important",
        "color": "#fff"
    },
    "bg-blue-gradient": {
        "background": "-o-linear-gradient(#0089db, #0073b7) !important",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#0089db', endColorstr='#0073b7', GradientType=0) !important",
        "color": "#fff"
    },
    "bg-aqua-gradient": {
        "background": "-o-linear-gradient(#14d1ff, #00c0ef) !important",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#14d1ff', endColorstr='#00c0ef', GradientType=0) !important",
        "color": "#fff"
    },
    "bg-yellow-gradient": {
        "background": "-o-linear-gradient(#f7bc60, #f39c12) !important",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7bc60', endColorstr='#f39c12', GradientType=0) !important",
        "color": "#fff"
    },
    "bg-purple-gradient": {
        "background": "-o-linear-gradient(#9491c4, #605ca8) !important",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#9491c4', endColorstr='#605ca8', GradientType=0) !important",
        "color": "#fff"
    },
    "bg-green-gradient": {
        "background": "-o-linear-gradient(#00ca6d, #00a65a) !important",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ca6d', endColorstr='#00a65a', GradientType=0) !important",
        "color": "#fff"
    },
    "bg-red-gradient": {
        "background": "-o-linear-gradient(#e47365, #dd4b39) !important",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#e47365', endColorstr='#dd4b39', GradientType=0) !important",
        "color": "#fff"
    },
    "bg-black-gradient": {
        "background": "-o-linear-gradient(#2b2b2b, #111111) !important",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#2b2b2b', endColorstr='#111111', GradientType=0) !important",
        "color": "#fff"
    },
    "bg-maroon-gradient": {
        "background": "-o-linear-gradient(#e73f7c, #d81b60) !important",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#e73f7c', endColorstr='#d81b60', GradientType=0) !important",
        "color": "#fff"
    },
    "description-block description-icon": {
        "fontSize": 16
    },
    "no-pad-top": {
        "paddingTop": 0
    },
    "position-static": {
        "position": "static !important"
    },
    "list-header": {
        "fontSize": 15,
        "paddingTop": 10,
        "paddingRight": 4,
        "paddingBottom": 10,
        "paddingLeft": 4,
        "fontWeight": "bold",
        "color": "#666"
    },
    "list-seperator": {
        "height": 1,
        "background": "#f4f4f4",
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 9,
        "marginLeft": 0
    },
    "list-link > a": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "color": "#777"
    },
    "list-link > a:hover": {
        "color": "#222"
    },
    "font-light": {
        "fontWeight": "300"
    },
    "user-block:before": {
        "content": " ",
        "display": "table"
    },
    "user-block:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "user-block img": {
        "width": 40,
        "height": 40,
        "float": "left"
    },
    "user-block username": {
        "display": "block",
        "marginLeft": 50,
        "fontSize": 16,
        "fontWeight": "600"
    },
    "user-block description": {
        "display": "block",
        "marginLeft": 50,
        "color": "#999",
        "fontSize": 13
    },
    "user-block comment": {
        "display": "block",
        "marginLeft": 50
    },
    "user-blockuser-block-sm username": {
        "marginLeft": 40,
        "fontSize": 14
    },
    "user-blockuser-block-sm description": {
        "marginLeft": 40
    },
    "user-blockuser-block-sm comment": {
        "marginLeft": 40
    },
    "img-sm": {
        "float": "left",
        "width": "30px !important",
        "height": "30px !important"
    },
    "img-md": {
        "float": "left",
        "width": 60,
        "height": 60
    },
    "img-lg": {
        "float": "left",
        "width": 100,
        "height": 100
    },
    "user-blockuser-block-sm img": {
        "float": "left",
        "width": "30px !important",
        "height": "30px !important"
    },
    "img-sm + img-push": {
        "marginLeft": 40
    },
    "img-md + img-push": {
        "marginLeft": 70
    },
    "img-lg + img-push": {
        "marginLeft": 110
    },
    "img-bordered": {
        "border": "3px solid #d2d6de",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "img-bordered-sm": {
        "border": "2px solid #d2d6de",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2
    },
    "attachment-block": {
        "border": "1px solid #f4f4f4",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "marginBottom": 10,
        "background": "#f7f7f7"
    },
    "attachment-block attachment-img": {
        "maxWidth": 100,
        "maxHeight": 100,
        "height": "auto",
        "float": "left"
    },
    "attachment-block attachment-pushed": {
        "marginLeft": 110
    },
    "attachment-block attachment-heading": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "attachment-block attachment-text": {
        "color": "#555"
    },
    "connectedSortable": {
        "minHeight": 100
    },
    "ui-helper-hidden-accessible": {
        "border": 0,
        "clip": "rect(0 0 0 0)",
        "height": 1,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "absolute",
        "width": 1
    },
    "sort-highlight": {
        "background": "#f4f4f4",
        "border": "1px dashed #ddd",
        "marginBottom": 10
    },
    "full-opacity-hover": {
        "opacity": 0.65,
        "filter": "alpha(opacity=65)"
    },
    "full-opacity-hover:hover": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "chart": {
        "position": "relative",
        "overflow": "hidden",
        "width": "100%"
    },
    "chart svg": {
        "width": "100% !important"
    },
    "chart canvas": {
        "width": "100% !important"
    }
});