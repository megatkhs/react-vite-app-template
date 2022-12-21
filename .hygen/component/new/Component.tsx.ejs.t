---
to: <%= path %>/<%= name %>.tsx
---
<% if (neededStyle) { -%>
import clsx from 'clsx'
<% } -%>
<% if (neededDependencies) { -%>
import { useDependencies } from './dependencies'
<% } -%>
<% if (neededStyle) { -%>
import styles from './<%= name %>.module.css'
<% } -%>
<% if (neededDependencies || neededStyle) { -%>

<% } -%>
export type <%= name %>Props = {
  className?: string
}

export const <%= name %> = (props: <%= name %>Props) => {
<% if (neededDependencies) { -%>
  const deps = useDependencies(props)
<% } -%>
  const { className } = props

  return (
<% if (neededStyle) { -%>
    <<%= tag %> className={clsx(styles.module, className)}>
<% } else { -%>
    <<%= tag %> className={className}>
<% } -%>
    </<%= tag %>>
  )
}
