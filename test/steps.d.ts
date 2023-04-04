/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type ExpectHelper = import('../dist/index.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends REST, JSONResponse, ExpectHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<JSONResponse>, WithTranslation<ExpectHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
