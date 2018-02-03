import React, {Component} from 'react';
import {Bar, Doughnut, Line, Pie, Polar, Radar} from 'react-chartjs-2';
import {CardColumns, Card, CardHeader, CardBody} from 'reactstrap';


const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 120, 81, 56, 115, 40]
    }
  ]
};


class Companies extends Component {
  render() {
      const doughnut = {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };
    return (

    //     <div>
    //         <Card style={{borderRadius: 20 ,maxHeight: 600,overflowY: 'scroll' }}>
    //         <CardHeader>
    //             Revenues
    //           </CardHeader>
    //           <CardBody>
    //         <div className="col-md-5">
    //                 <h5>Flg 7 : Lorem ipsum dolor sit amet,</h5><br />
    //                 <br />
    //                     <div className="chart-wrapper">
    //                         <Doughnut data={doughnut}/>
    //                     </div>
    //             </div>
    //         <div className="col-md-6">
    //         <h5>Flg 7 : Lorem ipsum dolor sit amet,</h5><br />
    //                 {/* <Bar data={bar}
    //                     options={{
    //                 maintainAspectRatio: false
    //                 }}
    //                 /> */}
    //     </div>
    //     </CardBody>
    //     </Card>

    //   </div>

  <div>
      <div className="row" style={{marginTop:5,marginBottom:10}}>
        <div className="col-md-5"style={{padding:5,}}>
        <h4 style={{ marginTop:15}}>Company
            <select  style={{ marginLeft:20}} name="Novus">
            <option value="volvo">Novus</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select></h4>
        </div>
        </div>
      <Card style={{borderRadius: 20 ,maxHeight: 600,overflowY: 'scroll' }}>
        <CardHeader>
          Drivers
        </CardHeader>
        <CardBody>
            <div className="row">
                  <div className="col-md-6">
                      <h5>Flg 7 : Lorem ipsum dolor sit amet,</h5><br />
                      <br />
                          <div className="chart-wrapper">
                              <Doughnut data={doughnut}/>
                          </div><br />
                          <div style={{border:'1px solid black'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br /><br />
                               </div><br/><div style={{border:'1px solid black'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br /><br />
                               </div>
                  </div><div className="col-md-6">
                      <h5>Flg 7 : Lorem ipsum dolor sit amet,</h5><br />
                      <br />
                          <div className="chart-wrapper">
                          <Bar data={bar}
                                options={{
                            maintainAspectRatio: false
                            }}
                            />
                          </div><br/>
                            <div style={{border:'1px solid black'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br /><br />
                               </div><br/><div style={{border:'1px solid black'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br /><br />
                               </div>
                  </div>
          </div>
        </CardBody>
      </Card>
    </div>
    )
  }
}

export default Companies;
