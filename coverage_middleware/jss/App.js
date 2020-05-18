/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



//const App: () => React$Node = () => {
//  return (
//    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//        <Text>Hello, world12121121212!</Text>
//    </View>
//  );
//};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

function App(): ReactClass<{}> {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>你好吃了吗11111？</Text>
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
      );
}

// post window.__coverage__ to server every 2 seconds
setInterval(function() {
  fetch('http://10.60.139.6:8889/coverage/client', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(window.__coverage__)
  })
  .then(function() {
    var date = new Date();
    console.log(date + "发送覆盖率成功!");
  })
  .catch(function(error) {
      console.log('发送覆盖率失败: ' + error.message);
      });
}, 4000);

//export default App;
module.exports = App;

