import $ from 'jquery'

export function renderTitle(param) {
  $('h1').html(param)
  console.log(param)
}

export function renderContent(param) {
  $('.container').html(param)
}
