import React from 'react'
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const router = useNavigate();


    return (
      <>
      <div>
        <h1 >Latest Available Movies</h1>
        <Card
          onClick={()=>handelClick()}/>
      </div>
      </>
    );
  
}

export default Home;
