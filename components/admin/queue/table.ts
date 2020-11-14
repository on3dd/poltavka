import { capitalize } from '../../../utils/functions';
import QueueItem from '../../../types/QueueItem';

const capitalieTitle = (val: string) => capitalize(val);

export const data: QueueItem[] = new Array(100)
  .fill(0)
  .map((_, idx) => ({
    key: idx,
    id: idx + 1,
    number: idx + 1,
    registration_date: '13.11.2020, 17:23:21',
    country: 'Россия',
    car_number: 'a228уе322',
    product: 'Снюс',
    driver: 'Ишутин А. Я.',
    car_owner: 'OOO "Jaguar.Pro"',
    car_location: 'Российская Федерация',
    car_status: 'Убил негра',
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
    render: capitalieTitle,
  },
  {
    title: 'Номер авто',
    dataIndex: 'car_number',
  },
  {
    title: 'Товар',
    dataIndex: 'product',
    render: capitalieTitle,
  },
  {
    title: 'Водитель',
    dataIndex: 'driver',
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
