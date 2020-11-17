import { useFetch } from 'hooks/useFetch'
import { useSuccessToast } from 'hooks/useSuccessToast'
import React from 'react'
import DishesMenuTemplate from 'templates/DishesMenuTemplate'

const paragraphTopText =
  ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga culpa nihil delectus neque. Optio officiis odit eius praesentium sunt ipsum, corrupti ab est in? Facere et, voluptates laboriosam iure excepturi sit. Repellat praesentium consectetur laborum nam fugiat magnam soluta aspernatur?'
const paragraphBottomText =
  ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga culpa nihil delectus neque. Optio officiis odit eius praesentium sunt ipsum, corrupti ab est in? Facere et, voluptates laboriosam iure excepturi sit. Repellat praesentium consectetur laborum nam fugiat magnam soluta aspernatur?'

const MainCoursesPage = () => {
  const { loading, error, data } = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/dishes/byType?type=mainCourse`
  )
  useSuccessToast()
  return (
    <DishesMenuTemplate
      data={data}
      isLoading={loading}
      error={error}
      headerText='Dania główne'
      paragraphTopText={paragraphTopText}
      paragraphBottomText={paragraphBottomText}
      heroImage='https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      sectionImage='https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    />
  )
}

export default MainCoursesPage
