import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { state, signal } from 'cerebral/tags'
import { connect } from '@cerebral/react'
import { Controller } from 'cerebral'
import { Container } from '@cerebral/react'
import {  Module } from 'cerebral'
import Devtools from 'cerebral/devtools'

export const app = Module({
  providers: {
    // http,
  },
  modules: {
    // storage,
    // settings,
    // navigation,
    // registration,
    // app: appModule,
  },
  state: {
    registered: false,
    count: 0,
    currentPage: 'firstPage',
    transition: 'pop',
    hello: 'world',
    items: [
      { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
      { id: 3, name: "Piqué", role: "Defender" },
      { id: 4, name: "I. Rakitic", role: "Midfielder" },
      { id: 5, name: "Sergio", role: "Midfielder" },
      { id: 6, name: "Denis Suárez", role: "Midfielder" },
      { id: 7, name: "Arda", role: "Midfielder" },
      { id: 8, name: "A. Iniesta", role: "Midfielder" },
      { id: 9, name: "Suárez", role: "Forward" },
      { id: 10, name: "Messi", role: "Forward" },
      { id: 11, name: "Neymar", role: "Forward" },
      { id: 12, name: "Rafinha", role: "Midfielder" },
      { id: 13, name: "Cillessen", role: "Goalkeeper" },
      { id: 14, name: "Mascherano", role: "Defender" },
      { id: 17, name: "Paco Alcácer", role: "Forward" },
      { id: 18, name: "Jordi Alba", role: "Defender" },
      { id: 19, name: "Digne", role: "Defender" },
      { id: 20, name: "Sergi Roberto", role: "Midfielder" },
      { id: 21, name: "André Gomes", role: "Midfielder" },
      { id: 22, name: "Aleix Vidal", role: "Midfielder" },
      { id: 23, name: "Umtiti", role: "Defender" },
      { id: 24, name: "Mathieu", role: "Defender" },
      { id: 25, name: "Masip", role: "Goalkeeper" },
    ]
  },
  signals: {
    click: [
      function increaseCount({ state }) {
        state.increment('count', 5)
        console.log('momo123yyp')
        console.log('momo123yyp')
        console.log('momo123yyp')
      },
      function increaseCount({ state }) {
        state.increment('count', 5)
        console.log('momo123yyp')
        console.log('momo123yyp')
        console.log('momo123yyp')
      },
      function increaseCount({ state }) {
        state.increment('count', 5)
        console.log('momo123yyp')
        console.log('momo123yyp')
        console.log('momo123yyp')
      }
    ],
    reset: [
      function resetCount({ state }) {
        state.set('count', 0)
      }
    ]
  }
})


function increaseCount({ state }) {
  state.increment('count', 5)
}

function increaseCount2({ state }) {
  state.increment('count', 5)
}
function increaseCount3({ state }) {
  state.increment('count', 5)
}

let devtools

if (true) {
  devtools = Devtools({
    host: '192.168.50.197:9999',
    // https: false,
    reconnect: true,
    storeMutations: true,
    bigComponentsWarning: 5,
    warnStateProps: true,
  })
}

export const controller = Controller(app, {
  devtools
})


const MyComponent = connect(
  {
    hello: state`hello`,
    click: signal`clicked`,
  },
  class MyComponent extends React.Component {


    render() {
      const clickMe = () => controller.runSignal('clickMe', [
        increaseCount,
        increaseCount2
      ])

      return (<View style={styles.container}>
        <Text onPress={() => clickMe()} >{this.props.hello}</Text>
        <Text>{this.props.hello}</Text>
        <Text>{this.props.hello}</Text>
        <Text>{this.props.hello}</Text>
        <Text>Changes you make will automatically reload. asdfKOKOasdf</Text>
        <Text>Shake your phone to open the developer menu. TERRAW</Text>
      </View>)
    }
  }
)


export default class App extends React.Component {
  render() {
    return (
      <Container controller={controller}>
        <MyComponent />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
