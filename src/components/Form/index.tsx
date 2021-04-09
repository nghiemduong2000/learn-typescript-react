import { getWeather } from 'actions/weatherAction';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

const Form: FC = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(getWeather(city, country));
    setCity('');
    setCountry('');
  };

  return (
    <form
      onSubmit={onSubmit}
      className="form flex w-full py-6 px-6 font-semibold shadow-custom bg-white-custom rounded-2xl"
    >
      <input
        type="text"
        placeholder="Điền tên thành phố"
        className="form__input flex-1 border-2 border-gray-200 mr-4 rounded-xl focus:outline-none focus:border-orange focus:border-2"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <input
        type="text"
        placeholder="Điền tên quốc gia"
        className="form__input flex-1 border-2 border-gray-200 mr-4 rounded-xl focus:outline-none focus:border-orange focus:border-2"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
      <button
        type="submit"
        className="form__btn bg-orange text-white rounded-xl hover:bg-orange-hard"
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default Form;
