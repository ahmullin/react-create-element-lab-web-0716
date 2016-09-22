//Code React element here

const Title = React.createElement('h1', {}, 'An Awesome Person')

const Tagline = React.createElement('p', {}, 'Who is learning React')

const Interests = React.createElement('ul', {className: 'me_interests'}, [
  React.createElement('li', {}, 'JavaScript'),
  React.createElement('li', {}, 'React'),
  React.createElement('li', {}, 'Movies'),
  React.createElement('li', {}, 'Ice cream')
  ])

const meInReact = React.createElement('div', {className: 'me'}, [Title, Tagline, Interests]);
