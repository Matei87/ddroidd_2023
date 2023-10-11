import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Select, Form, Input } from 'antd';

const FormComponent = ({ setFormData }) => {
  const [data, setData] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setFormData(values);
    navigate('/success');
  };

  const handleCountry = (value) => {
    const filterCountry = data.filter((el) => el.value === value);
    setStates(filterCountry[0][`${value}_states`]);
    setCities(filterCountry[0][`${value}_cities`]);
  };

  const fetchData = async () => {
    try {
      const requestCountries = await fetch(
        'https://countriesnow.space/api/v0.1/countries'
      );
      const requestStates = await fetch(
        'https://countriesnow.space/api/v0.1/countries/states'
      );

      if (requestCountries.status === 200 && requestStates.status === 200) {
        const responseCountries = await requestCountries.json();
        const responseStates = await requestStates.json();
        let countries = [];
        if (
          responseCountries.data.length > 0 &&
          responseStates.data.length > 0
        ) {
          countries = responseCountries.data.map((el) => {
            const filteredCountry = responseStates.data
              .filter((obj) => obj.name === el.country)
              .map((obj) =>
                obj.states.map((element) => ({
                  value: element.name,
                  label: element.name,
                }))
              )
              .flat();

            return {
              value: el.country,
              label: el.country,
              [el.country + '_cities']: el.cities.map((element) => ({
                value: element,
                label: element,
              })),
              [el.country + '_states']: filteredCountry,
            };
          });
        }
        setData(countries);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='form'>
      <h1>Application Form</h1>
      <Form
        layout='vertical'
        name='basic'
        onFinish={onFinish}
        autoComplete='off'
      >
        <p>Contact Information</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            columnGap: '2rem',
          }}
        >
          <Form.Item
            label='First Name'
            name='firstName'
            style={{ width: 394 }}
            rules={[
              {
                required: true,
                message: 'First name is required',
              },
            ]}
          >
            <Input placeholder='First Name' />
          </Form.Item>

          <Form.Item
            label='Last Name'
            name='lastName'
            style={{ width: 394 }}
            rules={[
              {
                required: true,
                message: 'Last name is required',
              },
            ]}
          >
            <Input placeholder='Last Name' />
          </Form.Item>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            columnGap: '2rem',
          }}
        >
          <Form.Item
            name='phone'
            label='Phone Number'
            style={{ width: 394 }}
            rules={[
              {
                required: true,
                message: 'Wrong phone number format',
                pattern: new RegExp(/\+?(\d{2})(\d{3})(\d{3})(\d{3})/),
              },
            ]}
          >
            <Input placeholder='+40 711 111 111' />
          </Form.Item>

          <Form.Item
            name='email'
            label='Email address'
            style={{ width: 394 }}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid Email',
              },
              {
                required: true,
                message: 'Email is required',
              },
            ]}
          >
            <Input placeholder='john@doe.com' />
          </Form.Item>
        </div>

        <p>Address</p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Form.Item
            label='Address Line 1'
            name='address1'
            style={{ width: 816, margin: '0 auto' }}
            rules={[
              {
                required: true,
                message: 'Address is required',
              },
            ]}
          >
            <Input placeholder='Street name & number' />
          </Form.Item>
          <Form.Item
            label='Address Line 2'
            name='address2'
            style={{ width: 816, margin: '0 auto' }}
          >
            <Input placeholder='Suite, apartment' />
          </Form.Item>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Form.Item
            label='Country'
            name='country'
            style={{ width: 233 }}
            rules={[
              {
                required: true,
                message: 'Country is required',
              },
            ]}
          >
            <Select
              placeholder='Country'
              onChange={handleCountry}
              options={data}
            />
          </Form.Item>

          <Form.Item label='State' name='state' style={{ width: 233 }}>
            <Select placeholder='State' options={states} />
          </Form.Item>

          <Form.Item
            label='City'
            name='city'
            style={{ width: 233 }}
            rules={[
              {
                required: true,
                message: 'City is required',
              },
            ]}
          >
            <Select placeholder='City' options={cities} />
          </Form.Item>
        </div>
        <Form.Item
          style={{ display: 'flex', justifyContent: 'end', margin: 0 }}
        >
          <Button className='button' type='primary' htmlType='submit'>
            Join Us
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
