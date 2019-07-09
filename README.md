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

<h3> Important questions </h3>

<h4> Brief pros and cons about the middleware chosen </h4>

I chose redux-thunk as the middleware for creating the store.

<h5> Pros </h5>

<ul>
  <li> Thunk lets you write async logic to interact with the store which adapts to my async fetch functions.</li>
  <li> Since a thunk is a function that may take params and return another function, I can dispatch several actions embedded within another action, which is great for my logic of loading/success/error.</li>
</ul>

<h5> Cons </h5>

<ul>
  <li> As opposed to redux-saga, maybe Thunk is not that intuitive and easy to learn and use.</li>
  <li> Thunks can never act in response to an action. Redux-Saga, on the other hand, subscribes to the store and can trigger a saga (pure function) to run or continue when a certain action is dispatched.</li>
</ul>

<h4> Explain why your project structure is scalable and its benefits </h4>

Since this is a very small application, right now the project structure containing the main folders:

<ul>
  <li>Assets</li>
  <li>Actions</li>
  <li>Components</li>
  <li>Pages</li>
  <li>Reducers</li>
  <li>Styles</li>
  <li>Utils</li>
</ul>

are enough to establish a clear distinction between the files in this project. Whenever a new helper needs to be added, it can go to utils. We could add more granularity to the Pages and Components folders as we need more specificity, such as groups of files serving for a common functionality such as the login flow, the profile views, etc.

As it is this structure allows a reasonable amount of growth without causing too much confusion.

Later on, should we add more views to the hamburger menu, this logic can be moved to a separate file (instead of being inside App.js) to import and configure without much clutter.

<h4> Decisions made about structure and functionality </h4>

The one thing I can say that's not present in the previous point is that I decided separate folders for components and pages because I like a clear distinction between screens and mere re-usable parts. That way I know which pieces I can use in many of my views.

<h3> Download & Installation </h3>

<h4> Requirements </h4>

<ul>
  <li>Node version at least 8</li>
  <li>npm version 6.4 or above</li>
  <li>XCode</li>
  <li>React native client</li>
  <li>Cocoa Pods</li>
</ul>

<h4> What to do after cloning this repo</h4>

```shell
$ npm install

$ cd ios && pod install && cd ..
```

And then open the project on XCode and run it on an emulator or an actual device.

You can compile and open this app on Android studio as well, if you want to see the UI working.

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>Samantha Campisi</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License
