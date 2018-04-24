import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const _rowheight = 25;

const CustomTableCell = withStyles(theme => ({
  head: {
    color: '#95a3b8',
    textAlign : 'center',
    borderBottomColor :'#515966'
  },
  body: {
    color: '#d5d6d9',
    fontSize: 15,
    textAlign : 'center',
    borderBottomColor :'#272d36'
  },
}))(TableCell);

let id = 0;
function createData(name, calories, fat) {
  id += 1;
  return { id, name, calories, fat};
}

const data = [
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
  createData(0.00001535, 159, 6),
];

function SellOrder(props) {
  const { classes } = props;

  return (
      <Table>
        <TableHead>
          <TableRow style={{height :_rowheight}}>
            <CustomTableCell>ZRX/ETH</CustomTableCell>
            <CustomTableCell> ZRX</CustomTableCell>
            <CustomTableCell> ETH</CustomTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id} style={{height :_rowheight}}>
                <CustomTableCell>{n.name}</CustomTableCell>
                <CustomTableCell >{n.calories}</CustomTableCell>
                <CustomTableCell >{n.fat}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>

      </Table>
  );
}

SellOrder.propTypes = {
  classes: PropTypes.object,
};

export default SellOrder;
