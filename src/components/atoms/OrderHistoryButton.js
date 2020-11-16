import styled from 'styled-components'

export const OrderHistoryButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 20px 50px;
  margin: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.accentsLight};
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accentsLight};
    border-color: ${({ theme }) => theme.navigationDark};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`
