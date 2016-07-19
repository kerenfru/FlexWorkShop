/**
 * Created by kfruchter on 16/07/2016.
 */
var targilim = {
  "1": {
    "targil_title": "Flexbox container properties",
    "targil_subtitle": "flex-direction",
    "description1": "This property specifies how flex items are laid out in the flex container, by setting the direction of the flex container’s main axis. They can be laid out in two main directions, like rows horizontally or like columns vertically.",
    "description2": "Let's play with flex-direction. The Values are: ",
    "values":"row, row-reverse, column, column-reverse.",
    "targetCss": "display:flex;flex-direction:column;",
    "result": "flex-direction:column",
    "targetSelector": ".flex-container",
    "items" : 3
  },
  "2": {
    "targil_title": "Flexbox container properties",
    "targil_subtitle": "flex-direction",
    "description1": "This property specifies how flex items are laid out in the flex container, by setting the direction of the flex container’s main axis. They can be laid out in two main directions, like rows horizontally or like columns vertically.",
    "description2": "Let's play with flex-direction. The Values are: ",
    "values":"row, row-reverse, column, column-reverse.",
    "targetCss": "display:flex;flex-direction:row-reverse;",
    "result": "flex-direction:row-reverse",
    "targetSelector": ".flex-container",
    "items" : 5
  },
  "3": {
    "targil_title": "Flexbox container properties",
    "targil_subtitle": "flex-wrap",
    "description1": "The initial flexbox concept is the container to set its items in one single line. The flex-wrap property controls if the flex container lay out its items in single or multiple lines, and the direction the new lines are stacked in.",
    "description2": "Let's play with flex-wrap. The Values are: ",
    "values":"nowrap, wrap, wrap-reverse.",
    "targetCss": "display:flex;flex-wrap:wrap;",
    "result": "flex-wrap:wrap",
    "targetSelector": ".flex-container",
    "items" : 8
  },
  "4": {
    "targil_title": "Flexbox container properties",
    "targil_subtitle": "flex-flow",
    "description1": "This property is a shorthand for setting the flex-direction and flex-wrap properties.",
    "description2": "Let's play with flex-wrap. The Values are: ",
    "values":"<flex-direction> || <flex-wrap>;",
    "targetCss": "display:flex;flex-flow:row-reverse wrap;",
    "result": "flex-flow:row-reverse wrap",
    "targetSelector": ".flex-container",
    "items" : 8
  },
  "5": {
    "targil_title": "Flexbox container properties",
    "targil_subtitle": "justify-content",
    "description1": "The justify-content property aligns flex items along the main axis of the current line of the flex container. It helps distribute left free space when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size.",
    "description2": "Let's play with justify-content. The Values are: ",
    "values":"flex-start, flex-end, center, space-between, space-around.",
    "targetCss": "display:flex;justify-content:space-around;",
    "result": "justify-content:space-around",
    "targetSelector": ".flex-container",
    "items" : 3
  },
  "6": {
    "targil_title": "Flexbox container properties",
    "targil_subtitle": "justify-content",
    "description1": "The justify-content property aligns flex items along the main axis of the current line of the flex container. It helps distribute left free space when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size.",
    "description2": "Let's play with justify-content. The Values are: ",
    "values":"flex-start, flex-end, center, space-between, space-around.",
    "targetCss": "display:flex;justify-content:center;",
    "result": "justify-content:center",
    "targetSelector": ".flex-container",
    "items" : 5
  },
  "7": {
    "targil_title": "Flexbox container properties",
    "targil_subtitle": "align-items",
    "description1": "Flex items can be aligned in the cross axis of the current line of the flex container, similar to justify-content but in the perpendicular direction. This property sets the default alignment for all flex items, including the anonymous ones.",
    "description2": "Let's play with align-items. The Values are: ",
    "values":"stretch, flex-start, flex-end, center, baseline",
    "targetCss": "align-items:flex-end;",
    "result": "align-items:flex-end",
    "targetSelector": ".flex-container",
    "injectCssOnFlexItem" : ".flex-item {height:auto !important;min-height: 80px;}",
    "items" : 5
  },
  "8": {
    "targil_title": "Flexbox container properties",
    "targil_subtitle": "align-content",
    "description1": "The align-content property aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.",
    "description2": "Let's play with align-content. The Values are: ",
    "values":"stretch, flex-start, flex-end, center, space-between, space-around",
    "targetCss": "display:flex;align-content:flex-end;",
    "result": "align-content:flex-end",
    "targetSelector": ".flex-container",
    "injectCssOnFlexItem" : ".flex-container {flex-flow:row wrap;} .flex-item {height:40px !important; width:40px !important;}",
    "items" : 15
  },
  "9": {
    "targil_title": "Flexbox container properties",
    "targil_subtitle": "align-content",
    "description1": "The align-content property aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.",
    "description2": "Let's play with align-content. The Values are: ",
    "values":"stretch, flex-start, flex-end, center, space-between, space-around",
    "targetCss": "display:flex;align-content:space-between;",
    "result": "align-content:space-between",
    "targetSelector": ".flex-container",
    "injectCssOnFlexItem" : ".flex-container {align-content:flex-start;flex-flow:row wrap;} .flex-item{height:40px !important;width:40px !important;}",
    "items" : 15
  },
  "10": {
    "targil_title": "Flexbox item properties",
    "targil_subtitle": "order",
    "description1": "The order property controls the order in which children of a flex container appear inside the flex container. By default they are ordered as initially added in the flex container.",
    "description2": "Let's play with order. The Value is: ",
    "values":"<integer>;",
    "targetSelector": ".flex-item-6",
    "targetCss": "order:-1;",
    "result": "order:-1",
    "items" : 6
  },
  "11": {
    "targil_title": "Flexbox item properties",
    "targil_subtitle": "flex-grow",
    "description1": "This property specifies the flex grow factor, which determines how much the flex item will grow relative to the rest of the flex items in the flex container when positive free space is distributed. Default value: 0.",
    "description2": "Let's play with flex-grow. The Value is: ",
    "values":"<number>;",
    "targetSelector": ".flex-item-2",
    "targetCss": "flex-grow:1;",
    "result": "flex-grow:1",
    "injectCssOnFlexItem" : ".flex-item {flex-grow:0}",
    "items" : 4
  },
  "12": {
    "targil_title": "Flexbox item properties",
    "targil_subtitle": "flex-shrink",
    "description1": "This property specifies the flex grow factor, which determines how much the flex item will grow relative to the rest of the flex items in the flex container when positive free space is distributed. By default all flex items can be shrunk, but if we set it to 0 (don’t shrink) they will maintain the original size (Default value: 1).",
    "description2": "Let's play with flex-shrink. The Value is: ",
    "values":"<number>;",
    "targetSelector": ".flex-item-2",
    "targetCss": "flex-shrink:0;",
    "result": "flex-shrink:0",
    "items" : 14
  },
  "13": {
    "targil_title": "Flexbox item properties",
    "targil_subtitle": "flex-shrink",
    "description1": "This property specifies the flex grow factor, which determines how much the flex item will grow relative to the rest of the flex items in the flex container when positive free space is distributed. By default all flex items can be shrunk, but if we set it to 0 (don’t shrink) they will maintain the original size (Default value: 1).",
    "description2": "Let's play with flex-shrink. The Value is: ",
    "values":"<number>;",
    "targetSelector": ".flex-item-2",
    "targetCss": "flex-shrink:2;",
    "result": "flex-shrink:2",
    "items" : 14
  },
  "14": {
    "targil_title": "Flexbox item properties",
    "targil_subtitle": "flex-basis",
    "description1": "This property takes the same values as the width and height properties, and specifies the initial main size of the flex item, before free space is distributed according to the flex factors.",
    "description2": "Let's play with flex-basis. The Value is: ",
    "values":"auto | <width>;",
    "targetSelector": ".flex-item-4",
    "targetCss": "flex-basis:150px;",
    "result": "flex-basis:150px",
    "items" : 4
  },
  "15": {
    "targil_title": "Flexbox item properties",
    "targil_subtitle": "flex",
    "description1": "This property is the shorthand for the flex-grow, flex-shrink and flex-basis properties. Among other values it also can be set to auto (1 1 auto) and none (0 0 auto). Default value: 0 1 auto",
    "description2": "Let's play with flex. The Value is: ",
    "values":"none | auto | [ <flex-grow> <flex-shrink>? || <flex-basis> ];",
    "targetSelector": ".flex-item-4",
    "targetCss": "flex:1 1 auto",
    "result": "flex:1 1 auto",
    "injectCssOnFlexItem" : ".flex-item {flex:0 0 auto}",
    "items" : 4
  },
  "16": {
    "targil_title": "Flexbox item properties",
    "targil_subtitle": "align-self",
    "description1": "This align-self property allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Refer to align-items explanation for flex container to understand the available values.",
    "description2": "Let's play with align-self. The Value is: ",
    "values":"auto | flex-start | flex-end | center | baseline | stretch;",
    "targetSelector": ".flex-item-4",
    "targetCss": "align-self:stretch;",
    "result": "align-self:stretch",
    "injectCssOnFlexItem" : ".flex-container {align-items:flex-end;} .flex-item {padding: 30px; height: auto !important;}",
    "items" : 4
  },
  "17": {
    "targil_title": "Flexbox item properties",
    "targil_subtitle": "align-self",
    "description1": "This align-self property allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Refer to align-items explanation for flex container to understand the available values.",
    "description2": "Let's play with align-self. The Value is: ",
    "values":"auto | flex-start | flex-end | center | baseline | stretch;",
    "targetSelector": ".flex-item",
    "targetCss": "align-self:baseline;",
    "result": "align-self:baseline",
    "injectCssOnFlexItem" : ".flex-item-3{margin:20px;;padding-top:40px;} .flex-item-1{margin:27px;;padding-top:23px;}",
    "items" : 4
  }
};