import React from 'react'
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import FormEditIcon from 'grommet/components/icons/base/FormEdit';

const Devices = () =>
<Table>
  <thead>
    <tr>
    Devices
    </tr>
  </thead>
  <tbody>
    <TableRow>
      <td>
        Dubai
      </td>
      <td>
        MKAKDHJFLAGFJA
      </td>
      <td>
        <FormEditIcon />
      </td>
    </TableRow>
    <TableRow>
      <td>
        Doha
      </td>
      <td>
        HFJDFKALGKLJGEDKH
      </td>
      <td>
        <FormEditIcon />
      </td>
    </TableRow>
  </tbody>
</Table>

export default Devices
