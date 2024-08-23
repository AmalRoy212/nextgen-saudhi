import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// List of public email domains
const publicDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com", "icloud.com"];

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        first_name: '',
        last_name: '',
        company: '',
        designation: '',
        email: '',
        contactNumber: '',
        telephone: '',
        technologies: '',
        event: '',
        consent: false,
      });
    }
  }, [reset, isSubmitSuccessful]);

  const submitRegistrationForm = async (data) => {
    
    // Ensure no null values are sent
    const cleanedData = {};
    for (const key in data) {
      cleanedData[key] = data[key] || '';
    }

    try {
      const response = await axios.post('https://utrechtitconsulting.com/api/r.php', cleanedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data); // Log API response to verify format
      if (response.data.message === 'Registration successful') {
        alert('Registration successful');
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error.message || error.response?.data?.message || error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  // Custom email validation function
  const validateEmail = (email) => {
    const domain = email.split('@')[1];
    if (publicDomains.includes(domain)) {
      return "Public email domains are not allowed.";
    }
    return true;
  };

  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit(submitRegistrationForm)}>
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="first_name" className="label-style">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter First Name"
            className="form-style"
            {...register('first_name', { required: true })}
          />
          {errors.first_name && (
            <span className="-mt-1 text-[12px] text-yellow-400">Please enter your first name.</span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="last_name" className="label-style">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            className="form-style"
            placeholder="Enter Last Name"
            {...register('last_name', { required: true })}
          />
          {errors.last_name && (
            <span className="-mt-1 text-[12px] text-yellow-400">Please enter your last name.</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="company" className="label-style">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            placeholder="Enter Company Name"
            className="form-style"
            {...register('company', { required: true })}
          />
          {errors.company && (
            <span className="-mt-1 text-[12px] text-yellow-400">Please enter your company name.</span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="designation" className="label-style">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            placeholder="Enter Designation"
            className="form-style"
            {...register('designation', { required: true })}
          />
          {errors.designation && (
            <span className="-mt-1 text-[12px] text-yellow-400">Please enter your designation.</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="contactNumber" className="label-style">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            className="form-style"
            placeholder="Enter Contact Number"
            {...register('contactNumber', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers are allowed."
              }
            })}
          />
          {errors.contactNumber && (
            <span className="-mt-1 text-[12px] text-yellow-400">
              {errors.contactNumber.message || "Please enter your contact number."}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="telephone" className="label-style">
            Telephone
          </label>
          <input
            type="text"
            id="telephone"
            placeholder="Enter Telephone Number"
            {...register('telephone', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers are allowed."
              }
            })}
            className="form-style"
          />
          {errors.telephone && (
            <span className="-mt-1 text-[12px] text-yellow-400">
              {errors.telephone.message || "Please enter your telephone number."}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="email" className="label-style">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            className="form-style"
            {...register('email', { 
              required: true, 
              validate: validateEmail 
            })}
          />
          {errors.email && (
            <span className="-mt-1 text-[12px] text-yellow-400">{errors.email.message || "Please enter your email address."}</span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="event" className="label-style">
            I am interested in
          </label>
          <select
            id="event"
            {...register('event', { required: true })}
            className="form-style"
          >
            <option value="">Select</option>
            <option value="Attend as a Delegate">Attend as a Delegate</option>
            <option value="Attend as a Speaker">Attend as a Speaker</option>
            <option value="Attend as a Partner">Attend as a Partner</option>
          </select>
          {errors.event && (
            <span className="-mt-1 text-[12px] text-yellow-400">Please select an event.</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="technologies" className="label-style">
          Select the technologies you are interested in
        </label>
        <select
          id="technologies"
          {...register('technologies', { required: true })}
          className="form-style"
        >
          <option value="">Select</option>
          <option value="Digital Integration">Digital Integration</option>
          <option value="BPM/DPA/BPA">BPM/DPA/BPA</option>
          <option value="Data Engineering">Data Engineering</option>
          <option value="IT Consulting">IT Consulting</option>
        </select>
        {errors.technologies && (
          <span className="-mt-1 text-[12px] text-yellow-400">Please select a technology.</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="consent" className="label-style flex items-center">
          <input
            type="checkbox"
            id="consent"
            {...register('consent', { required: true })}
            className="mr-2"
          />
          I consent to the terms and conditions.
        </label>
        {errors.consent && (
          <span className="-mt-1 text-[12px] text-yellow-400">You must consent to the terms and conditions.</span>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-yellow-400 px-6 py-3 text-center text-[13px] font-medium uppercase tracking-wide text-black transition hover:bg-yellow-300"
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
