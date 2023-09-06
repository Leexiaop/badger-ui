// @ts-nocheck
import { createHashHistory, History } from 'D:/lee/badger-ui/node_modules/umi/node_modules/@umijs/runtime';

let options = {
  "basename": "/badger-ui/"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: History = process.env.__IS_SERVER ? null : createHashHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createHashHistory(options);
  }

  return history;
};

export { history };
