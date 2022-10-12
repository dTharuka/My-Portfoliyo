let qtyOnHand;
let getOrderItemId;
let newItemId;
let newItemName;
let newUnitPrice;
let orderQty
let orderIdGanareter=1;
let orderAmount=0;
$('#txtOrderID').val("OR00-"+orderIdGanareter);


// ===============================================Item Area============================================================

function loadAllItemForOption() {
    $("#selectItemCode").empty();
    for (let itC of item1) {
        $("#selectItemCode").append(`<option>${itC.itemI}</option>`);
    }
}

$('#selectItemCode').change(function (){
    var selectValve=$(this).val();
    for(se=0; se<item1.length; se++){
        let selectItem=item1[se];
        if(selectValve === selectItem.itemI){
           $('#txtItemCode').val(selectItem.itemI);
            $('#txtItemDescription').val(selectItem.itemN);
            $('#txtItemPrice').val(selectItem.uP);
            $('#txtQTYOnHand').val(selectItem.itemQ);
            qtyOnHand= parseInt(selectItem.itemQ);
            getOrderItemId=selectItem.itemI;
            newItemId=selectItem.itemI;
            newItemName=selectItem.itemN;
            newUnitPrice=selectItem.uP;
        }
        $('#txtDiscount').val("");
        $('#txtCash').val("");
        $('#txtBalance').val("");
    }
})

$('#btnAddToTable').click(function (){

// ===================================================================================

    let countUpQty;
    let countUpTot;
    let countUpQty2;
    let countUpTot2;
    $('#orderTable').empty();
    let tblItemCode=$('#txtItemCode').val();
    let tblItemName=$('#txtItemDescription').val();
    let tblPrice=$('#txtItemPrice').val();
    let tblQty=$('#txtQty').val();
    // let discount=parseInt($('#txtDiscount').val());
    let cash=parseInt($('#txtCash').val());
    // let amount=((parseInt(newUnitPrice)*orderQty)-(((parseInt(newUnitPrice)*orderQty)/100)*discount));
    orderQty=parseInt($('#txtQty').val());/*pickup line 66*/
    let tot=((parseInt(newUnitPrice)*orderQty));

    // let balance=(cash-amount);
    // $('#total').text(amount);
    // $('#subtotal').text(balance);
    // $('#txtBalance').val(balance);
    let tblTotal=tot;



    let orderTblObj={
        iCode:tblItemCode,
        iName:tblItemName,
        iPrice:tblPrice,
        iQty:tblQty,
        iTotal:tblTotal,
        ordID : $('#txtOrderID').val()
    }




    let b=false;
    for (or=0; or<orderTable1.length;or++){
        let marjRow=orderTable1[or];
        if($('#txtItemCode').val() === marjRow.iCode && $('#txtOrderID').val() === marjRow.ordID ){
             b=true;
             countUpQty = parseInt(marjRow.iQty);
             countUpTot = parseInt(marjRow.iTotal);
            countUpQty2=parseInt(tblQty);
            countUpTot2=parseInt(tblTotal);
            marjRow.iCode=tblItemCode;
            marjRow.iName=tblItemName;
            marjRow.iPrice=tblPrice;
            marjRow.iQty=(countUpQty+countUpQty2);
            marjRow.iTotal=(countUpTot+countUpTot2);

            $('#orderTable').empty();
        }
    }




    if(b===false){
        orderTable1.push(orderTblObj);
    }

    for(var l of orderTable1){
        var rowOrderTable="<tr><th >"+l.iCode+"</th><th >"+l.iName+"</th><th >"+l.iPrice+"</th><th>"+l.iQty+"</th><th>"+l.iTotal+"</th></tr>"
        $('#orderTable').append(rowOrderTable);
        b=false;
    }


// ===================================================================================


    // orderQty=parseInt($('#txtQty').val());
    let newValve=(qtyOnHand-orderQty);
    for (n=0; n<item1.length; n++){
        let compere=item1[n];
        if(getOrderItemId === compere.itemI){
            // compere.itemQ=newValve;
            compere.itemQ=newValve;
            compere.itemI=newItemId;
            compere.itemN=newItemName;
            compere.uP=newUnitPrice;
        }

        $('#itemTblBody').empty();

        for(var l of item1) {
            var rowIOrder = "<tr><th >" + l.itemI + "</th><th >" + l.itemN + "</th><th >" + l.itemQ + "</th><th>" + l.uP + "</th></tr>"
            $('#itemTblBody').append(rowIOrder);
        }


    }
    orderAmount += tot;
})


