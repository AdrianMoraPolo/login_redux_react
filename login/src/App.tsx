import React from "react";
import LoginClass from "./components/Login.class";
import Login from "./components/Login";
import { connect } from "react-redux";
import * as actions from "./actions";
import { IGlobalState } from "./reducer";
import { bindActionCreators } from "redux";
import { updateNumber, menosNumber } from "./actions";
import { number } from "prop-types";

interface IProps {}

interface IPropsGlobal {
  value: number;
  updateNumber: () => void;
  masNumber: () => void;
  menosNumber: () => void;
  cosaNumber: () => void;
}

const App: React.FC<IProps & IPropsGlobal> = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Login />

        <LoginClass />

        <div className="App">
          {props.value}
          <button onClick={() => props.updateNumber()}>reset</button>
          <button onClick={() => props.masNumber()}>+</button>
          <button onClick={() => props.menosNumber()}>-</button>
          <button onClick={() => props.cosaNumber()}>50</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  value: state.value
});
const mapDispatchToProps = {
  updateNumber: actions.updateNumber,
  masNumber: actions.masNumber,
  menosNumber: actions.menosNumber,
  cosaNumber: actions.cosaNumber
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
