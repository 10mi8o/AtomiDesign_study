import React from 'react';
import Balloon from '../components/atoms/Balloon';


export default {
    title: 'Balloon',
    component: Balloon
};

export const balloon1 = () => <Balloon style={{position: 'absolute', top: '200px', left: '200px'}}>削除する</Balloon>
export const balloon2 = () => <Balloon style={{position: 'absolute', top: '50px', left: '50px'}}>次へ</Balloon>


