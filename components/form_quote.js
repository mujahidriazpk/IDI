// pages/index.js
import { useState,useRef} from 'react';
import Container from "./container";
import Recaptcha from './Recaptcha';

const Form2 = (props) => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const recaptchaRef = useRef();
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    documents_count: '',
    documents_type: '',
    image_enhancement: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!recaptchaValue) {
        alert('Please complete the reCAPTCHA');
        return;
      }
      const response_captcha = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recaptchaValue }),
      });
  
      const data = await response_captcha.json();
  
      if (data.success) {
        //alert('Form submitted successfully');
        const response = await fetch('https://idiimage.com/wp-json/custom/v1/submit-form', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                input_values: {
                  1: formData.name,  // Replace 1 with the actual field ID for 'name'
                  2: formData.email,
                  9: formData.number,
                  12: formData.documents_count,
                  13: formData.documents_type,
                  14: formData.image_enhancement,
                }
              }),
            });
            const data1 = await response.json();
            if (response.ok) {
              //console.log(data1);
              alert('Form submitted successfully!');
              recaptchaRef.current.reset();
              setRecaptchaValue(null);
              setFormData({
                name: '',
                email: '',
                number: '',
                documents_count: '',
                documents_type: '',
                image_enhancement: '',
              });
            } else {
              alert('Failed to submit form');
            }
      } else {
        alert('reCAPTCHA verification failed');
      }
    } catch (error) {
      //console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <Container className='py-20'>
      <div className="flex w-full flex-col text-center my-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl">
        Request a quote</div>
      <form id="quote_form" method="POST"  className="mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">Full name</label>
            <div className="mt-2.5">
              <input onChange={handleChange} required value={formData.name} placeholder="Name" type="text" name="name" id="name" autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <div className="mt-2.5">
              <input onChange={handleChange} required value={formData.email} placeholder="Email" type="email" name="email" id="email" autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
            <div className="relative mt-2.5">
              <input onChange={handleChange} required value={formData.number} placeholder="Phone Number" type="text" name="number" id="number" autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="documents_count" className="block text-sm font-semibold leading-6 text-gray-900">How many documents?</label>
            <div className="mt-2.5">
              <input onChange={handleChange} required value={formData.documents_count} placeholder="Eg. 10" type="documents_count" name="documents_count" id="documents_count"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="documents_type" className="block text-sm font-semibold leading-6 text-gray-900">What Type of Documents?</label>
            <div className="relative mt-2.5">
              <input onChange={handleChange} required value={formData.documents_type} placeholder="" type="text" name="documents_type" id="documents_type" autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="documents_count" className="block text-sm font-semibold leading-6 text-gray-900">Image enhancement required?</label>
            <div className='flex'>
              <div className="flex items-center me-4">
                <input onChange={handleChange} required id="image_enhancement0" type="radio" value="Yes" name="image_enhancement" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                <label htmlFor="image_enhancement0" className="ms-2 text-sm font-medium text-gray-900">Yes</label>
              </div>
              <div className="flex items-center me-4">
                <input onChange={handleChange} required id="image_enhancement1" type="radio" value="No" name="image_enhancement" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                <label htmlFor="image_enhancement1" className="ms-2 text-sm font-medium text-gray-900">No</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10"><Recaptcha recaptchaRef={recaptchaRef} onChange={handleRecaptchaChange} /></div>
        <div className="mt-10">
          <button type="submit"
            className="block w-full rounded-md bg-[#2164A1] uppercase px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#2164A1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Quote</button>
        </div>
      </form>
    </Container>
  );
}
export default Form2;