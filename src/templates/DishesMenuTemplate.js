import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Header } from 'components/atoms/Header'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import DishCard from 'components/organisms/DishCard'
import { Paragraph } from 'components/atoms/Paragraph'
import { SectionsImage } from 'components/atoms/SectionsImage'
import LoadingSpinner from 'components/utils/LoadingSpinner'

const DishCardsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  padding: 40px 5px;

  @media (min-width: 1024px) {
    flex-flow: row wrap;
  }
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

const StyledHeader = styled(Header)`
  margin: 20px auto;
  padding: 0 10px;
`

const StyledParagraph = styled(Paragraph)`
  margin: 30px auto;
  padding: 0 10px;
`

const ErrorWrapper = styled.div`
  width: 100%;
  min-height: 83vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DishesMenuTemplate = ({
  data,
  headerText,
  paragraphTopText,
  paragraphBottomText,
  isLoading,
  error,
  heroImage,
  sectionImage,
}) => {
  if (!isLoading && error) {
    return (
      <ErrorWrapper>
        <Paragraph>{error}</Paragraph>
      </ErrorWrapper>
    )
  }

  return (
    <>
      {isLoading ? (
        <ErrorWrapper>
          <LoadingSpinner />
        </ErrorWrapper>
      ) : (
        <PagesWrapper>
          <HeroImage src={heroImage} />
          <InnerWrapper>
            <StyledHeader>{headerText}</StyledHeader>
            <StyledParagraph>{paragraphTopText}</StyledParagraph>
            <SectionsImage url={sectionImage} />
            <DishCardsWrapper>
              {data.map(({ _id, name, description, image }) => (
                <DishCard
                  key={_id}
                  name={name}
                  desc={description}
                  img={image}
                />
              ))}
            </DishCardsWrapper>

            <StyledParagraph>{paragraphBottomText}</StyledParagraph>
          </InnerWrapper>
        </PagesWrapper>
      )}
    </>
  )
}

DishesMenuTemplate.propTypes = {
  data: PropTypes.array,
  headerText: PropTypes.string.isRequired,
  paragraphTopText: PropTypes.string.isRequired,
  paragraphBottomText: PropTypes.string.isRequired,
}

export default DishesMenuTemplate
