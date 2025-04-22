import type { StorybookConfig } from '@storybook/svelte-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../src/pages/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-svelte-csf',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/svelte-vite',
    options: {}
  },
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite'
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation'
  }
};

export default config;
