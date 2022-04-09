import React from "react";
import { Card, Form, Table, ProgressBar } from "react-bootstrap";
import "./ContentTable.css";

const ContentTable = () => {
  return (
    <React.Fragment className='table-nav'>
    <div>
      <span>CAMPAIGNS</span>
      <span>TOP SITES</span>
      <span>TOP APPS</span>
      <span>TOP GEOS</span>
      <span>TOTAL SPEND</span>
      <span>ACCOUNT BALANCE</span>
    </div>
    <Card>
      <Card.Body>
        <h4 className="table-title">YOUR CAMPAIGNS</h4>
        <Form>
          <Form.Group className="mb-3">
          <Form.Control className="input-field" placeholder="Search by campaign name campaign tag." />
          </Form.Group>
        </Form>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Campaign name</th>
              <th>Campaign tag</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Spends($)</th>
              <th>Dates</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gaming-EU</td>
              <td>Games</td>
              <td>230,040,212</td>
              <td>43,302</td>
              <td>
                <ProgressBar className="bar-color" now={40} />
                7,043,76 of 20,000
              </td>
              <td>
                <ProgressBar className="bar-color" now={50} />
                01-11-2019 - 31-01-2020
              </td>
              <td>VIEW</td>
            </tr>
            <tr>
              <td>Gaming-EU</td>
              <td>Games</td>
              <td>230,040,212</td>
              <td>43,302</td>
              <td>
                <ProgressBar className="bar-color" now={40} />
                7,043,76 of 20,000
              </td>
              <td>
                <ProgressBar className="bar-color" now={50} />
                01-11-2019 - 31-01-2020
              </td>
              <td>VIEW</td>
            </tr>
            <tr>
              <td>Gaming-EU</td>
              <td>Games</td>
              <td>230,040,212</td>
              <td>43,302</td>
              <td>
                <ProgressBar className="bar-color" now={40} />
                7,043,76 of 20,000
              </td>
              <td>
                <ProgressBar className="bar-color" now={50} />
                01-11-2019 - 31-01-2020
              </td>
              <td>VIEW</td>
            </tr>
          </tbody>
        </Table>
        <div className="table-bottem-text">
          <h6>ADD CAMPAIGN</h6>
          <h6>MANAGE CAMPAIGN</h6>
        </div>
      </Card.Body>
    </Card>
    </React.Fragment>
  );
};

export default ContentTable;
