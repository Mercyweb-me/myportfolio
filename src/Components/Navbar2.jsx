import React, { useRef, useState } from 'react'
const Navbar2 = () => {
    const [input, setInput]=useState('');
    const inputRef = useRef(null);
   // const handleSubmit =()=> alert(inputRef.current.value);
const [ formData, setFormData]= useState({email: '', password: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 const handleSubmit = (e) => {
    e.preventDefault(); // Stops page reload
    console.log('Submitted:', formData);
  };

  return (
    <div>
      <input className='text-red-600'
value={input}
onChange={(e)=> setInput(e. target.value)}/>

<input
value={input}
ref={inputRef}/>
<button onClick={handleSubmit} className='bg-red-300 rounded-2xl'>submit</button>

<form onSubmit={handleSubmit}>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"

         value={formData.password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>

    </div>
  )
}
export default Navbar2;