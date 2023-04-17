
const Validation =(values) =>{
    let errors ={}

    if(!values.name){
        errors.name = "لطفا اسم وارد کنید"
    }
    else if( values.name.length < 5){
        errors.name = "اسم باید بیشتر از 5 حرف باشد"
    }
    if(!values.password){
        errors.password = "لطفا کلمه عبور وارد کنید"
    }
    else if( values.password.length < 8){
        errors.password = "کلمه عبور باید بیشتر از 8 رقم باشد"
    }
    return errors

}
export default Validation;