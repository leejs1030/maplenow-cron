import * as commit from './commit';
import * as blob from 'libs/github/blob';
import * as tree from 'libs/github/tree';
import * as ref from 'libs/github/ref';
import * as del from 'libs/github/delete';
import { clearStatus } from 'libs/github/const';

const github = {
  ...commit,
  ...blob,
  ...tree,
  ...ref,
  ...del,
  clearStatus,
};

export default github;
