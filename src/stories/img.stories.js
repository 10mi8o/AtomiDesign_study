import React from 'react';
import Img from '../components/atoms/Img';
import testImg from '../mock/images/img01.jpg'

export default {
    title: 'Img',
    component: Img
};

export const img = () => <Img src={testImg} width='128' style={{display: 'block', height: '100px'}} />
