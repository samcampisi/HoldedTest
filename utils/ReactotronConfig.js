import { reactotronRedux } from 'reactotron-redux';
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  host: 'localhost', // default is localhost (on android don't forget to `adb reverse tcp:9090 tcp:9090`)
  name: 'Holded Test',
})
  .useReactNative()
  .use(reactotronRedux())
  .use(trackGlobalErrors())
  .connect();

export default reactotron;
