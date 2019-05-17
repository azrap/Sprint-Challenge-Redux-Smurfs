import React from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions"
import  Smurf  from "./Smurf";
import  SmurfForm  from "./SmurfForm";
// import actions



class SmurfList extends React.Component {

  componentDidMount() {
    this.props.getSmurfs()
  }


  render() {
      console.log(this.props.smurfs)
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      <h2>Grab a cupa Joe. I'm still loading...</h2>
    }
    return (
      <div className="Smurf_wrapper">
        <div className="smurf_list">
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.name} smurf={smurf} />;
        })}
        </div>

        <div className="smurf_form">
        { <SmurfForm 
        addSmurf={this.props.addSmurf}
        /> }
        </div>
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
    smurfs: state.smurfs,
  isLoading: state.isLoading
});


export default connect(
  mapStateToProps,
  {getSmurfs,addSmurf}
)(SmurfList);
