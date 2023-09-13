import React, { useEffect } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { increment, getCount } from '../../lib/lib'

const Home = () => {
  const [count, setCount] = React.useState(1);
  useEffect(() => {
    getCount(setCount)
    console.log('Home');
  }, []);
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Olá Module Federation</h1>
        <hr className="my-2"/>
        <p>Este componente é de outro App!</p>
        <p className="lead">Contador: {count}</p>
        <p className="lead">
          <Button color="primary">Botão</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default Home;