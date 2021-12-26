// import printMe from './print.js'

async function getComponent() {
  const element = document.createElement('div')
  const { default: _ } = await import('lodash')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
  // const btn = document.createElement('button')
}

getComponent().then((component) => {
  document.body.appendChild(component)
})
