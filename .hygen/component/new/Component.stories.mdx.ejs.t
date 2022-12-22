---
to: "<%= neededStory ? `${path}/${name}.stories.mdx` : null %>"
---
import { Meta, Canvas } from '@storybook/addon-docs'
import { <%= name %> } from './<%= name %>'

<Meta title='<%= group %>/<%= name %>/info' component={<%= name %>} />

# <%= name %>

<Canvas>
  <<%= name %> label='Button' />
</Canvas>

## 基本情報
