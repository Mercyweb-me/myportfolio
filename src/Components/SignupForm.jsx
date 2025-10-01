import {useState} from "react";

function SignupForm() {
  const [formData, setFormData] = useState({ username: '', email: '',password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.username.includes('')) newErrors.username = 'Username is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (formData.password.length < 8) newErrors.password='more than 8 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors(validate()); // Real-time feedback
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>

    <form onSubmit={handleSubmit} className="flex justify-center items-center my-5 rounded-md">
        <div className="w-100 h-70 flex flex-col bg-white gap-10 justify-center items-center">
      <div className="">
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.Email}</p>}
      </div>
      <div>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Sign Up</button>
    </div>
    </form>

    
    </>
  );
}
 export default SignupForm;