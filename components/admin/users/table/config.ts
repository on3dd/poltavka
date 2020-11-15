import { reduceName } from '../../../table';

export const data = new Array(100)
  .fill(0)
  .map((_, idx) => ({
    key: idx,
    id: idx + 1,
    number: idx + 1,
    name: 'Путин Владимир Владимирович',
    phone_number: '+7 (900) 322-14-88',
    registration_date: '13.11.2020, 17:23:21',
    added_by: 'Обама Барак Хуссейн',
  }));

export const columns = [
  {
    title: '№',
    dataIndex: 'number',
  },
  {
    title: 'ФИО',
    dataIndex: 'name',
    render: reduceName,
  },
  {
    title: 'Номер телефона',
    dataIndex: 'phone_number',
  },
  {
    title: 'Дата регистрации',
    dataIndex: 'registration_date',
  },
  {
    title: 'Добавлен',
    dataIndex: 'added_by',
    render: reduceName,
  },
];
