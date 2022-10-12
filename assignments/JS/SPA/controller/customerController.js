
// var s1=new Array();
var customerObj
let upCheck;
let idGenerater=1;

$('#cusID').val("C00-"+idGenerater);

$('#btnAddCustomer').click(function (){


    let cusId = $('#cusID').val();
    let cusName = $('#cusName').val();
    let cusAddress = $('#cusAddress').val();
    let cusSalary = $('#cusSalary').val();

    customerObj= {
        cI: cusId,
        cN: cusName,
        cA: cusAddress,
        cS: cusSalary
    }

    s1.push(customerObj);





    save();
    clearText();
    clickFind();
    doubleClick();
    loadAllCustomerForOption();
    idGenerater++;
    $('#cusID').val("C00-"+idGenerater);

})

function save(){
    $("#tblBody").empty();
    for(var l of s1){
        var row="<tr><th >"+l.cI+"</th><th >"+l.cN+"</th><th >"+l.cA+"</th><th>"+l.cS+"</th></tr>"
        $('#tblCustomer').append(row);
    }
}





function clearText(){
    // $('#cusID').val("");
    $('#cusName').val("");
    $('#cusAddress').val("");
    $('#cusSalary').val("");
}





$('#srcCusID').keyup(function (e){
    let clickKey=e.which;
    if(clickKey === 13){
        for (var s of s1){
            if(s.cI===$('#srcCusID').val()){
                $('#cusID').val(s.cI);
                $('#cusName').val(s.cN);
                $('#cusAddress').val(s.cA);
                $('#cusSalary').val(s.cS);

            }
        }
    }
})




function clickFind(){
    $('#tblBody>tr').click(function(){
        $('#cusID').val($(this,'#tblBody>tr').children(':nth-child(1)').text());
        $('#cusName').val($(this,'#tblBody>tr').children(':nth-child(2)').text());
        $('#cusAddress').val($(this,'#tblBody>tr').children(':nth-child(3)').text());
        $('#cusSalary').val($(this,'#tblBody>tr').children(':nth-child(4)').text());

    })
}


$('#btnUpdateCustomer').click(function (){
    var updateId=$('#cusID').val();
    var updateName=$('#cusName').val();
    var updateAddress=$('#cusAddress').val();
    var updateSalary=$('#cusSalary').val();



    var updateRow="<tr><th >"+updateId+"</th><th >"+updateName+"</th><th >"+updateAddress+"</th><th>"+updateSalary+"</th></tr>"
    $('#tblCustomer').append(updateRow);

})



function doubleClick(){
    $('#tblBody>tr').dblclick(function (){
        clearText();
        // $('#cusID').val($(this).remove());
        $(this).remove();
    })
}

// --------------------------enter eka gahuwama yatata yana seen eka--------------------------------------
$("#cusID,#cusName,#cusAddress,#cusSalary").keydown(function (event){
    if(event.which === 9){
        event.preventDefault();
    }
})

$('#cusID').keyup(function (event){
    let catchEvent=event.which;
    if(catchEvent === 13){
        $('#cusName').focus();
    }
})

$('#cusName').keyup(function (event){
    let catchEvent=event.which;
    if(catchEvent === 13){
        $('#cusAddress').focus();
    }
})

$('#cusAddress').keyup(function (event){
    let catchEvent=event.which;
    if(catchEvent === 13){
        $('#cusSalary').focus();
    }
})

$('#cusSalary').keyup(function (event){
    let catchEvent=event.which;
    if(catchEvent === 13){
        // ------------------------------------------------------------------------------
        let cusId = $('#cusID').val();
        let cusName = $('#cusName').val();
        let cusAddress = $('#cusAddress').val();
        let cusSalary = $('#cusSalary').val();

        customerObj= {
            cI: cusId,
            cN: cusName,
            cA: cusAddress,
            cS: cusSalary
        }

        s1.push(customerObj);


        // ------------------------------------------------------------------------------

        var rowEnter="<tr><th >"+$('#cusID').val()+"</th><th >"+$('#cusName').val()+"</th><th >"+$('#cusAddress').val()+"</th><th>"+$('#cusSalary').val()+"</th></tr>"
        $('#tblCustomer').append(rowEnter);
       clearText();
        $('#cusName').focus();
        clickFind();
        doubleClick();
        loadAllCustomerForOption();
        idGenerater++;
        $('#cusID').val("C00-"+idGenerater);
    }
})

