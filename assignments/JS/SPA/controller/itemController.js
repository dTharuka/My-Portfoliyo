// var item1=new Array();
var itemObj;
let itemIdGenerater=1;
$('#itemId').val("I00-"+itemIdGenerater);
$('#btnAddItem').click(function (){

    $("#itemTblBody").empty();

    let itemId = $('#itemId').val();
    let itemName = $('#ItemName').val();
    let qty = $('#itemQty').val();
    let unitPrice = $('#unitPrice').val();

    itemObj= {
        itemI: itemId,
        itemN: itemName,
        itemQ: qty,
        uP: unitPrice
    }

    item1.push(itemObj);

    for(var l of item1){
        var row="<tr><th >"+l.itemI+"</th><th >"+l.itemN+"</th><th >"+l.itemQ+"</th><th>"+l.uP+"</th></tr>"
        $('#tblItem').append(row);
    }


    clearItemText();
    clickItemFind();
    itemDoubleClick();
    loadAllItemForOption();
    itemIdGenerater++;
    $('#itemId').val("I00-"+itemIdGenerater);

})


$('#srcItemID').keyup(function (e2){
    let clickKey2=e2.which;
    if(clickKey2 === 13){
        for (var s2 of item1){
            if(s2.itemI===$('#srcItemID').val()){
                $('#itemId').val(s2.itemI);
                $('#ItemName').val(s2.itemN);
                $('#itemQty').val(s2.itemQ);
                $('#unitPrice').val(s2.uP);

            }
        }
    }
})



function clearItemText(){
    // $('#itemId').val("");
    $('#ItemName').val("");
    $('#itemQty').val("");
    $('#unitPrice').val("");
}

function clickItemFind(){
    $('#itemTblBody>tr').click(function(){
        $('#itemId').val($(this,'#itemTblBody>tr').children(':nth-child(1)').text());
        $('#ItemName').val($(this,'#itemTblBody>tr').children(':nth-child(2)').text());
        $('#itemQty').val($(this,'#itemTblBody>tr').children(':nth-child(3)').text());
        $('#unitPrice').val($(this,'#itemTblBody>tr').children(':nth-child(4)').text());
    })
}

function itemDoubleClick(){
    $('#itemTblBody>tr').dblclick(function (){
        clearItemText();
        // $('#itemId').val($(this).remove());
        $(this).remove();
    })
}


// --------------------------enter eka gahuwama yatata yana seen eka--------------------------------------
$("#itemId,#ItemName,#itemQty,#unitPrice").keydown(function (event){
    if(event.which === 9){
        event.preventDefault();
    }
})

$('#itemId').keyup(function (event){
    let catchEvent=event.which;
    console.log(catchEvent);
    if(catchEvent === 13){
        $('#ItemName').focus();
    }
})

$('#ItemName').keyup(function (event){
    let catchEvent=event.which;
    console.log(catchEvent);
    if(catchEvent === 13){
        $('#itemQty').focus();
    }
})

$('#itemQty').keyup(function (event){
    let catchEvent=event.which;
    console.log(catchEvent);
    if(catchEvent === 13){
        $('#unitPrice').focus();
    }
})

$('#unitPrice').keyup(function (event){
    let catchEvent=event.which;
    console.log(catchEvent);
    if(catchEvent === 13){

        let itemId = $('#itemId').val();
        let itemName = $('#ItemName').val();
        let qty = $('#itemQty').val();
        let unitPrice = $('#unitPrice').val();

        itemObj= {
            itemI: itemId,
            itemN: itemName,
            itemQ: qty,
            uP: unitPrice
        }

        item1.push(itemObj);

        var rowEnter="<tr><th >"+$('#itemId').val()+"</th><th >"+$('#ItemName').val()+"</th><th >"+$('#itemQty').val()+"</th><th>"+$('#unitPrice').val()+"</th></tr>"
        $('#tblItem').append(rowEnter);
        clearItemText();
        $('#ItemName').focus();
        clickItemFind();
        itemDoubleClick();
        loadAllItemForOption();
        itemIdGenerater++;
        $('#itemId').val("I00-"+itemIdGenerater);
    }
})

