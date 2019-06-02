import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../redux/actions/simpleAction';

class EventDemo extends React.Component {
  constructor(props) {
      super();
      this.state = { 
        count: 0 , newName: 'YangSB', serverId: 10, serverStatus: 'off line', server: 'Server', userValue: '', showResults: false,
        students:[
        { name: 'Bill Gates', major: 'Computer Science'},
        { name: 'Steve Jobs', major: 'Computer Science'},
        { name: 'Elon Musk', major: 'Computer Science'}
      ]
      };
      this.myName = props.myName;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.counterPlus = this.counterPlus.bind(this);
      this.resetCounter = this.resetCounter.bind(this);
      this.getServerStatus = this.getServerStatus.bind(this);
      this.handleUserReset = this.handleUserReset.bind(this);
      this.handleUserSubmit = this.handleUserSubmit.bind(this);
      console.log(props.myName);

      this.student = {
        name: 'wang',
        age: 8,
        major: 'math',
      };

  }

  componentWillMount() {

  }

  handleSubmit() {
    console.log(this.state.count);
    this.setState(state => ({
      count: state.count + 1,
      newName: 'Yang'
    }));
  }
  getServerStatus = () => {
    console.log("aabb");
    return 'Off Line';
  }
  handleUserReset(event) {
    //this.setState({userValue: event.target.value});
    this.refs.userValue.value = '';
    this.setState(state => ({
      userValue: ''
    }));
  }
  handleUserSubmit(event) {
    //alert('A name was submitted: ' + this.state.userValue);
    event.preventDefault();
    this.setState({userValue: this.refs.userValue.value});
    this.setState({ showResults: true });
    const name = this.refs.userValue.value;
    console.log('Your name is', name);
  }
  counterPlus() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  resetCounter() {
    this.setState(state => ({
      count: 0
    }));
  }
    render() {
      console.log(this.props.simpleReducer.reduxName);
      let a = this.student.name;
      // if(this.props.students) {
      //   const student = this.props.students.map((student) =>
      //     <div>
      //       <div><span>Student Name: </span> <span>{student.name}</span></div>
      //       <div><span>Student Major: </span> <span>{student.major}</span></div> 
      //     </div>
      //   );
      // }
      
      return (
      //  <div>
      //    This is my Name: {a}
      //    <div>
      //    This is my newName: {this.state.newName}
      //    </div>
      //    <div>
      //    This is my reduxName: {this.props.simpleReducer.reduxName}
      //    </div>
      //    <div>
      //      This is a counter: {this.state.count}
      //    </div>

      //    <div>
      //     <button onClick={this.handleSubmit}> Plus </button>
      //    </div>

      //    <div>
      //     <button className={'btn-primary'} onClick={this.props.simpleAction}> Redux </button>
      //    </div>

      //  </div>

        <div style={{margin: '10px'}}>
          <h4>This is a Component Example. </h4>
          <p> Server with ID {this.state.serverId} is {this.state.serverStatus} </p>
          <p> {this.state.server} with ID {this.state.serverId} is {this.state.serverStatus}</p>
          <p> {this.state.server} with ID {this.state.serverId} is {this.getServerStatus()} </p>
          
          <hr></hr>
          
          <h4>This is a counter</h4>
          <p style={{margin: '5px 10px'}}> { this.state.count } </p>
          <button className="btn btn-primary" onClick={this.counterPlus} style={{margin: '0 10px'}}> Add One</button>
          <button className="btn btn-danger" onClick={this.resetCounter}> Reset Counter</button>
          
          <hr></hr>

          <h4>This is a input Box with Event Binding</h4>
          <form onSubmit={this.handleUserSubmit}>
            <div className="form-group">
              <label>User Name</label>
              <input type="text" className="form-control" placeholder="Enter user name" ref="userValue" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary" style={{margin: '0 10px'}}>Login</button>
            <button type="button" className="btn btn-success" onClick={this.handleUserReset}>Sign out</button>
            { this.state.userValue ? <div className="informBoxBoarder" style={{margin: '10px'}}> You Loggedin as { this.state.userValue } </div> : null }
          </form>

          <hr></hr>
          <h4>This is a StudentList managed by ngfor loop</h4>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student Name</th>
                <th scope="col">Student Major</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student, key) =>
                <tr>
                  <th>{key + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.major}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }


    componentDidMount() {

    }

    componentDidUpdate() {

    }
  }

  const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
  
  simpleAction: () => {
    console.log('aa');
    dispatch(simpleAction())
  }
 })

 export default connect(mapStateToProps, mapDispatchToProps)(EventDemo);
