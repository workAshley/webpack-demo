import printMe from './print.js'

async function getComponent() {
  const element = document.createElement('div')
  const btn = document.createElement('button')
  const { default: _ } = await import('lodash')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}

getComponent().then((component) => {
  document.body.appendChild(component)
})
