// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// values (numbers, text, date)
// obojects
// function
// operation

$(function () { // Ready function 

    $('#btnsubmit').click(function () {
        
        //make variable that keep the order
        var firstname = $('#firstname').val(); 
        var lastname = $('#lastname').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var address = $('#address').val();
        var zipcode = $('#zipcode').val();
        var city = $('#city').val();
        var state = $('#state').val();

        var ccname = $('#cc-name').val();
        var ccnumber = $('#cc-number').val();
        var ccexpiration = $('#cc-expiration').val();
        var ccccv = $('#cc-ccv').val();

        var bariis = $('#bariis').prop('checked');
        var hilib = $('#hilib').is(':checked');
        var sanbuus = $('#sanbuus').prop('checked');
        var shah = $('#shah').prop('checked');
        var baasto = $('#baasto').prop('checked');
        var chicken = $('#chicken').prop('checked');



        //The price of the order is ready

        var prices = {
            Bariis: 8,
            Hilib: 6,
            Sanbuus: 3,
            Shaah: 1.5,
            Baasto: 7,
            Checkin: 6
        };

        
        //Write the order on the recieipt

        qorDalabka(firstname, lastname, phone, email, address, zipcode, city, state);
        

        var foodordered = ' ';
        var total = 0;

        if (bariis === true) {
            foodordered = 'bariis ';
            total = total + prices.Bariis;
        }

        if (hilib === true) {
            foodordered += ' Hilib ';
            total = total + prices.Hilib;
        }

        if (sanbuus === true) {
            foodordered += 'sanbuus ';
            total = total + prices.Sanbuus;
        }

        if (shah === true) {
            foodordered += 'shah ';
            total = total + prices.Shaah;
        }

        if (baasto === true) {
            foodordered += 'baasto ';
            total = total + prices.Baasto;
        }

        if (chicken === true) {
            foodordered += 'chicken ';
            total = total + prices.Checkin;
        }



        var discount = $('#discount').val();

        if (discount && total) {
            if (total - discount >= 0) {
                total = total - discount;
            } else {
                alert('Fadlan lamo ogalo discount ka waynaado totalka');
                $('#discount').val('');
            }
        } 


        food(foodordered, total);
        


        

        //If there is a discount minus the total of the discount


    });


});


function qorDalabka(firstname, lastname, phone, email, address, zipcode, city, state ) {
    $('#customerName').text(firstname + ' ' + lastname);
    $('#customerPhone').text(phone);
    $('#customerEmail').text(email);
    $('#customerAddress').text(address);
    $('#customerZipCode').text(zipcode);
    $('#customerCity').text(city);
    $('#customerState').text(state);
}

function food(foodordered, total) {
    $('#customerOrder').text(foodordered);
    $('#totalCost').text('$' + total);
}