// ===============================Delete Item===================================================
$('#btnDeleteItem').click(function (){
    var masseageItemDelete=confirm('are you wont delete this Item');
    if (masseageItemDelete===true){
        for (k=0;k<item1.length;k++){
            let deleteCheck2=item1[k];
            if ($('#itemId').val() === deleteCheck2.itemI){
                item1.splice(k,1);
                $('#itemTblBody').empty();


                for(var l of item1){
                    var row="<tr><th >"+l.itemI+"</th><th >"+l.itemN+"</th><th >"+l.itemQ+"</th><th>"+l.uP+"</th></tr>"
                    $('#itemTblBody').append(row);
                }

                $('#itemId').val("");
                $('#ItemName').val("");
                $('#itemQty').val("");
                $('#unitPrice').val("");

                $('#itemTblBody>tr').click(function(){
                    $('#itemId').val($(this,'#itemTblBody>tr').children(':nth-child(1)').text());
                    $('#ItemName').val($(this,'#itemTblBody>tr').children(':nth-child(2)').text());
                    $('#itemQty').val($(this,'#itemTblBody>tr').children(':nth-child(3)').text());
                    $('#unitPrice').val($(this,'#itemTblBody>tr').children(':nth-child(4)').text());
                })
            }
        }
        $('#itemId').val("I00-"+itemIdGenerater);
        $('#ItemName').focus();
    }


})

// ==============================================update item=====================================================

$('#btnUpdateItem').click(function (){
    var updateItemId=$('#itemId').val();
    var updateItemName=$('#ItemName').val();
    var updateItemQty=$('#itemQty').val();
    var updateUnitPrice=$('#unitPrice').val();

    for (cu=0;cu<item1.length;cu++){
        let checkUpdate=item1[cu];
        if (checkUpdate.itemI === updateItemId){

            checkUpdate.itemI=updateItemId;
            checkUpdate.itemN=updateItemName;
            checkUpdate.itemQ=updateItemQty;
            checkUpdate.uP=updateUnitPrice;

            $('#itemTblBody').empty();


            for(var l of item1){
                var row="<tr><th >"+l.itemI+"</th><th >"+l.itemN+"</th><th >"+l.itemQ+"</th><th>"+l.uP+"</th></tr>"
                $('#itemTblBody').append(row);
            }

            $('#itemId').val("");
            $('#ItemName').val("");
            $('#itemQty').val("");
            $('#unitPrice').val("");

            $('#itemTblBody>tr').click(function(){
                $('#itemId').val($(this,'#itemTblBody>tr').children(':nth-child(1)').text());
                $('#ItemName').val($(this,'#itemTblBody>tr').children(':nth-child(2)').text());
                $('#itemQty').val($(this,'#itemTblBody>tr').children(':nth-child(3)').text());
                $('#unitPrice').val($(this,'#itemTblBody>tr').children(':nth-child(4)').text());
            })

        }

        $('#itemId').val("I00-"+itemIdGenerater);
        $('#ItemName').focus();

    }


})

// ========================================== regex=======================================================

$('#ItemName').on('keyup', function (e) {
    if (/^[A-z]{2,10}$/.test($('#ItemName').val())) {
        $('#ItemName').css('border', '3px solid green')
        $('#itemNameTxtLbl').text('')
        if (e.key === "Enter") {
            $('#itemQty').focus()
        }
    } else {
        $('#ItemName').css('border', '3px solid red');
        $('#itemNameTxtLbl').text("Your input can't be validated, Ex - JackDaniel  ")
    }
})


$('#itemQty').on('keyup', function (e) {
    if (/^[0-9]{1,10}$/.test($('#itemQty').val())) {
        $('#itemQty').css('border', '3px solid green')
        $('#itemQtyTxtLbl').text('')
        if (e.key === "Enter") {
            $('#unitPrice').focus()
        }
    } else {
        $('#itemQty').css('border', '3px solid red');
        $('#itemQtyTxtLbl').text("Your input can't be validated, Ex - 5  ")
    }
})

$('#unitPrice').on('keyup', function (e) {
    if (/^[0-9]{3,6}.[0-9]{1,2}$/.test($('#unitPrice').val())) {
        $('#unitPrice').css('border', '3px solid green');
        $('#unitPriceTxtLbl').text('');
        if (e.key === "Enter") {
            $('#ItemName').focus();
        }
    } else {
        $('#unitPrice').css('border', '3px solid red');
        $('#unitPriceTxtLbl').text("Your input can't be validated, Ex - 500.00  ");
    }
})

