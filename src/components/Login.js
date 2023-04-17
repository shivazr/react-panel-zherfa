import React , { useEffect, useState } from 'react'
import { AiFillEyeInvisible  , AiFillEye} from "react-icons/ai";
import Validation from './Validation';
function Login() {
    const [values, setValues]= useState({
        name:'',
        password:''
    })
    const [ errors, setError] = useState({})
    function handleChange(e){
        setValues({...values ,[e.target.name] : e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        setError(Validation(values))
    }
    useEffect(() =>{
        if(Object.keys(errors).length === 0 && ( values.name !== "" && values.password !== ""))
        {
           alert("فرم ثبت شد") 
        } 
    },[errors])
    const[open, setOpen]= useState(false)
    const toggle = () => setOpen(!open)
    // const[show,setShow] = useState(false)
    // const handleShow =() =>{
    //     setShow(!show)
    // }
    async function login() {
        const url = `http://localhost:3000/api/v1/avthadmin/login`
        const res = await fetch(url);
        const data = await res.json();
        // setPhone(data)
        // console.log(res);
    }
  return (
    <div className='login'>
       <form className="form-container" onSubmit={handleSubmit}>
                <h3>sign up user</h3>
                <div className="form-grap">
                    {/* <label>
                        phone:
                        <input type="text" name="phone"  />
                    </label> */}
                    {/* */}
            <label htmlFor='phone' >نام کاربری</label>
            <input type="text" 
            value={values.name} 
            name="name"
            placeholder='نام کاربری'
            // onChange={e=> setPhone(e.target.value)}
            onChange={handleChange}
            />
            {errors.name && <p style={{color:'red' , fontSize:'20px'}}>{errors.name}</p>}
                </div>
                <div className="form-grap">
                    <label htmlFor='password' >پسورد</label>
                    {
                        (open === false) ? <AiFillEye className='iconshow' onClick={toggle}/> : <AiFillEyeInvisible className='iconshow' onClick={toggle}/>
                    }
                   
                    <input 
                    placeholder='pass'
                    type={   (open === false) ? "password" : "text"}  
                    value ={values.password}
                    name="password"
                    onChange={handleChange}
                     />
                     {errors.password && <p  className="erorr"style={{color:'red' , fontSize:'20px'}}>{errors.password}</p>}
                </div>
                {/* <div className="form-grap"> */}
                {/* <input className='inbtn' type="submit" value="Submit" />  */}
                   <button className='btn'onClick={login}>login</button>
                {/* </div> */}

            </form>
    </div>
  )
}

export default Login
