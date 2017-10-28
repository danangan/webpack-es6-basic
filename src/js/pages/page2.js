import * as render from '../libs/render'

import $ from 'jquery'

render.renderTitle('this is another page')

render.renderContent('this is another page content')

$('body').append('<h2>Appended using Jquery</h2>')
