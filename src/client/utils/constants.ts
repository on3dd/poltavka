export const PATH_NAMES = {
  admin: 'Главная',
  queue: 'Очередь',
  users: 'Пользователи',
  ordinary: 'Обычные',
  dispatchers: 'Диспетчеры',
  administrators: 'Администраторы',
  news: 'Новости',
  statistics: 'Статистика',
  edit: 'Редактирование',
  new: 'Новый',
  '[id]': 'ID',
};

export const API_BASE_URL = 'http://localhost:3000/api/';

export const API_ENDPOINTS = {
  auth: 'auth',
  admin: {
    index: '/admin',
    security: '/admin/security',
    users: {
      ord: {
        index: '/admin/users/ordinary',
        id: (id: number) => {
          return `/admin/users/ordinary/${id}`;
        },
      },
      dis: {
        index: '/admin/users/dispatchers',
        id: (id: number) => {
          return `/admin/users/ordinary/${id}`;
        },
      },
      adm: {
        index: '/admin/users/admins',
        id: (id: number) => {
          return `/admin/users/ordinary/${id}`;
        },
      },
    },
  },
};
