import { getWeather } from 'actions/weatherAction';
import 'antd/dist/antd.css';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather('Hanoi', 'Vietnam'));
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <div className="App">
        <div className="fixed w-full z-1">
          <Navbar />
          <Title />
        </div>
        <div className="appWrap w-full bg-opacity-50 bg-gradient-to-b from-orange-l to-white-custom">
          <div className="body mx-auto">
            <Form />
            <Weather />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
