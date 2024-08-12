 
import { Link } from 'react-router-dom'

const CategoryItem = () => {
  return (
    <div className='cat-item px-1 py-3'>
      <Link className='bg-white rounded d-block p-2 text-center shadow-sm' to='trending'>
        <img alt='#' src='img/icons/Fries.png' className='img-fluid mb-2' />
        <p className='m-0 small'>Fries</p>
      </Link>
    </div>
  )
}

export default CategoryItem
