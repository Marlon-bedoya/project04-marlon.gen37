import './styles/Card.css'

const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm }) => {

    const handleDelete = () => {
        deleteUser('/users/', user.id)
    } 

    const handleEdit = () => {
        setUserEdit(user)
        handleOpenForm()
    }



  return (
    <article className='Card'>
     <header className='card__header'>
        <h2 className='card__name'>{`${user.first_name} ${user.last_name}`}</h2>
        <hr  className='card__hr'/>
        <ul className='card__list'>
            <li className='card__item'>
                <span className='card__label'>Email</span><span className='card__value'>{user.email}</span>
            </li>
            <li className='card__item'>
                <span className='card__label'>Birthday</span><span className='card__value'>🎁 {user.birthday}</span>
            </li>
        </ul>
        <hr  className='card__hr'/>
        <article className='card_btn-container'>
        <button className='card__btn' onClick={handleDelete}>🗑</button>
        <button className='card__btn2' onClick={handleEdit}>🖊</button>
        </article>

     </header>

    </article>
  )
}

export default UserCard