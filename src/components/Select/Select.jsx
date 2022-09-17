import Form from 'react-bootstrap/Form';

function SelectSizesExample({ options, onChange }) {
  return (
    <>
      <Form.Select size="lg" onChange={onChange}>
        {options.map(item => {
          return (
            <option key={item.title} value={item.title}>
              {item.title}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
}

export default SelectSizesExample;
