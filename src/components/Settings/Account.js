import React, { Component } from 'react'
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

class Account extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormField label="Name">
            <TextInput />
          </FormField>
          <FormField label="Email">
            <TextInput />
          </FormField>
          <FormField label="Password">
            <TextInput />
          </FormField>
          <FormField label="Notifications">
            <TextInput />
          </FormField>
          <FormField label="Timezone">
            <TextInput />
          </FormField>
        </Form>
      </div>
    );
  }
}

export default Account
