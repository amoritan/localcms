class LocalState {
  constructor() {
    this.config = {};
    this.content = {};
  }

  setConfig(newConfig) {
    this.config = newConfig;
  }

  setContent(newContent) {
    this.content = newContent;
  }
}

const localState = new LocalState();

module.exports = {
  setConfig: (newConfig) => {
    localState.setConfig(newConfig);
  },
  getConfig: () => localState.config,
  setContent: (newContent) => {
    localState.setContent(newContent);
  },
  getContent: () => localState.content,
};
