import React from "react";
import ColumnsBase from 'react-bulma-components/lib/components/columns'
import ColumnBase from 'react-bulma-components/lib/components/columns/components/column'

const Columns = (props) => (
    <ColumnsBase {...props} />
);

Columns.Column = ColumnBase;

export {
    Columns
}
