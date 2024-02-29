## What exactly is React Native?
    - `React.js` is a JavaScript library for building user interfaces and it is tyically used for web development.
    - `React Native` is an alternative to the `React.js` that is a collection of "special" React components that are compiled to native UI elements.

## To start a project using React Native:
    - npx create-expo-app OreillyRNCourse (Project's name)
    - cd OreillyRNCourse
    - npm install react-native-web@~0.19.6 react-dom@18.2.0 @expo/metro-runtime@~3.1.3
    -npm install
    - npx expo start

## React Native core components:
    - `Text`: for displaying text
    - `View`: holds and layouts other components: we have nultiple other child components in it. It also can be used in a nested form. It is used for styling and determines where a child should be.
    - `Button`: displays a button. it is a self-closing element, where we add a `title` prop. The button will do something if we add a listener to it, i.e., `onPress` prop.
    - `StyleSheet`: Besides auto-completion, the StyleSheet object also provides validation, if we use invalid properties or values otherwise an error or warning appeares. `Flexbox` comes to make layouts if React Native it becomes super important. It is a key approach (concept) or basically a  collection of css proprties tht we use to control how things look like. It is a collection of css properties to position the elemnets inside of containers. We can control how much space certain elements take up and if they are to the left, right, bottom , or top of another element. Positioning is controlled via settings applied to the element container. Flexbox is all about 2 axes that we have on a container. Every `View` by default is using **flexbox**. Every `View` organizes its children using the floexbox. By default, all child elements are organized in a `column`. By setting `flexDirection: 'row'`, the elemnets are arranged in a row from left to right. `justifyContent` is used to organize elements along the **main axis** and `alighItems` is used to organize elements along the **cross axis**. `flex: 1` is as much as space along the **main axis** that an element can take. `Button` does not have `style` property.
    - `TextInput` allows us to enter text and it is a self-closing component.
    
## Styling React Native Apps:
    - To add styling we need to use style prop that can be used not for all components but for some of them like `View`, `Text`, and so on
    - For each component there are different keywords.

##
    - In `width: '%80'` or `width: 50`, the former is wrt the available width the the latter is wrt pixel.


















