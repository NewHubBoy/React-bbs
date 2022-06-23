import styled from 'styled-components';

import React, { createElement, useState, useEffect, Fragment } from 'react';
import { Avatar, Comment, Tooltip, List, Form, Button, Input } from 'antd';
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const { TextArea } = Input;

let index;

const CommentItem = (props) => {
  const { t } = useTranslation();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const reply = () => {
    props.onReply(props.p_id, props.id);
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === 'disliked' ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to" onClick={reply}>
      Reply to
    </span>,
  ];
  console.log(props);

  return (
    <Comment
      actions={actions}
      author={<a>{props.author}</a>}
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
      }
      content={<p>{props.content}</p>}
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <div>{props.datetime}</div>
        </Tooltip>
      }
    >
      {props.children}
    </Comment>
  );
};

const CommentList = ({ comments, onReply }) => {
  const generateComment = (comments) => {
    let vdom = [];

    if (comments instanceof Array) {
      for (let i = 0; i < comments.length; i++) {
        vdom.push(
          <CommentItem
            key={comments[i].id}
            id={comments[i].id}
            author={comments[i].author}
            content={comments[i].content}
            datetime={comments[i].datetime}
            p_id={comments[i].p_id}
            onReply={onReply}
          >
            {comments[i]._children
              ? generateComment(comments[i]._children)
              : null}
          </CommentItem>
        );
      }
    } else {
      vdom.push(
        <CommentItem
          key={comments.id}
          id={comments.id}
          author={comments.author}
          content={comments.content}
          datetime={comments.datetime}
          p_id={comments.p_id}
          onReply={onReply}
        >
          {generateComment(comments._children)}
        </CommentItem>
      );
    }
    return vdom;
  };

  return (
    <List
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={(props) => (
        <CommentItem {...props} onReply={onReply}>
          {props._children?.map((item) => (
            <CommentItem {...item} onReply={onReply}></CommentItem>
          ))}
        </CommentItem>
      )}
    >
      {generateComment(comments)}
    </List>
  );
};

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export const ReportComment = () => {
  const [comments, setComments] = useState([
    {
      id: 0,
      p_id: null,
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: 'hello',
      datetime: moment().fromNow(),
      _children: [
        {
          id: 123,
          p_id: 0,
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: 'hi',
          datetime: moment().fromNow(),
          _children: [],
        },
        {
          id: 321,
          p_id: 0,
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: 'hi222',
          datetime: moment().fromNow(),
          _children: [],
        },
      ],
    },
    {
      id: 1,
      p_id: null,
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: 'world',
      datetime: moment().fromNow(),
      _children: [
        {
          id: 555,
          p_id: 1,
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: 'hhh',
          datetime: moment().fromNow(),
          _children: [
            {
              id: 444,
              p_id: 555,
              author: 'Han Solo',
              avatar: 'https://joeschmoe.io/api/v1/random',
              content: 'ertrwet',
              datetime: moment().fromNow(),
              _children: [],
            },
            {
              id: 666,
              p_id: 555,
              author: 'Han Solo',
              avatar: 'https://joeschmoe.io/api/v1/random',
              content: 'ertrwet',
              datetime: moment().fromNow(),
              _children: [],
            },
          ],
        },
      ],
    },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const str = '@tom;hello world !';
  console.log(str.match(/@(\S*\s*\S*\s*\S*\s*\S*\s*\S*\s*);/)[1]);
  console.log(str.replace(/@(\S*\s*\S*\s*\S*\s*\S*\s*\S*\s*);/, ''));

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([...comments]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleReply = (p_id, id) => {
    // setValue(`@${comments[index].author} `);
    console.log('reply', p_id, id);
  };

  return (
    <Fragment>
      {comments.length > 0 && (
        <CommentList comments={comments} onReply={handleReply} />
      )}
      <Comment
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </Fragment>
  );
};
