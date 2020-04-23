import React, { Component } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  BackHandler,
} from 'react-native';
import { styles } from "./styles"
import MenuItem from '../menuitem'
import tiger from "../../../../assets/images/tiger.png"
import birds from "../../../../assets/images/birds.png"
import plants from "../../../../assets/images/plants.png"
import Header from '../../../../components/header';

export default class Explore extends Component {
  backHandler = null
  unsubfocus = null
  unsubblur = null
  render() {
    if (!this.unsubfocus)
      this.unsubfocus = this.props.navigation.addListener("focus", () => {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", function () {
          return true;
        })
      })
    if (!this.unsubblur)
      this.unsubblur = this.props.navigation.addListener("blur", () => {
        console.log("focus", this.unsubfocus, "blur", this.unsubblur);
        this.unsubfocus()
        this.unsubblur()
        this.unsubblur = null
        this.unsubfocus = null
        if (this.backHandler) {
          this.backHandler.remove()
          this.backHandler = null
        }
      })
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" backgroundColor="rgb(250, 189, 37);" />
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.container}>
              <Header title="Explore" />
              <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-evenly" }}>
                <MenuItem
                  props={this.props}
                  source={tiger}
                  title="Animals"
                  categoryName="animals"
                  backgroundColor="rgb(236, 127, 24)"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, est."
                />
                <MenuItem
                  props={this.props}
                  source={birds}
                  title="Birds"
                  categoryName="birds"
                  backgroundColor="rgb(4, 191, 173)"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, est."
                />
                <MenuItem
                  props={this.props}
                  source={plants}
                  title="Plants"
                  categoryName="plants"
                  backgroundColor="rgb(157, 191, 33)"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, est."
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}