// ================================================================================================================

// ==============================================Customer Area==================================================

function loadAllCustomerForOption() {
    $("#selectCusID").empty();
    for (let cuC of s1) {
        $("#selectCusID").append(`<option>${cuC.cI}</option>`);
    }
}

$('#selectCusID').change(function (){
    var selectCustomerValve=$(this).val();
    for (scv=0; scv<s1.length; scv++){
        let selectCustomer=s1[scv];
        if (selectCustomer.cI === selectCustomerValve){

            $('#orderCustomerID').val(selectCustomer.cI);
            $('#orderCustomerName').val(selectCustomer.cN);
            $('#orderCustomerAddress').val(selectCustomer.cA);
        }
    }
})


// =======================================Purchase Order==========================================================

$('#btnSubmitOrder').click(function (){

    // $('#orderTable').empty();
    // orderIdGanareter++;
    // $('#txtOrderID').val("OR00-"+orderIdGanareter);
    // let tblItemCode=$('#txtItemCode').val();
    // let tblItemName=$('#txtItemDescription').val();
    // let tblPrice=$('#txtItemPrice').val();
    // let tblQty=$('#txtQty').val();

    // for (oa=0; oa<orderTable1.length;oa++){
    //     let testAm=orderTable1[oa];
    //     orderAmount += parseInt(testAm.iTotal);
    // }
    let discount=parseInt($('#txtDiscount').val());
    let cash=parseInt($('#txtCash').val());
    let amount=(orderAmount-((orderAmount/100)*discount));
    let balance=(cash-amount);
    $('#total').text(amount);
    $('#subtotal').text(((orderAmount/100)*discount));
    $('#txtBalance').val(balance);

    // alert(discount);
    // alert(amount);
    // alert(balance);


    // let tblTotal=$('#total').text();

    let orderDeatilsTblObj={
        oId : $('#txtOrderID').val(),
        oDate : $('#txtDate').val(),
        cID : $('#orderCustomerID').val(),
        cusCash : $('#txtCash').val(),
        cusBalance : $('#txtBalance').val(),
        cusDiscount : $('#txtDiscount').val(),
        totOrder : amount
    }

    orderTable2.push(orderDeatilsTblObj);

    for(var cod of orderTable2){
        var rowOrderTable="<tr><th >"+cod.oId+"</th><th >"+cod.oDate+"</th><th >"+cod.cID+"</th><th>"+cod.cusCash+"</th><th>"+cod.cusBalance+"</th><th>"+cod.cusDiscount+"</th><th>"+cod.totOrder+"</th></tr>"
        $('#itemDetailsTblBody').append(rowOrderTable);
    }

    clearOrderItem();
    orderIdGanareter++;
    $('#txtOrderID').val("OR00-"+orderIdGanareter);

})

function clearOrderItem() {
    $('#txtItemCode').val("");
    $('#txtItemDescription').val("");
    $('#txtItemPrice').val("");
    $('#txtQTYOnHand').val("");
    $('#txtQty').val("");
    $('#txtOrderID').val("");
    $('#txtDate').val("");
    $('#orderCustomerID').val("");
    $('#orderCustomerName').val("");
    $('#orderCustomerAddress').val("");
    orderAmount=0;
}
