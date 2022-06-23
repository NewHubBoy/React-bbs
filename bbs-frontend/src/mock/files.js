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
  {
    url: `/getReportList`,
    type: 'get',
    response: (options) => {
      const params = new URLSearchParams(options.url.split('?')[1]);
      const page = params.get('page');
      const pageSize = params.get('pageSize');
      const total = 200;
      let list = [];
      for (let i = 0; i < Number(pageSize); i++) {
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
        total,
        currentPage: Number(page),
        preSize: Number(pageSize),
      };
    },
  },
  {
    url: `/reportDetail`,
    type: 'get',
    response: (options) => {
      const params = new URLSearchParams(options.url.split('?')[1]);
      const id = params.get('id');
      return {
        code: '200',
        data: {
          id,
          title: Random.ctitle(5, 10),
          lv: Random.integer(1, 3),
          date: Random.date('yyyy-MM-dd'),
          author: Random.cname(),
          status: Random.integer(0, 2), // 0 未公开 1 已公开 2 已删除
          hots: Random.integer(0, 100),
          Abstract: {
            _id: id,
            title: Random.ctitle(5, 10),
            manufacturer: Random.cname(),
            author: Random.cname(),
            date: Random.date('yyyy-MM-dd'),
            origin: Random.ctitle(5, 10),
            params: Random.ctitle(5, 10),
            classfication: Random.ctitle(5, 10),
            lv: Random.integer(1, 3),
            score: Random.integer(1, 20),
          },
          status: [
            {
              date: Random.date('yyyy-MM-dd'),
              status: Random.integer(1, 3),
            },
            {
              date: Random.date('yyyy-MM-dd'),
              status: Random.integer(1, 3),
            },
          ],
          description: {
            description: Random.ctitle(5, 200),
          },
        },
      };
    },
  },
];
