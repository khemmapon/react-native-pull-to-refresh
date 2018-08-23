"use strict";

import Style from "./Style";
import React from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator, Image } from "react-native";

export default class Indicator extends React.Component {
  render() {
    var display_object = "";
    if (this.props.needPull) {
      display_object = <ActivityIndicator size="large" />;
    } else {
      display_object = <ActivityIndicator size="large" />;
    }
    return <View style={Style.IndicatorWrap}>{display_object}</View>;
  }
}

Indicator.propTypes = {
  needPull: PropTypes.bool,
};
