## How to create projecy

`expo init --npm`

Choose blank (typescript)

Follow here: https://gist.github.com/vdelacou/58484f1c11af70aaa457f4e5c289e893 (after Create Project)

## Install library

`npm install @react-navigation/native`

`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

`npm install @react-navigation/stack`

`npm install @react-navigation/bottom-tabs`

`expo install @expo/vector-icons`

`expo install expo-localization i18n-js`

`npm install react-native-flash-message`

`expo install @react-native-community/netinfo`

In your `app.json` add a scheme field `"scheme": "expo",`

Copy the App.tsx

`curl -o App.tsx https://raw.githubusercontent.com/vdelacou/iblis-react-native-expo-starter/master/App.tsx`

Copy the code to your src folder

`curl https://codeload.github.com/vdelacou/iblis-react-native-expo-starter/tar.gz/master | tar -xz --strip=1 iblis-react-native-expo-starter-master/src`