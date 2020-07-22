import React from 'react';

//Components
    //External
        import TableBody from '@material-ui/core/TableBody';
        import TableRow from '@material-ui/core/TableRow';
        import TableCell from '@material-ui/core/TableCell';
    //Internal
        import Row from './Row.js'

export default function Rows(props){

    const { order, orderBy, rows, page, rowsPerPage, selected, ...rest} = props;

    const isSelected = (name) => selected.indexOf(name) !== -1;
    const names = Object.keys(rows[0]);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, (rows.length - page) * rowsPerPage);
    const dense=0;

    return(
    <TableBody>
        {props.stableSort(rows, props.getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              const isItemSelected = isSelected(row.fruit);
              
              return (
                <Row
                    row={row}
                    index={index}
                    handleClick={props.handleClick}
                    isItemSelected={isItemSelected}
                    names={names}
                    key={index}
                    id={index}
                />
              );
            })}
        {emptyRows > 0 && (
            <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
        )}
    </TableBody>
    )
}