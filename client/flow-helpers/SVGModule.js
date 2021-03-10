// @flow strict
import type { ComponentType } from 'react';

declare module.exports: {
  default: string,
  ReactComponent: ComponentType<{ className?: string }>,
};
