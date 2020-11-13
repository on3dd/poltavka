export const data = new Array(100)
  .fill(0)
  .map((_, idx) => ({
    key: idx,
    number: idx + 1,
    name: 'Путин В. В.',
    phone_number: '+7 (900) 322-14-88',
    registration_date: '13.11.2020, 17:23:21',
    added_by: 'Обама Б. Х.',
  }));

export const columns = [
  {
    title: '№',
    dataIndex: 'number',
  },
  {
    title: 'ФИО',
    dataIndex: 'name',
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
