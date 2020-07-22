import React from 'react';

//Components
    //External
    import TableRow from '@material-ui/core/TableRow';
    import TableCell from '@material-ui/core/TableCell';
    import Checkbox from '@material-ui/core/Checkbox';
    //Internal

export default function Row(props){

    const { id, row, index, names, isItemSelected, ...rest} = props;

    const labelId = `enhanced-table-checkbox-${index}`;

    return(
        <TableRow
            hover
            onClick={(event) => props.handleClick(event, row[names[0]], index)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row[names[0]].toString()+index.toString()}
            id={index}
            selected={isItemSelected}
        >
            <TableCell padding="checkbox">
                <Checkbox
                    checked={isItemSelected}
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </TableCell>
            <TableCell component="th" id={labelId} scope="row" padding="none">
                {row[names[0]]}
            </TableCell>
            {names.map((element,index) => {
                if(index!=0)
                    return <TableCell align="left" key={names[index].toString()}>{row[element]}</TableCell>
            })}
        </TableRow>
    );
}