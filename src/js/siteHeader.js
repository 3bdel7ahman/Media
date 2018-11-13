
$(function () {

    'use strict';


        /*--------------------
        * Site Search
    ----------------------*/


    $('.btn-search').on('click', function () {
        $('.form-inline .form-control').toggleClass('overInput');
        $(this).toggleClass('formBtn');
    });

        /*--------------------
        * Dropdown
    ----------------------*/

    $('.btn-bar').on('click', function () {
        // $('.btn-bar').removeClass('fas fa-bars').end().addClass('fas fa-times');
        $('.navbar-nav .nav-link').toggleClass('co-gray');
        $('.model-header').slideToggle();

    });


    /*--------------------
    * signIn / signUp
----------------------*/

    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // signUp

    // Get the modal
    var modal = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


        /*--------------------
        * Header Fixed
    ----------------------*/

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 1) {
           $('.navbar').addClass('fixed-header');
        }
        else {
           $('.navbar').removeClass('fixed-header');
        }
    });


});
