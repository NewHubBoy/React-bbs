import Mock from 'mockjs';

import files from './files';

const mocks = [...files];

Mock.setup({
  timeout: 500,
});

for (const mock of mocks) {
  Mock.mock(RegExp(mock.url + '.*?'), mock.type, mock.response);
}
