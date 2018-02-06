import React from 'react';
import ScheduleInfo from './ScheduleInfo';

const marketSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function Schedule(){
  return (
    <div>
      <style jsx>{`
        div {
          background: lightpink;
          width: 100%;
        }
        h3 {
          text-align: center;
        }
      `}</style>
      <h3>Weekly Itinerary</h3>
      {marketSchedule.map((dailyInfo, index) =>
        <ScheduleInfo day={dailyInfo.day}
          location={dailyInfo.location}
          hours={dailyInfo.hours}
          booth={dailyInfo.booth}
          key={index}/>
      )}
    </div>
  );
}

export default Schedule;
