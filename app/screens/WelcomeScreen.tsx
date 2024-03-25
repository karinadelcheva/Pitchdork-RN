import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { GestureResponderEvent, Image, ImageStyle, TextStyle, View, ViewStyle, _ScrollView } from "react-native"
import {
  Button,
  Text,
} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators"
import { colors, fonts, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"

const welcomeLogo = require("../../assets/images/Pitchdork-1.png")
const albums = require("../../assets/images/Albums.png")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  function handleButtonPress(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.")
  }

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
        <Text
          testID="welcome-heading"
          size="md" 

          tx="welcomeScreen.readyForLaunch"
        />
        <Image style={$welcomeAlbums} source={albums} resizeMode="stretch" /> 
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <Text tx="welcomeScreen.postscript" 
                  style={$welcomeHeading}
                  preset="heading"
                  />
        <Button tx="common.letsgo"
          textStyle={$buttonText}
          style={$button}
          onPress={handleButtonPress}/> 
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral500,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "40%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 46,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.xxl,
  alignItems: "center",
  zIndex: -1,
  justifyContent: "space-around",
}


const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
}

const $welcomeAlbums: ImageStyle = {
  height: 69,
  width: 750,
  opacity: 0.9,
  position: "absolute",
  bottom: -30,
  right: 0,
  zIndex: 3,
  transform: [{ scaleX: isRTL ? -1 : 1}],
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
  color: colors.palette.bright100
}

const $button: ViewStyle = {
  alignSelf: "center",
  width: "100%",
  maxWidth: 200,
  borderRadius: 8,
  backgroundColor: colors.palette.bright100,
  shadowColor: colors.palette.neutral600,
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 16,
  textAlign: "center",
  textTransform: "uppercase",
  paddingHorizontal: spacing.lg,
  fontFamily: fonts.helveticaNeue.medium,
}