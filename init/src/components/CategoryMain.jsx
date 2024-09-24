import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import { fetchCategories } from '../features/category/categorySlice'
import CategoryItem from './CategoryItem'

const CategoryMain = () => {
  const settingsCat = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      }
    ]
  }
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.category)
  useEffect(() => {
    dispatch(fetchCategories(1, 10))
  }, [dispatch])
  console.log(categories.length)
  return (
    <div className='container'>
      <div>
        <Slider {...settingsCat}>
         
         
          {categories.map((category, index) => (
            <>
            <div key={index}>
 
              <CategoryItem category={category} key={index}/>
            </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CategoryMain
