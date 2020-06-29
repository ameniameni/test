import React, { Component } from 'react'
import { getOwnReports } from './daily-reports.service';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

class DailyReports extends Component {
    fields = ['name','registered', 'role', 'status']
    async componentDidMount(){
        await getOwnReports(this.state.token);
    }
    render(){
        return (
            <>
              
        
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>
                      Combined All Table
                    </CCardHeader>
                    <CCardBody>
                    <CDataTable
                      items={usersData}
                      fields={this.fields}
                      hover
                      striped
                      bordered
                      size="sm"
                      itemsPerPage={10}
                      pagination
                    />
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </>
          )
    }
  
}

export default DailyReports;
