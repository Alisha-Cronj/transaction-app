import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class TableComponent extends Component {

    render() {
        return (
            <div>
                <ReactTable
                    data={this.props.data}
                    columns={this.props.columns}
                    sortable={false}
                    filterable={false}
                    resizable={false}
                    showPagination={false}
                    // defaultPageSize={50}
                    noDataText={"No data found"}
                    // noDataText={<Loader />}
                    
                    minRows={1}
                />

            </div>
        )
    }
}