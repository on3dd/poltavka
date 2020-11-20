import QueueItem from '../../../types/QueueItem';
import { capitalizeText, reduceName } from '../../table';

export const data: QueueItem[] = new Array(100)
  .fill(0)
  .map((_, idx) => ({
    key: idx,
    id: idx + 1,
    number: idx + 1,
    registration_date: '13.11.2020, 17:23:21',
    country: 'Россия',
    car_number: 'а123бв125',
    product: 'Пшено',
    driver: 'Иванов Иван Иванович',
    car_owner: 'OOO "Иванов и КО"',
    car_location: 'Российская Федерация',
    car_status: 'В пути',
  }));

export const columns = [
  {
    title: '№',
    dataIndex: 'number',
  },
  {
    title: 'Дата регистрации',
    dataIndex: 'registration_date',
  },
  {
    title: 'Страна',
    dataIndex: 'country',
    render: capitalizeText,
  },
  {
    title: 'Номер авто',
    dataIndex: 'car_number',
  },
  {
    title: 'Товар',
    dataIndex: 'product',
    render: capitalizeText,
  },
  {
    title: 'Водитель',
    dataIndex: 'driver',
    render: reduceName,
  },
  {
    title: 'Собственник',
    dataIndex: 'car_owner',
  },
  {
    title: 'Местоположение',
    dataIndex: 'car_location',
  },
  {
    title: 'Статус',
    dataIndex: 'car_status',
  },
];
