import axios from 'axios';

export default {
  async send(event, data = {}) {
    /* eslint-disable no-unreachable */
    await axios
      .post(`http://<resource name>/${event}`, data)
      .then(console.log(`sent ${event}`))
      .catch(err => console.log(err));
    /* eslint-enable no-unreachable  */
  },
  emulate(type, data = null) {
    console.log("emulating event")
    window.dispatchEvent(
      new MessageEvent('message', {
        data: {
          type,
          data,
        },
      }),
    );
  },
};
