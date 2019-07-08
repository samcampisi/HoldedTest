# HoldedTest
<h1 align="center"> HoldedTest </h1>

<p align="center"> This is a test for a position as a ReactNative developer </p>

<hr/>

<p> This app offers a list of all the crypto trading pairs when the app is
open. All the users should be able to set a list of favourite pairs in order to track
them, a user could delete one of their favourite pairs eventually. Also the user
should be able to see the top major gainer of the last 24h. </p>

<h3> List of features </h3>

<ul>
  <li>Hamburger menu to navigate between screens</li>
  <li>Initial screen showing the list of crypto trading pairs</li>
  <li>Second screen showing the pairs the user has marked as favorite</li>
  <li>Third screen showing the top major gainer of the last 24h based on the daily stats</li>
  <li>Capability to alert the user if there is no internet connection in the screens that need it</li>
</ul>

<h3> Special considerations </h3>

<ul>
  <li>I used the newest React Native version to date (0.60) which is not compatible with the provided link for binance-api-node, so I had to use something similar called binance-api-react-native</li>
  <li>The module binance-api-react-native seems to have problems fetching data in Android, and for time reasons I could not look for another susbtitute, so the fetching does not happen on Android :(</li>
  <li>So sorry about that. Also I tried asking the maintainer of binance-api-node for help with React Native and he was very rude and told me to just 'google it' (I obviously had).</li>
</ul>


<h3> Download & Installation </h3>

<h4> Requirements </h4>

<ul>
  <li>Node version at least 8</li>
  <li>npm version 6.4 or above</li>
  <li>XCode</li>
  <li>React native client</li>
</ul>

<h4> What to do after cloning this repo</h4>

```shell
$ npm install
```

And then open the project on XCode and run it on an emulator or an actual device.

You can compile and open this app on Android studio as well, if you want to see the UI working.

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>Samantha Campisi</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License
