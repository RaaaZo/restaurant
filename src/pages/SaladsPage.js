import { useFetch } from 'hooks/useFetch'
import React from 'react'
import DishesMenuTemplate from 'templates/DishesMenuTemplate'

const paragraphTopText =
  ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga culpa nihil delectus neque. Optio officiis odit eius praesentium sunt ipsum, corrupti ab est in? Facere et, voluptates laboriosam iure excepturi sit. Repellat praesentium consectetur laborum nam fugiat magnam soluta aspernatur?'
const paragraphBottomText =
  ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga culpa nihil delectus neque. Optio officiis odit eius praesentium sunt ipsum, corrupti ab est in? Facere et, voluptates laboriosam iure excepturi sit. Repellat praesentium consectetur laborum nam fugiat magnam soluta aspernatur?'

const SaladsPage = () => {
  const { loading, error, data } = useFetch(
    'http://localhost:5000/api/dishes/byType?type=salad'
  )

  return (
    <DishesMenuTemplate
      data={data}
      isLoading={loading}
      error={error}
      headerText='Sałatki'
      paragraphTopText={paragraphTopText}
      paragraphBottomText={paragraphBottomText}
    />
  )
}

export default SaladsPage
