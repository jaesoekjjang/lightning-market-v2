import React from 'react'
import ImgBlockGrid from './ImgBlockGrid';
import Carousel from './Carousel';
import Layout from '../../components/Layout';
import { createGlobalStyle } from 'styled-components';

export const LinkTagStyle = createGlobalStyle`
    a{
        text-decoration: none;
        color:black;
    }

    a:visited{
        color:black;
    }
`
const Main = () => {
  return (
    <React.Fragment>
      <Layout>
        <Carousel />
        <ImgBlockGrid />
      </Layout>
    </React.Fragment>
  )
}

export default Main;