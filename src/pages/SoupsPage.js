import { useFetch } from 'hooks/useFetch'
import { useSuccessToast } from 'hooks/useSuccessToast'
import React from 'react'
import DishesMenuTemplate from 'templates/DishesMenuTemplate'

const paragraphTopText =
  ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga culpa nihil delectus neque. Optio officiis odit eius praesentium sunt ipsum, corrupti ab est in? Facere et, voluptates laboriosam iure excepturi sit. Repellat praesentium consectetur laborum nam fugiat magnam soluta aspernatur?'
const paragraphBottomText =
  ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga culpa nihil delectus neque. Optio officiis odit eius praesentium sunt ipsum, corrupti ab est in? Facere et, voluptates laboriosam iure excepturi sit. Repellat praesentium consectetur laborum nam fugiat magnam soluta aspernatur?'

const SoupsPage = () => {
  const { loading, error, data } = useFetch(
    'http://localhost:5000/api/dishes/byType?type=soup'
  )
  useSuccessToast()
  return (
    <DishesMenuTemplate
      data={data}
      isLoading={loading}
      error={error}
      headerText='Zupy'
      paragraphTopText={paragraphTopText}
      paragraphBottomText={paragraphBottomText}
      heroImage='https://images.pexels.com/photos/262947/pexels-photo-262947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      sectionImage='https://images.pexels.com/photos/3662103/pexels-photo-3662103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    />
  )
}

export default SoupsPage
