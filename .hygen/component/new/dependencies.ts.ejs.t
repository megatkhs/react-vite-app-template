---
to: "<%= neededDependencies ? `${path}/dependencies.ts` : null %>"
---
import type { <%= name %>Props } from "./<%= name %>"

export function useDependencies(props: <%= name %>Props) {
  return {}
}
