const Success = ({ formData }) => {
  return (
    <div className='success'>
      <h1>Excellent!</h1>
      <h1>See you in November 2023!</h1>

      <p>Submission Summary:</p>
      <ul>
        <li>First name: {formData.firstName}</li>
        <li>Last name: {formData.lastName}</li>
        <li>Phone number: {formData.phone}</li>
        <li>Email: {formData.email}</li>
        <li>
          Address: {formData.address1}
          {formData.address2 !== undefined ? `, ${formData.address2}` : null}
        </li>
        <li>Country: {formData.country}</li>
        <li>State: {formData.state || 'none'}</li>
        <li>City: {formData.city}</li>
      </ul>
    </div>
  );
};

export default Success;
