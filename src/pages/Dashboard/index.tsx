/* eslint-disable import/no-duplicates */
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import en from 'date-fns/locale/en-US';

import { utcToZonedTime } from 'date-fns-tz';

import api from '~/services/api';
import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 13, 14, 15, 16, 17, 18];

interface Schedule {
  time: string;
  past: boolean;
  appointment?: Appointment;
}

const Dashboard = () => {
  const [schedule, setSchedule] = useState<Schedule[]>([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, 'MMMM d', { locale: en }),
    [date]
  );

  function handlePrevDate() {
    setDate(subDays(date, 1));
  }

  function handleNextDate() {
    setDate(addDays(date, 1));
  }

  const loadSchedule = useCallback(async () => {
    const res = await api.get<Appointment[]>('schedule', { params: { date } });

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const data = range.map((hour) => {
      const checkDate = setMilliseconds(
        setSeconds(setMinutes(setHours(date, hour), 0), 0),
        0
      );
      const compareDate = utcToZonedTime(checkDate, timezone);

      return {
        time: `${hour}:00h`,
        past: isBefore(checkDate, new Date()),
        appointment: res.data.find((a) =>
          isEqual(parseISO(a.date), compareDate)
        ),
      };
    });
    setSchedule(data);
  }, [date, setSchedule]);

  useEffect(() => {
    loadSchedule();
  }, [date]);

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDate}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDate}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        {schedule.map((time) => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Available'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
};

export default Dashboard;