// ===============================Delete Customer===================================================
$('#btnDeleteCustomer').click(function (){
    var masseage=confirm('are you wont delete this customer');
    if (masseage===true){
        for (k=0;k<s1.length;k++){
            let deleteCheck=s1[k];
            if ($('#cusID').val() === deleteCheck.cI){
                s1.splice(k,1);
                $('#tblBody').empty();


                for(var l of s1){
                    var row="<tr><th >"+l.cI+"</th><th >"+l.cN+"</th><th >"+l.cA+"</th><th>"+l.cS+"</th></tr>"
                    $('#tblCustomer').append(row);
                }

                $('#cusID').val("");
                $('#cusName').val("");
                $('#cusAddress').val("");
                $('#cusSalary').val("");

                $('#tblBody>tr').click(function(){
                    $('#cusID').val($(this,'#tblBody>tr').children(':nth-child(1)').text());
                    $('#cusName').val($(this,'#tblBody>tr').children(':nth-child(2)').text());
                    $('#cusAddress').val($(this,'#tblBody>tr').children(':nth-child(3)').text());
                    $('#cusSalary').val($(this,'#tblBody>tr').children(':nth-child(4)').text());
                })
            }
        }
        $('#cusID').val("C00-"+idGenerater);
        $('#cusName').focus();
    }


})


// ======================================update customer=============================================

$('#btnUpdateCustomer').click(function (){
    var updateId=$('#cusID').val();
    var updateName=$('#cusName').val();
    var updateAddress=$('#cusAddress').val();
    var updateSalary=$('#cusSalary').val();

    for (cu=0;cu<s1.length;cu++){
        let checkUpdate=s1[cu];
        if (checkUpdate.cI === updateId){

            checkUpdate.cI=updateId;
            checkUpdate.cN=updateName;
            checkUpdate.cA=updateAddress;
            checkUpdate.cS=updateSalary;

            $('#tblBody').empty();


            for(var l of s1){
                var row="<tr><th >"+l.cI+"</th><th >"+l.cN+"</th><th >"+l.cA+"</th><th>"+l.cS+"</th></tr>"
                $('#tblCustomer').append(row);
            }

            $('#cusID').val("");
            $('#cusName').val("");
            $('#cusAddress').val("");
            $('#cusSalary').val("");

            $('#tblBody>tr').click(function(){
                $('#cusID').val($(this,'#tblBody>tr').children(':nth-child(1)').text());
                $('#cusName').val($(this,'#tblBody>tr').children(':nth-child(2)').text());
                $('#cusAddress').val($(this,'#tblBody>tr').children(':nth-child(3)').text());
                $('#cusSalary').val($(this,'#tblBody>tr').children(':nth-child(4)').text());
            })

        }

        $('#cusID').val("C00-"+idGenerater);
        $('#cusName').focus();

    }


})

// ==========================================regex===========================================================

$('#cusName').on('keyup', function (e) {
    if (/^[A-z]{2,20}$/.test($('#cusName').val())) {
        $('#cusName').css('border', '3px solid green')
        $('#cusNameTxtLbl').text('')
        if (e.key === "Enter") {
            $('#cusAddress').focus()
        }
    } else {
        $('#cusName').css('border', '3px solid red');
        $('#cusNameTxtLbl').text("Your input can't be validated, Ex - Dakshina  ")
    }
})

$('#cusAddress').on('keyup', function (e) {
    if (/^[A-z]{2,30}$/.test($('#cusAddress').val())) {
        $('#cusAddress').css('border', '3px solid green')
        $('#cusAddressTxtLbl').text('')
        if (e.key === "Enter") {
            $('#cusSalary').focus()
        }
    } else {
        $('#cusAddress').css('border', '3px solid red');
        $('#cusAddressTxtLbl').text("Your input can't be validated, Ex - Galle  ")
    }
})

$('#cusSalary').on('keyup', function (e) {
    if (/^[0-9]{5,10}$/.test($('#cusSalary').val())) {
        $('#cusSalary').css('border', '3px solid green')
        $('#cusSalaryTxtLbl').text('')
        if (e.key === "Enter") {
            $('#cusName').focus()
        }
    } else {
        $('#cusSalary').css('border', '3px solid red');
        $('#cusSalaryTxtLbl').text("Your input can't be validated, Ex - 50000  ")
    }
})






