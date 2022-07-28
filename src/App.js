import Form from './components/form'
import List from './components/list'
import './App.css'
import {useEffect, useState} from 'react'

function App() {
  const initial = { date:'', amount:'', payment:'cash',remarks:''}
  const [form, setForm] = useState(initial)
  const [submit,setSubmit] = useState(false)
  const [datas,setDatas]= useState([])
  const handleClick =() => {
    setForm({});
  }
  const handleChange =(e) => {
    const {name, value} = e.target;
    setForm({...form, [name] : value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.date || form.amount==''){
      alert('please fill all the details')
      setSubmit(false)
    }else{
    setSubmit(true)
    setDatas([form])
  }
}
  return (
    <div className='App'>
      <Form 
      handleClick={handleClick} 
      setForm={setForm} 
      form={form} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} />
      <List 
       datas={datas}/>
    </div>
  );
}

export default App;
