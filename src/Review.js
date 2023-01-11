import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, image, job, text } = people[index]

  const confirmNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  }
  
  const prevPerson = () => {
    setIndex((index) => {
      let currentIndex = index - 1;
      return confirmNumber(currentIndex);
    })
  }

  const nextPerson = () => {
    setIndex((index) => {
      let currentIndex = index + 1;
      return confirmNumber(currentIndex);
    })
  }

  const randomPerson = () => {
    setIndex((index) => {
      let currentIndex = Math.floor(Math.random() * people.length);
      return currentIndex
    })
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='random-btn' onClick={randomPerson}>
          Random
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
