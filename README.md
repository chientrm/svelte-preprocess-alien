# svelte-preprocess-alien

Replace alien dollar sign with your favorite alien string.

[![Download](https://img.shields.io/npm/dt/svelte-preprocess-alien)](https://www.npmjs.com/package/svelte-preprocess-alien)
[![Version](https://img.shields.io/npm/v/svelte-preprocess-alien)](https://www.npmjs.com/package/svelte-preprocess-alien)

## Install

```
npm i -D svelte-preprocess-alien
```

## Config

```ts
// svelte.config.js

import { alien } from 'svelte-preprocess-alien';

...

  preprocess: [alien('🐸🐸🐸'), vitePreprocess({})],

...
```

Now you can write Svelte reactivity like this

```html
<script lang="ts">
  🐸🐸🐸: mine = $page.url.searchParams.get('mine');
</script>
```