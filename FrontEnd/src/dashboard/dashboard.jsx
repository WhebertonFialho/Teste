import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
// import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    render(){
        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão Beta' />
                <Content>
                    <h1>Dashboard</h1>
                    <Row>                       
                    </Row>
                </Content>
            </div>
        )
    }
}

// const mapStateToProps = state => ({summary: state.dashboard.summary})
// const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default Dashboard