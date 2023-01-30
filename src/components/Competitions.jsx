import React from 'react';
import CompetitionCard from './CompUtils/CompetitionCard';
import {compDetails} from '../constants/competition';
const Competitions = () => {
  return (
    <section id="competitions">
      <h1 className='flex-1 font-poppins font-semibold text-[45px] text-primary leading-[80px]'>
        Competitions
      </h1>

      <div className='flex flex-wrap sm:flex-row md:flex-row'>
        {
          compDetails.map((competition)=>(
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3'>
              <div className='w-full rounded-lg overflow-hidden' id={competition.id} >
                <CompetitionCard title={competition.title} details={competition.details} date={competition.date}/>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default Competitions