import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreator from '../../reducer/actions.js';

import Spinner from '../spinner/spinner.js';

const withData = (View, getData) => {

    class DataItem extends Component {
        componentDidMount() {
            this.props.loadData(getData);
        }

        render() {
            const {data} = this.props;

            if (!data) {
                return <Spinner />
            }

            return <View {...this.props} />
        }
    }

    const mapStateToProps = ({dataList}) => {
        return {
            data: dataList
        }
    };
    
    const mapDispatchToProps = (dispatch) => {
        const {loadData} = bindActionCreators(ActionCreator, dispatch);
        return {
            loadData: (method) => loadData(method),
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(DataItem)
};

export default withData;
