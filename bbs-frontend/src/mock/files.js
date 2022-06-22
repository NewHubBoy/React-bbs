import Mock from 'mockjs';

const Random = Mock.Random;

export default [
  {
    url: '/getTable/new',
    type: 'get',
    response: () => {
      let list = [];
      for (let i = 0; i < 5; i++) {
        let item = {};
        item.id = Random.id();
        item.title = Random.ctitle(5, 10);
        item.lv = Random.integer(1, 5);
        item.author = Random.cname();
        item.date = Random.date('yyyy-MM-dd');
        list.push(item);
      }
      return {
        code: '200',
        data: list,
      };
    },
  },
];
