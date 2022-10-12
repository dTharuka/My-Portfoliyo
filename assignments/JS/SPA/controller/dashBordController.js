$('#custLoadId').click(function (){
    $('#dashForm').hide()
    $('#itemMain').hide()
    $('#orderMain').hide()
    $('#custMain').show()
})


$('#homeLoadId').click(function (){
    $('#dashForm').show()
    $('#itemMain').hide()
    $('#orderMain').hide()
    $('#custMain').hide()
})


$('#orderLoadId').click(function (){
    $('#dashForm').hide()
    $('#itemMain').hide()
    $('#orderMain').show()
    $('#custMain').hide()
})

$('#itemLoadId').click(function (){
    $('#dashForm').hide()
    $('#itemMain').show()
    $('#orderMain').hide()
    $('#custMain').hide()
})