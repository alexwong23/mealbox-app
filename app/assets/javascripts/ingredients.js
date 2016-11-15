$(document).on('turbolinks:load', function () {
  $('#searchform').on('ajax:success', function (e, data, status) {
    $('.searchcontainer').text('')
    console.log(data.result)
    data.result.forEach(function (ingredient) {
      var newList = $('<li>')
      newList.text(ingredient.fields.item_name)
      $('.searchcontainer').append(newList)
    })
  })
})
