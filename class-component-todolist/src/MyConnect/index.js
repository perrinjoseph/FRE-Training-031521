import React from 'react';

export const MyReactReduxContext = React.createContext(null);

export class MyProvider extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <MyReactReduxContext.Provider value={store}>
        {this.props.children}
      </MyReactReduxContext.Provider>
    );
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
export const myconnect = (mapStateToPropsFn, mapDispatchToPropsFn) => (
  CounterApp
) =>
  class NewComponent extends React.Component {
    render() {
      return <h1>ConnectedComponent</h1>;
    }
  };