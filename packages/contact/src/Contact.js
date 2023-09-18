import React, { useEffect, useState } from 'react';
import { eventConnect } from '../../eventConnect/lib';

import './contact.css';

const Contact = () => {
  const [count, setCount] = useState(null);
  const connect = eventConnect()

  useEffect(() => {
    connect.emit('getCount', setCount);
  }, []);

  return (
    <div id="contact-page">
      <h1>Página de Contato</h1>
      <p>Esta é uma simples página de contato</p>
      <p>Contador: {count}</p>
    </div>
  )
}

export default Contact;