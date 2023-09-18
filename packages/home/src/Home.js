import React, { useEffect } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Home = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Olá Module Federation</h1>
        <hr className="my-2" />
        <p>Este componente é de outro App!</p>
        <p className="lead">
          <Button color="primary" onClick={() => dispatch(increment())}>Botão</Button>
        </p>
        <p className="lead">
          <Button color="primary" onClick={() => dispatch(decrement())}>Botão</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default Home;