
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
        * links to 
    ----------------------*/
    
    $('.btn-bar').on('click', function () {
        // $('.btn-bar').removeClass('fas fa-bars').end().addClass('fas fa-times');
        $('.navbar-nav .nav-link').toggleClass('co-gray');
        $('.model-header').slideToggle();
        
    });
    
    
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