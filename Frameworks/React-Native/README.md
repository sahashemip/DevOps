## What exactly is React Native?
    - `React.js` is a JavaScript library for building user interfaces and it is tyically used for web development.
    - `React Native` is an alternative to the `React.js` that is a collection of "special" React components that are compiled to native UI elements.
    - One code for different platforms!

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
    - `ScrollView` allows to have items that fit over a screen. For a long list it will be a performance issue. **ScrollView** is great for the limited amounts of the content.
    - `FlatList` component helps with scrolling. It only renders the visible items and all the other components will be rendered lazily and rendered as they are needed.
    - `Pressable` maks an item pressable.
    - `Touchable` has different vesrions and all have been replaced by `Pressable` in new versions.
    - `Modal` 
    - `Image`
    


## Event Listeners and Event Handler Functions:
    - **Event Listeners:** The event  listening props that are  provided by `react-native` on its components. For example, `onChangeText` and `onPress` are listeners in `TextInput` and `Button` components, respectively. These props want a **function** as a value. A pointer at a function.
    - **Event Handler Functions:** Some defined functions in the components that are used as a `call back function` in the course of events. As the first step, we need to connect these functions to the the event listeners. The values entered in the event listeners are used in these functions.
    - **useState Hook:** It lets us use **state** and other React features without writing a class. The values entered in an event needs to be stored in a state. Then, it is possible to use them.
    - **FaltList** is a substitute to the **ScrollView** except we do not manual mapping anymore. **FlatList** requires 2 important props: `data` and `renderItem`. **renderItem** needs a function that takes the item meta data.
    -



## Hints
    - In `width: '%80'` or `width: 50`, the former is wrt the available width the the latter is wrt pixel.
    - **Differences between IOS and Android:**
        - sometimes the styling does not work in Text for IOS while it is fine for Android. To fix it, put the **Text** inside a **View** container. In other words, adding extra wrappers!!!
    - We do not have style inheretance in React Native opposite to CSS.
    - To add styling we need to use style prop that can be used not for all components but for some of them like `View`, `Text`, and so on
    - For each component there are different keywords.
    - There are some props in `ScrollView` that depends on IOS and some to Android.
    -

## Debugging
    - Following error messages
    - using `console.log()` command
    - install and use `react-devtools`


















