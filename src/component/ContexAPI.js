class ContexAPI {
  constructor(value) {
    this.value = value;
  }

  provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  consumer = ({ children }) => children(this.value);
}

function createContex(value = null) {
  const contexApi = new ContexAPI(value);
  return {
    Provider: contexApi.provider,
    Consumer: contexApi.consumer,
  };
}

export default createContex;
