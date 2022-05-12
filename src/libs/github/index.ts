import { createCommit } from './commit';
import { createBlob } from 'libs/github/blob';
import { createTree, getTree } from 'libs/github/tree';
import { changeRef } from 'libs/github/ref';
import { clearStatus } from 'libs/github/const';

const github = {
  createCommit,
  createBlob,
  getTree,
  createTree,
  changeRef,
  clearStatus,
};

export default github;
