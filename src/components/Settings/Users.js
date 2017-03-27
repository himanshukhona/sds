import React from 'react'
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import FormEditIcon from 'grommet/components/icons/base/FormEdit';

const Users = () =>
<Table>
  <thead>
    <tr>

    </tr>
  </thead>
  <tbody>
    <TableRow>
      <td>
        Support
      </td>
      <td>
        Support@rate.com
      </td>
      <td>
        <FormEditIcon />
      </td>
    </TableRow>
    <TableRow>
      <td>
        Engineering
      </td>
      <td>
        Engineering@rate.com
      </td>
      <td>
        <FormEditIcon />
      </td>
    </TableRow>
  </tbody>
</Table>

export default Users
