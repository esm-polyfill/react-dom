'use strict';
import * as m from '@esm-polyfill/react-dom';

var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
export function createRoot(c, o) {
  i.usingClientEntryPoint = true;
  try {
    return m.createRoot(c, o);
  } finally {
    i.usingClientEntryPoint = false;
  }
}
export function hydrateRoot(c, h, o) {
  i.usingClientEntryPoint = true;
  try {
    return m.hydrateRoot(c, h, o);
  } finally {
    i.usingClientEntryPoint = false;
  }
};
