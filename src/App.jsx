import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

const [userEdit, setUserEdit] = useState()

const [formIsClose, setFormIsClose] = useState(true)

const BASEURL = 'https://users-crud.academlo.tech'
const [users, getUsers, createUser, deleteUser, updateUser ] = useCrud(BASEURL)

useEffect(() => {
  getUsers('/users/')
}, [])

const handleOpenForm = () => {
  setFormIsClose(false)
}

  return (
    <div className='app'>
      <header className='app__header'>
      <h1 className='app__title'>Users</h1>
      <button onClick={handleOpenForm} className='app__btn'>➕  Create new user</button>
      </header>
    
      <FormUser 
      createUser={createUser}
      userEdit= {userEdit}
      updateUser={updateUser}
      setUserEdit={setUserEdit}
      formIsClose={formIsClose}
      setFormIsClose={setFormIsClose}
      />
      <div className='use-container'>
        {
          users?.map( user => (
            <UserCard 
            key= {user.id}
            user = {user}
            deleteUser= {deleteUser}
            setUserEdit= {setUserEdit}
            handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
