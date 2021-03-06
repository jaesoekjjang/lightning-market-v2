import React from 'react'
import styled from 'styled-components';
const Blocks = styled.div`
  height:300px;
  width:180px;
  border:0.1px solid lightgray;
  display:inline-block;
  box-sizing:border-box;

  & > *:not(div:first-child){
    padding:0 0.2rem;
  }
`
const Title = styled.div`
  width:100%;
  line-height:2rem;
  height:2rem;
  white-space:nowrap;
  text-overflow: ellipsis;
  overflow:hidden;
`
const PriceDate = styled.div`
  line-height:3rem;
  display:flex;
  justify-content:space-between;
`
const ImgContainer = styled.div`
  height:60%;
  border-bottom:0.1px solid lightgray;
  &>img{
    width:100%;
    height:100%;
  }
`

const EachProduct = ({ data }) => {
  const duration = new Date() - new Date(data.createdAt)
  const seconds = Math.floor(duration / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60)

  let time = ''

  if (minutes < 1) {
    time = seconds + '초 전'
  } else if (hours < 1) {
    time = minutes + '분 전'
  } else {
    time = hours + '시간 전'
  }


  return (
    <Blocks>
      <ImgContainer ><img src={`http://localhost:5000/${data.image[0]}`} alt="" /></ImgContainer>
      <Title>{data.title}</Title>
      <PriceDate>
        <span>{data.price}원</span>
        <span>{time}</span>
      </PriceDate>
      <hr />
      <div>{data.address}</div>
    </Blocks>
  )
}

export default EachProduct
