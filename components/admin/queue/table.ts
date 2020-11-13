export const data = new Array(100)
  .fill(0)
  .map((_, idx) => ({
    key: idx,
    number: idx + 1,
    registration_date: '13.11.2020, 17:23:21',
    country: 'Россия',
    car_number: 'a228уе322',
    product: 'Снюс',
    driver: 'Ишутин А. Я.',
    car_owner: 'OOO "Jaguar.Pro"',
    car_location: 'ДНР',
    car_status: '1. Убил негра',
  }));

export const columns = [
  {
    title: 'Номер',
    dataIndex: 'number',
  },
  {
    title: 'Дата регистрации',
    dataIndex: 'registration_date',
  },
  {
    title: 'Страна',
    dataIndex: 'country',
  },
  {
    title: 'Номер авто',
    dataIndex: 'car_number',
  },
  {
    title: 'Товар',
    dataIndex: 'product',
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
    title: 'Локация',
    dataIndex: 'car_location',
  },
  {
    title: 'Статус',
    dataIndex: 'car_status',
  },
];

// rowSelection object indicates the need for row selection
export const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    );
  },
};
