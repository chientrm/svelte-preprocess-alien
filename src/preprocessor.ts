import type { PreprocessorGroup } from 'svelte/types/compiler/preprocess';

export const alien = (newAlien: string): PreprocessorGroup => {
  return {
    markup: (options) => ({
      code: options.content.replaceAll(`${newAlien}:`, '$:')
    })
  };
};
