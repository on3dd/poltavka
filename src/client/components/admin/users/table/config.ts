import {
  renderIndex,
  reduceName,
  transformDate,
} from '../../../table';

export const data = new Array(100)
  .fill(0)
  .map((_, idx) => ({
    key: idx,
    id: idx + 1,
    number: idx + 1,
    name: 'Путин Владимир Владимирович',
    country: 'Российская Федерация',
    prefix: '+7',
    phone: '(900) 322-14-88',
    password: 'N16g.R',
    registration_date: '13.11.2020, 17:23:21',
    added_by: 'Обама Барак Хуссейн',
  }));

export const columns = [
  {
    title: '№',
    dataIndex: 'index',
    render: renderIndex,
  },
  {
    title: 'ФИО',
    dataIndex: 'name',
    render: reduceName,
  },
  {
    title: 'Префикс',
    dataIndex: 'prefix',
  },
  {
    title: 'Номер телефона',
    dataIndex: 'phone',
  },
  {
    title: 'Дата регистрации',
    dataIndex: 'date',
    render: transformDate,
  },
  // {
  //   title: 'Добавлен',
  //   dataIndex: 'added_by',
  //   render: reduceName,
  // },
];
