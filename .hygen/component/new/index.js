module.exports = {
  prompt: async ({ prompter, args }) => {
    const name =
      args.name ??
      (await prompter
        .prompt({
          name: 'name',
          message: 'コンポーネントの名前は？',
          type: 'input',
          hint: 'Button',
        })
        .then(({ name }) => name))

    const { path } = await prompter.prompt({
      name: 'path',
      message: `"${name}"コンポーネントの種類は？`,
      type: 'select',
      choices: [
        `src/components/elements/${name}`,
        `src/components/composites/${name}`,
        `src/components/domains/${name}`,
      ],
    })

    const { needed } = await prompter.prompt({
      message: `"${name}"コンポーネントと一緒に生成するものは？`,
      name: 'needed',
      type: 'select',
      choices: ['dependencies', 'style', 'story'],
      initial: ['dependencies', 'style', 'story'],
      multiple: true,
    })

    const neededDependencies = needed.includes('dependencies')
    const neededStyle = needed.includes('style')
    const neededStory = needed.includes('story')
    const tag = args.tag ?? 'div'

    const [_, group] = path.match(/^src\/(components\/.*?)\/.*$/)

    return {
      name,
      path,
      group,
      tag,
      neededDependencies,
      neededStyle,
      neededStory,
    }
  },
}
