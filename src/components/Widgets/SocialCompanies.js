/**
 * Social Companines
 */
/* eslint-disable */
import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Badge } from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import axios from 'axios';

// app config
import AppConfig from '../../constants/AppConfig';

class SocialCompanines extends Component {

  state = {
    socialCompanies: null
  }

  componentWillMount() {
    this.getSocialCompanies();
  }

  // get social companies
  getSocialCompanies() {
    // axios.get(`${AppConfig.appUrl}/data/socialCompanies.js`)
    //   .then((response) => {
    //     this.setState({ socialCompanies: response.data });
    //   })
    //   .catch(error => {
    //     // error handling
    //   })
  }

  render() {
    const { socialCompanies } = this.state;
    return (
      <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={400} autoHide>
        <div className="table-responsive">
          <table className="table table-hover table-middle">
            <thead>
              <tr>
                <th>Media</th>
                <th>Name</th>
                <th>Likes</th>
                <th>Comemnts</th>
                <th>Share</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {socialCompanies && socialCompanies.map((data, key) => (
                <tr key={key}>
                  <td>
                    <Button variant="fab" className={`btn-${data.icon} mr-15 mb-10 text-white`}>
                      <i className={`zmdi zmdi-${data.icon}`}></i>
                    </Button>
                  </td>
                  <td>
                    <span className="d-block">{data.title}</span>
                    <a href="javascript:void(0);" className="text-blue">{data.url}</a>
                  </td>
                  <td>{data.likes}</td>
                  <td>{data.comments}</td>
                  <td>{data.share}</td>
                  <td>
                    <Badge color="success" className="badge-pill badge-lg">{data.members}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Scrollbars>
    );
  }
}

export default SocialCompanines;
