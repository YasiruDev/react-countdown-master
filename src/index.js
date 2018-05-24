// import React from 'react';
// class Fancy extends React.Component {
//   render() {
//     return (
//       <div>This is so Fancy!</div>
//     );
//   }
// }
// export default Fancy;


import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
class Timer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: new Date(this.props.date).getTime()
        }
        // console.log(this.state.time);
    }

    componentDidMount() {
        const self = this;
        setInterval(() => {
            self.setState({ time: self.state.time });
        }, 1000);
    }

    render() {
        var now = moment();
        var date = moment(this.state.time);
        var diff = moment.duration(date.diff(now));
        const {days, hours, minutes, seconds} = diff._data;
        var style = {
          fontSize: '11px',
          textTransform: 'uppercase',
          display: 'block',
          textAlign: 'center',
          fontWeight: 500
          };
        return (
           <div className="col-7 px-2">
            <h1 className="d-flex">
                <span className="days">{_.padStart(days, 2, "0")}<small style={style}>days</small></span>:
               <span className="hours">{_.padStart(hours, 2, "0")}<small style={style}>hrs</small></span>:
               <span className="mints">{_.padStart(minutes, 2, "0")}<small style={style}>mins</small></span>:
               <span className="secs">{_.padStart(seconds, 2, "0")}<small style={style}>secs</small></span>
            </h1>
          </div>
        );
    }

}


export default Timer;
