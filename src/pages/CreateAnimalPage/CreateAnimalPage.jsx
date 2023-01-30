import React from 'react'
import './CreateAnimal.scss'
import { FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from '@material-ui/core';
function CreateAnimalPage() {
  return (
   <div className="createAnimal">
      <div className="form">
       <div className="input">
        <Input fullWidth='100%' placeholder='Tên thú cưng'/>
       </div>
       <div className="input">
        <Input fullWidth='100%' placeholder='Địa chỉ'/>
        
       </div>
       <div className="input">
       <FormControl component="fieldset">
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup aria-label="gender" name="gender1" >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    
  </RadioGroup>
</FormControl>
       
       </div>
       <div className="input">
       <FormControl component="fieldset">
  <FormLabel component="legend">Chó/Mèo</FormLabel>
  <RadioGroup  name="gender1" >
    <FormControlLabel value="dog" control={<Radio />} label="Chó" />
    <FormControlLabel value="cat" control={<Radio />} label="Mèo" />
    
  </RadioGroup>
</FormControl>
       
       </div>
       <div className="input">
        <Input fullWidth='100%' placeholder='Số lượng' value={'Số lượng : 1'} disabled/>
        
       </div>
       <div className="input">
        <Input fullWidth='100%' placeholder='Tuổi'  type='number'/>
        
       </div>
       <div className="input">
        <Input fullWidth='100%' placeholder='Giống chó/mèo'  type='text'/>
        
       </div>
       <div className="input">
        <Input fullWidth='100%' placeholder='Mô tả'  type='text'/>
        
       </div>
       <div className="input">
        <Input fullWidth='100%' placeholder='Giá bán'  type='number'/>
        
       </div>
       <div className="input">
     <label  htmlFor='img' component="legend">Chọn ảnh</label>
        
        <input onChange={(e)=>console.log(e.target.files)} style={{display:'none'}} type="file" id='img' multiple />
        
       </div>
      </div>
   </div>
  )
}

export default CreateAnimalPage