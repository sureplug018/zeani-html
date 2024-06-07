(function ($) {
  "use strict";

  /*-------------------------------------------
        off-canvas-menu
    --------------------------------------------- */

  $(".off-canvas-menu .has-dropdown").prepend(
    '<span class="toggle-btn"><i class="icon"></i></span>'
  );

  $(".off-canvas-menu .has-dropdown > .toggle-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("active");
    $(this).parent().children(".sub-menu").slideToggle();
    $(this).parent().siblings().children(".sub-menu").slideUp();
    $(this).parent().siblings().removeClass("active");
  });

  $(".off-canvas-overlay").on("click", function () {
    $(this).parent().removeClass("active");
    $(".off-canvas-wrap").removeClass("active");
  });
  $(".off-canvas-close").on("click", function () {
    $(".off-canvas-section").removeClass("active");
    $(".off-canvas-wrap").removeClass("active");
  });

  $(".open-menu-bar").on("click", function () {
    $(".off-canvas-section").addClass("active");
    $(".off-canvas-wrap").addClass("active");
  });

  /*-------------------------------------------
        nice select
    --------------------------------------------- */
  if (jQuery(".nice-select-active").length > 0) {
    $(".nice-select-active select").niceSelect();
  }

  //shopping-cart-bar
  $(".shopping-cart").on("click", function () {
    $(".cart-menu-right").addClass("cart-info");
  });
  $(".close-icon").click(function () {
    $(".cart-menu-right").removeClass("cart-info");
  });

  //---------------------------Sticky Header

  let win = $(window);
  let sticky_id = $(".main-header-area");
  win.on("scroll", function () {
    let scroll = win.scrollTop();
    if (scroll < 245) {
      sticky_id.removeClass("sticky-header");
    } else {
      sticky_id.addClass("sticky-header");
    }
  });

  $(window).on("load", function () {
    // makes sure the whole site is loaded

    // -------------------- Site Preloader
    $("#ctn-preloader").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({ overflow: "visible" });
  }); //End On Load Function

  //------------------ scrollupfunc();

  var scrollToTopBtn = $("#scrollToTopBtn");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      scrollToTopBtn.addClass("show");
    } else {
      scrollToTopBtn.removeClass("show");
    }
  });

  scrollToTopBtn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  /*------------------------------------
        Data-Background
    --------------------------------------*/
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background", $(this).attr("data-bg-color"));
  });

  if (jQuery(".odometer").length > 0) {
    $(".odometer").appear(function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }

  if (jQuery(".open-popup-video").length > 0) {
    new VenoBox({
      selector: ".open-popup-video",
      numeration: true,
      infinigall: true,
      share: true,
      spinner: "rotating-plane",
    });
  }

  if (jQuery(".testimonial-slider-active").length > 0) {
    let testimonialSlider = new Swiper(".testimonial-slider-active", {
      // Optional parameters
      slidesPerView: 2,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      spaceBetween: 60,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
      },

      a11y: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
      },
    });
  }

  if (jQuery(".testimonial-slider-active-2").length > 0) {
    let testimonialSlider2 = new Swiper(".testimonial-slider-active-2", {
      // Optional parameters
      slidesPerView: 3,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      spaceBetween: 30,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".testimonial-button-next-2",
        prevEl: ".testimonial-button-prev-2",
      },

      a11y: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }

  if (jQuery(".testimonial-slider-active-3").length > 0) {
    let testimonialSlide3 = new Swiper(".testimonial-slider-active-3", {
      // Optional parameters
      slidesPerView: 1,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      spaceBetween: 30,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination-3",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".testimonial-button-next-3",
        prevEl: ".testimonial-button-prev-3",
      },

      a11y: false,
    });
  }

  if (jQuery(".brand-layout-2").length > 0) {
    let brandlayout2 = new Swiper(".brand-layout-2", {
      // Optional parameters
      slidesPerView: 5,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      a11y: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  }

  if (jQuery(".blog-classic-slider").length > 0) {
    let blogClassicActive = new Swiper(".blog-classic-slider", {
      // Optional parameters
      slidesPerView: 1,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      a11y: false,
      // Navigation arrows
      navigation: {
        nextEl: ".testimonial-button-next-3",
        prevEl: ".testimonial-button-prev-3",
      },
    });
  }

  //product__item__slider
  $(".product__item__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".product__thumb__slider",
  });
  $(".product__thumb__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product__item__slider",
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  /* Cart Plus Minus Js */
  $(".cart-plus-minus").append(
    '<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>'
  );
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  //jquiry-price-slider
  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });

  //jquiry-price-slider
  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });

  AOS.init();
})(jQuery);

document
  .getElementById("choiceOfQualification")
  .addEventListener("change", function () {
    var tradeSelect = document.getElementById("trade");
    var selectedQualification = this.value;

    // Update trade options based on selected qualification

    if (selectedQualification === "ANTC/ANBC") {
      tradeSelect.outerHTML = `
          <select id="trade" style="border: none; background: #f7f7f7; color: #505050; font-size: 16px; font-weight: 400;" class="form-select " aria-label="Small select example">
          <option selected>ANTC/ANBC Trades</option>
          <option value="Agricultural Equipment and Implement Mechanic Works">Agricultural Equipment and Implement Mechanic Works</option>
          <option value="Motor Vehicle Mechanics Work">Motor Vehicle Mechanics Work</option>
          <option value="Electrical Installation & Maintenance Works">Electrical Installation & Maintenance Works</option>
          <option value="Fabrication and Welding">Fabrication and Welding</option>
          <option value="Mechanical Engineering Craft Practice">Mechanical Engineering Craft Practice</option>
          <option value="Electronics Works">Electronics Works</option>
          <option value="Refrigeration and Air-Conditioning Works">Refrigeration and Air-Conditioning Works</option>
          <option value="Vehicle Body Building">Vehicle Body Building</option>
          <option value="Foundry Craft Practice">Foundry Craft Practice</option>
          <option value="Marine Engineering Craft">Marine Engineering Craft</option>
          <option value="Computer Craft Studies">Computer Craft Studies</option>
          <option value="Animal Husbandry">Animal Husbandry</option>
          <option value="Fisheries">Fisheries</option>
          <option value="Photographic Practice">Photographic Practice</option>
          <option value="Bricklaying/Block laying and Concreting">Bricklaying/Block laying and Concreting</option>
          <option value="Carpentry & Joinery">Carpentry & Joinery</option>
          <option value="Furniture Making">Furniture Making</option>
          <option value="Machine Wood Work">Machine Wood Work</option>
          <option value="Painting and decorating">Painting and decorating</option>
          <option value="Plumbing and Pipe-Fitting">Plumbing and Pipe-Fitting</option>
          <option value="Draughtsman ship Craft">Draughtsman ship Craft</option>
          <option value="Men’s Garment Making">Men’s Garment Making</option>
          <option value="Ladies Garment Making">Ladies Garment Making</option>
          <option value="Catering Craft Practice">Catering Craft Practice</option>
          <option value="Leather Goods Manufacture">Leather Goods Manufacture</option>
          <option value="Printing Craft Practice">Printing Craft Practice</option>
          <option value="Textile Trades ">Textile Trades </option>
          <option value="Graphic Arts ">Graphic Arts </option>
          <option value="Ceramics">Ceramics</option>
          <option value="Secretarial Duties">Secretarial Duties</option>
          <option value="Financial Management">Financial Management</option>
          <option value="Salesmanship">Salesmanship</option>
          <option value="Tourism">Tourism</option>
          </select>
        `;
      price.value = "10000"; // Update price for this qualification
    } else if (selectedQualification === "NTC/NBC") {
      tradeSelect.outerHTML = `
          <select id="trade" style="border: none; background: #f7f7f7; color: #505050; font-size: 16px; font-weight: 400;" class="form-select " aria-label="Small select example">
          <option selected>NTC/NBC Trades</option>
          <option value="Agricultural Equipment and Implement Mechanic Works">Agricultural Equipment and Implement Mechanic Works</option>
          <option value="Motor Vehicle Mechanics Work">Motor Vehicle Mechanics Work</option>
          <option value="Electrical Installation & Maintenance Works">Electrical Installation & Maintenance Works</option>
          <option value="Fabrication and Welding">Fabrication and Welding</option>
          <option value="Mechanical Engineering Craft Practice">Mechanical Engineering Craft Practice</option>
          <option value="Electronics Works">Electronics Works</option>
          <option value="Refrigeration and Air-Conditioning Works">Refrigeration and Air-Conditioning Works</option>
          <option value="Vehicle Body Building">Vehicle Body Building</option>
          <option value="Foundry Craft Practice">Foundry Craft Practice</option>
          <option value="Marine Engineering Craft">Marine Engineering Craft</option>
          <option value="Computer Craft Studies">Computer Craft Studies</option>
          <option value="Animal Husbandry">Animal Husbandry</option>
          <option value="Fisheries">Fisheries</option>
          <option value="Photographic Practice">Photographic Practice</option>
          <option value="Bricklaying/Block laying and Concreting">Bricklaying/Block laying and Concreting</option>
          <option value="Carpentry & Joinery">Carpentry & Joinery</option>
          <option value="Furniture Making">Furniture Making</option>
          <option value="Machine Wood Work">Machine Wood Work</option>
          <option value="Painting and decorating">Painting and decorating</option>
          <option value="Plumbing and Pipe-Fitting">Plumbing and Pipe-Fitting</option>
          <option value="Draughtsman ship Craft">Draughtsman ship Craft</option>
          <option value="Men’s Garment Making">Men’s Garment Making</option>
          <option value="Ladies Garment Making">Ladies Garment Making</option>
          <option value="Catering Craft Practice">Catering Craft Practice</option>
          <option value="Leather Goods Manufacture">Leather Goods Manufacture</option>
          <option value="Printing Craft Practice">Printing Craft Practice</option>
          <option value="Textile Trades ">Textile Trades </option>
          <option value="Graphic Arts ">Graphic Arts </option>
          <option value="Ceramics">Ceramics</option>
          <option value="Secretarial Duties">Secretarial Duties</option>
          <option value="Financial Management">Financial Management</option>
          <option value="Salesmanship">Salesmanship</option>
          <option value="Tourism">Tourism</option>
          </select>
        `;
      price.value = "5000"; // Update price for this qualification
    } else if (selectedQualification === "MTC") {
      tradeSelect.outerHTML = `
          <input id="trade" type="text" placeholder="Enter Trade" style="border: none; background: #f7f7f7; color: #505050; font-size: 16px; font-weight: 400;" class="form-select">
        `;
      price.value = "5000"; // Update price for this qualification
    } else if (selectedQualification === "WEAC") {
      tradeSelect.outerHTML = `
            <select id="trade" style="border: none; background: #f7f7f7; color: #505050; font-size: 16px; font-weight: 400;" class="form-select " aria-label="Small select example">
            <option selected>WAEC Trade</option>
            <option value="Electrical Installations and Maintenance">Electrical Installations and Maintenance</option>
            <option value="Winding of Electrical Machines">Winding of Electrical Machines</option>
            <option value="Electronics work">Electronics work</option>
            <option value="Installations, Repairs and Maintenance of Medical equipment">Installations, Repairs and Maintenance of Medical equipment</option>
            <option value="Auto mechanic">Auto mechanic</option>
            <option value="Auto electrical work and Vehicle Computer Diagnosis">Auto electrical work and Vehicle Computer Diagnosis</option>
            <option value="Automobile parts merchandising">Automobile parts merchandising</option>
            <option value="Block laying, bricklaying, and concreting work">Block laying, bricklaying, and concreting work</option>
            <option value="Bees Keeping">Bees Keeping</option>
            <option value="Carpentry and joinery">Carpentry and joinery</option>
            <option value="Catering craft practice">Catering craft practice</option>
            <option value="Web development">Web development</option>
            <option value="Basic computer programming">Basic computer programming</option>
            <option value="Plumbing and pipe fitting">Plumbing and pipe fitting</option>
            <option value="Upholstery">Upholstery</option>
            <option value="Welding and fabrication engineering craft practice">Welding and fabrication engineering craft practice</option>
            <option value="Painting and decorating">Painting and decorating</option>
            <option value="Plumbing craft practice">Plumbing craft practice</option>
            <option value="Leather goods manufacturing and repairs">Leather goods manufacturing and repairs</option>
            <option value="Machine Woodworking">Machine Woodworking</option>
            <option value="GSM phone maintenance and repair">GSM phone maintenance and repair</option>
            <option value="Garment making">Garment making</option>
            <option value="Furniture making">Furniture making</option>
            <option value="Fisheries and Hatchery craft">Fisheries and Hatchery craft</option>
            <option value="Tractor operator">Tractor operator</option>
            <option value="Tractor mechanic">Tractor mechanic</option>
            <option value="Birds and Hatchery craft">Birds and Hatchery craft</option>
            </select>
        `;
      price.value = "5000"; // Update price for this qualification
    } else if (selectedQualification.startsWith("NSQ Level 1")) {
      tradeSelect.outerHTML = `
                <select id="trade" style="border: none; background: #f7f7f7; color: #505050; font-size: 16px; font-weight: 400;" class="form-select " aria-label="Small select example">
                <option selected>NSQ Level 1 Trade</option>
                <option value="Tricycle assembling, repair and Maintenance">Tricycle assembling, repair and Maintenance</option>
                <option value="Electrical Installations and Maintenance">Electrical Installations and Maintenance</option>
                <option value="Winding of Electrical Machines">Winding of Electrical Machines</option>
                <option value="Electronics work">Electronics work</option>
                <option value="Solar work">Solar work</option>
                <option value="Auto mechanic">Auto mechanic</option>
                <option value="Auto electrical work and Vehicle Computer Diagnosis">Auto electrical work and Vehicle Computer Diagnosis</option>
                <option value="Automobile parts merchandising">Automobile parts merchandising</option>
                <option value="Block laying, bricklaying, and concreting work">Block laying, bricklaying, and concreting work</option>
                <option value="Bees Keeping">Bees Keeping</option>
                <option value="Carpentry and joinery">Carpentry and joinery</option>
                <option value="Catering craft practice">Catering craft practice</option>
                <option value="Web development">Web development</option>
                <option value="Basic computer programming">Basic computer programming</option>
                <option value="Plumbing and pipe fitting">Plumbing and pipe fitting</option>
                <option value="Upholstery">Upholstery</option>
                <option value="Welding and fabrication engineering craft practice">Welding and fabrication engineering craft practice</option>
                <option value="Painting and decorating">Painting and decorating</option>
                <option value="Plumbing craft practice">Plumbing craft practice</option>
                <option value="Leather goods manufacturing and repairs">Leather goods manufacturing and repairs</option>
                <option value="Machine Woodworking">Machine Woodworking</option>
                <option value="GSM phone maintenance and repair">GSM phone maintenance and repair</option>
                <option value="Garment making">Garment making</option>
                <option value="Furniture making">Furniture making</option>
                <option value="Fisheries and Hatchery craft">Fisheries and Hatchery craft</option>
                <option value="Tractor operation">Tractor operation</option>
                <option value="Tractor mechanic">Tractor mechanic</option>
                <option value="Birds and Hatchery craft">Birds and Hatchery craft</option>
                <option value="Orthodox traditional Medicine">Orthodox traditional Medicine</option>
                <option value="Tailoring">Tailoring</option>
                <option value="Auto Battery Charging">Auto Battery Charging</option>
                <option value="Camera Work">Camera Work</option>
                <option value="Vehicle Body Upholstery">Vehicle Body Upholstery</option>
                <option value="Vehicle Spray Painting">Vehicle Spray Painting</option>
                <option value="Panel Beating Work">Panel Beating Work</option>
                <option value="Modern tyer service and vulcanizing">Modern tyer service and vulcanizing</option>
                <option value="Auctioneering Practice">Auctioneering Practice</option>
                <option value="Purchasing and Supply">Purchasing and Supply</option>
                <option value="Store Keeping">Store Keeping</option>
                <option value="Agro-food processing practice">Agro-food processing practice</option>
                </select>
        `;
      price.value = "1000"; // Update price for NSQ qualifications
    } else if (selectedQualification.startsWith("NSQ Level 2")) {
      tradeSelect.outerHTML = `
                <select id="trade" style="border: none; background: #f7f7f7; color: #505050; font-size: 16px; font-weight: 400;" class="form-select " aria-label="Small select example">
                <option selected>NSQ Level 2 Trade</option>
                <option value="Tricycle assembling, repair and Maintenance">Tricycle assembling, repair and Maintenance</option>
                <option value="Electrical Installations and Maintenance">Electrical Installations and Maintenance</option>
                <option value="Winding of Electrical Machines">Winding of Electrical Machines</option>
                <option value="Electronics work">Electronics work</option>
                <option value="Solar work">Solar work</option>
                <option value="Auto mechanic">Auto mechanic</option>
                <option value="Auto electrical work and Vehicle Computer Diagnosis">Auto electrical work and Vehicle Computer Diagnosis</option>
                <option value="Automobile parts merchandising">Automobile parts merchandising</option>
                <option value="Block laying, bricklaying, and concreting work">Block laying, bricklaying, and concreting work</option>
                <option value="Bees Keeping">Bees Keeping</option>
                <option value="Carpentry and joinery">Carpentry and joinery</option>
                <option value="Catering craft practice">Catering craft practice</option>
                <option value="Web development">Web development</option>
                <option value="Basic computer programming">Basic computer programming</option>
                <option value="Plumbing and pipe fitting">Plumbing and pipe fitting</option>
                <option value="Upholstery">Upholstery</option>
                <option value="Welding and fabrication engineering craft practice">Welding and fabrication engineering craft practice</option>
                <option value="Painting and decorating">Painting and decorating</option>
                <option value="Plumbing craft practice">Plumbing craft practice</option>
                <option value="Leather goods manufacturing and repairs">Leather goods manufacturing and repairs</option>
                <option value="Machine Woodworking">Machine Woodworking</option>
                <option value="GSM phone maintenance and repair">GSM phone maintenance and repair</option>
                <option value="Garment making">Garment making</option>
                <option value="Furniture making">Furniture making</option>
                <option value="Fisheries and Hatchery craft">Fisheries and Hatchery craft</option>
                <option value="Tractor operation">Tractor operation</option>
                <option value="Tractor mechanic">Tractor mechanic</option>
                <option value="Birds and Hatchery craft">Birds and Hatchery craft</option>
                <option value="Orthodox traditional Medicine">Orthodox traditional Medicine</option>
                <option value="Tailoring">Tailoring</option>
                <option value="Auto Battery Charging">Auto Battery Charging</option>
                <option value="Camera Work">Camera Work</option>
                <option value="Vehicle Body Upholstery">Vehicle Body Upholstery</option>
                <option value="Vehicle Spray Painting">Vehicle Spray Painting</option>
                <option value="Panel Beating Work">Panel Beating Work</option>
                <option value="Modern tyer service and vulcanizing">Modern tyer service and vulcanizing</option>
                <option value="Auctioneering Practice">Auctioneering Practice</option>
                <option value="Purchasing and Supply">Purchasing and Supply</option>
                <option value="Store Keeping">Store Keeping</option>
                <option value="Agro-food processing practice">Agro-food processing practice</option>
                </select>
        `;
      price.value = "3000"; // Update price for NSQ qualifications
    } else if (selectedQualification.startsWith("NSQ Level 3")) {
      tradeSelect.outerHTML = `
                <select id="trade" style="border: none; background: #f7f7f7; color: #505050; font-size: 16px; font-weight: 400;" class="form-select " aria-label="Small select example">
                <option selected>NSQ Level 3 Trade</option>
                <option value="Tricycle assembling, repair and Maintenance">Tricycle assembling, repair and Maintenance</option>
                <option value="Electrical Installations and Maintenance">Electrical Installations and Maintenance</option>
                <option value="Winding of Electrical Machines">Winding of Electrical Machines</option>
                <option value="Electronics work">Electronics work</option>
                <option value="Solar work">Solar work</option>
                <option value="Auto mechanic">Auto mechanic</option>
                <option value="Auto electrical work and Vehicle Computer Diagnosis">Auto electrical work and Vehicle Computer Diagnosis</option>
                <option value="Automobile parts merchandising">Automobile parts merchandising</option>
                <option value="Block laying, bricklaying, and concreting work">Block laying, bricklaying, and concreting work</option>
                <option value="Bees Keeping">Bees Keeping</option>
                <option value="Carpentry and joinery">Carpentry and joinery</option>
                <option value="Catering craft practice">Catering craft practice</option>
                <option value="Web development">Web development</option>
                <option value="Basic computer programming">Basic computer programming</option>
                <option value="Plumbing and pipe fitting">Plumbing and pipe fitting</option>
                <option value="Upholstery">Upholstery</option>
                <option value="Welding and fabrication engineering craft practice">Welding and fabrication engineering craft practice</option>
                <option value="Painting and decorating">Painting and decorating</option>
                <option value="Plumbing craft practice">Plumbing craft practice</option>
                <option value="Leather goods manufacturing and repairs">Leather goods manufacturing and repairs</option>
                <option value="Machine Woodworking">Machine Woodworking</option>
                <option value="GSM phone maintenance and repair">GSM phone maintenance and repair</option>
                <option value="Garment making">Garment making</option>
                <option value="Furniture making">Furniture making</option>
                <option value="Fisheries and Hatchery craft">Fisheries and Hatchery craft</option>
                <option value="Tractor operation">Tractor operation</option>
                <option value="Tractor mechanic">Tractor mechanic</option>
                <option value="Birds and Hatchery craft">Birds and Hatchery craft</option>
                <option value="Orthodox traditional Medicine">Orthodox traditional Medicine</option>
                <option value="Tailoring">Tailoring</option>
                <option value="Auto Battery Charging">Auto Battery Charging</option>
                <option value="Camera Work">Camera Work</option>
                <option value="Vehicle Body Upholstery">Vehicle Body Upholstery</option>
                <option value="Vehicle Spray Painting">Vehicle Spray Painting</option>
                <option value="Panel Beating Work">Panel Beating Work</option>
                <option value="Modern tyer service and vulcanizing">Modern tyer service and vulcanizing</option>
                <option value="Auctioneering Practice">Auctioneering Practice</option>
                <option value="Purchasing and Supply">Purchasing and Supply</option>
                <option value="Store Keeping">Store Keeping</option>
                <option value="Agro-food processing practice">Agro-food processing practice</option>
                </select>
        `;
      price.value = "5000"; // Update price for NSQ qualifications
    } else if (selectedQualification.startsWith("NSQ Level 4")) {
      tradeSelect.outerHTML = `
                <select id="trade" style="border: none; background: #f7f7f7; color: #505050; font-size: 16px; font-weight: 400;" class="form-select " aria-label="Small select example">
                <option selected>NSQ Level 4 Trade</option>
                <option value="Tricycle assembling, repair and Maintenance">Tricycle assembling, repair and Maintenance</option>
                <option value="Electrical Installations and Maintenance">Electrical Installations and Maintenance</option>
                <option value="Winding of Electrical Machines">Winding of Electrical Machines</option>
                <option value="Electronics work">Electronics work</option>
                <option value="Solar work">Solar work</option>
                <option value="Auto mechanic">Auto mechanic</option>
                <option value="Auto electrical work and Vehicle Computer Diagnosis">Auto electrical work and Vehicle Computer Diagnosis</option>
                <option value="Automobile parts merchandising">Automobile parts merchandising</option>
                <option value="Block laying, bricklaying, and concreting work">Block laying, bricklaying, and concreting work</option>
                <option value="Bees Keeping">Bees Keeping</option>
                <option value="Carpentry and joinery">Carpentry and joinery</option>
                <option value="Catering craft practice">Catering craft practice</option>
                <option value="Web development">Web development</option>
                <option value="Basic computer programming">Basic computer programming</option>
                <option value="Plumbing and pipe fitting">Plumbing and pipe fitting</option>
                <option value="Upholstery">Upholstery</option>
                <option value="Welding and fabrication engineering craft practice">Welding and fabrication engineering craft practice</option>
                <option value="Painting and decorating">Painting and decorating</option>
                <option value="Plumbing craft practice">Plumbing craft practice</option>
                <option value="Leather goods manufacturing and repairs">Leather goods manufacturing and repairs</option>
                <option value="Machine Woodworking">Machine Woodworking</option>
                <option value="GSM phone maintenance and repair">GSM phone maintenance and repair</option>
                <option value="Garment making">Garment making</option>
                <option value="Furniture making">Furniture making</option>
                <option value="Fisheries and Hatchery craft">Fisheries and Hatchery craft</option>
                <option value="Tractor operation">Tractor operation</option>
                <option value="Tractor mechanic">Tractor mechanic</option>
                <option value="Birds and Hatchery craft">Birds and Hatchery craft</option>
                <option value="Orthodox traditional Medicine">Orthodox traditional Medicine</option>
                <option value="Tailoring">Tailoring</option>
                <option value="Auto Battery Charging">Auto Battery Charging</option>
                <option value="Camera Work">Camera Work</option>
                <option value="Vehicle Body Upholstery">Vehicle Body Upholstery</option>
                <option value="Vehicle Spray Painting">Vehicle Spray Painting</option>
                <option value="Panel Beating Work">Panel Beating Work</option>
                <option value="Modern tyer service and vulcanizing">Modern tyer service and vulcanizing</option>
                <option value="Auctioneering Practice">Auctioneering Practice</option>
                <option value="Purchasing and Supply">Purchasing and Supply</option>
                <option value="Store Keeping">Store Keeping</option>
                <option value="Agro-food processing practice">Agro-food processing practice</option>
                </select
        `;
      price.value = "10000"; // Update price for NSQ qualifications
    } else if (selectedQualification.startsWith("NSQ Level 5")) {
      tradeSelect.outerHTML = `
                <select id="trade" style="border: none; background: #f7f7f7; color: #505050; font-size: 16px; font-weight: 400;" class="form-select " aria-label="Small select example">
                <option selected>NSQ Level 5 Trade</option>
                <option value="Tricycle assembling, repair and Maintenance">Tricycle assembling, repair and Maintenance</option>
                <option value="Electrical Installations and Maintenance">Electrical Installations and Maintenance</option>
                <option value="Winding of Electrical Machines">Winding of Electrical Machines</option>
                <option value="Electronics work">Electronics work</option>
                <option value="Solar work">Solar work</option>
                <option value="Auto mechanic">Auto mechanic</option>
                <option value="Auto electrical work and Vehicle Computer Diagnosis">Auto electrical work and Vehicle Computer Diagnosis</option>
                <option value="Automobile parts merchandising">Automobile parts merchandising</option>
                <option value="Block laying, bricklaying, and concreting work">Block laying, bricklaying, and concreting work</option>
                <option value="Bees Keeping">Bees Keeping</option>
                <option value="Carpentry and joinery">Carpentry and joinery</option>
                <option value="Catering craft practice">Catering craft practice</option>
                <option value="Web development">Web development</option>
                <option value="Basic computer programming">Basic computer programming</option>
                <option value="Plumbing and pipe fitting">Plumbing and pipe fitting</option>
                <option value="Upholstery">Upholstery</option>
                <option value="Welding and fabrication engineering craft practice">Welding and fabrication engineering craft practice</option>
                <option value="Painting and decorating">Painting and decorating</option>
                <option value="Plumbing craft practice">Plumbing craft practice</option>
                <option value="Leather goods manufacturing and repairs">Leather goods manufacturing and repairs</option>
                <option value="Machine Woodworking">Machine Woodworking</option>
                <option value="GSM phone maintenance and repair">GSM phone maintenance and repair</option>
                <option value="Garment making">Garment making</option>
                <option value="Furniture making">Furniture making</option>
                <option value="Fisheries and Hatchery craft">Fisheries and Hatchery craft</option>
                <option value="Tractor operation">Tractor operation</option>
                <option value="Tractor mechanic">Tractor mechanic</option>
                <option value="Birds and Hatchery craft">Birds and Hatchery craft</option>
                <option value="Orthodox traditional Medicine">Orthodox traditional Medicine</option>
                <option value="Tailoring">Tailoring</option>
                <option value="Auto Battery Charging">Auto Battery Charging</option>
                <option value="Camera Work">Camera Work</option>
                <option value="Vehicle Body Upholstery">Vehicle Body Upholstery</option>
                <option value="Vehicle Spray Painting">Vehicle Spray Painting</option>
                <option value="Panel Beating Work">Panel Beating Work</option>
                <option value="Modern tyer service and vulcanizing">Modern tyer service and vulcanizing</option>
                <option value="Auctioneering Practice">Auctioneering Practice</option>
                <option value="Purchasing and Supply">Purchasing and Supply</option>
                <option value="Store Keeping">Store Keeping</option>
                <option value="Agro-food processing practice">Agro-food processing practice</option>
                </select>
        `;
      price.value = "15000"; // Update price for NSQ qualifications
    } else if (selectedQualification.startsWith("NSQ Level 6")) {
      tradeSelect.outerHTML = `
                <select id="trade" style="border: none; background: #f7f7f7; color: #505050; font-size: 16px; font-weight: 400;" class="form-select " aria-label="Small select example">
                <option selected>NSQ Level 6 Trade</option>
                <option value="Tricycle assembling, repair and Maintenance">Tricycle assembling, repair and Maintenance</option>
                <option value="Electrical Installations and Maintenance">Electrical Installations and Maintenance</option>
                <option value="Winding of Electrical Machines">Winding of Electrical Machines</option>
                <option value="Electronics work">Electronics work</option>
                <option value="Solar work">Solar work</option>
                <option value="Auto mechanic">Auto mechanic</option>
                <option value="Auto electrical work and Vehicle Computer Diagnosis">Auto electrical work and Vehicle Computer Diagnosis</option>
                <option value="Automobile parts merchandising">Automobile parts merchandising</option>
                <option value="Block laying, bricklaying, and concreting work">Block laying, bricklaying, and concreting work</option>
                <option value="Bees Keeping">Bees Keeping</option>
                <option value="Carpentry and joinery">Carpentry and joinery</option>
                <option value="Catering craft practice">Catering craft practice</option>
                <option value="Web development">Web development</option>
                <option value="Basic computer programming">Basic computer programming</option>
                <option value="Plumbing and pipe fitting">Plumbing and pipe fitting</option>
                <option value="Upholstery">Upholstery</option>
                <option value="Welding and fabrication engineering craft practice">Welding and fabrication engineering craft practice</option>
                <option value="Painting and decorating">Painting and decorating</option>
                <option value="Plumbing craft practice">Plumbing craft practice</option>
                <option value="Leather goods manufacturing and repairs">Leather goods manufacturing and repairs</option>
                <option value="Machine Woodworking">Machine Woodworking</option>
                <option value="GSM phone maintenance and repair">GSM phone maintenance and repair</option>
                <option value="Garment making">Garment making</option>
                <option value="Furniture making">Furniture making</option>
                <option value="Fisheries and Hatchery craft">Fisheries and Hatchery craft</option>
                <option value="Tractor operation">Tractor operation</option>
                <option value="Tractor mechanic">Tractor mechanic</option>
                <option value="Birds and Hatchery craft">Birds and Hatchery craft</option>
                <option value="Orthodox traditional Medicine">Orthodox traditional Medicine</option>
                <option value="Tailoring">Tailoring</option>
                <option value="Auto Battery Charging">Auto Battery Charging</option>
                <option value="Camera Work">Camera Work</option>
                <option value="Vehicle Body Upholstery">Vehicle Body Upholstery</option>
                <option value="Vehicle Spray Painting">Vehicle Spray Painting</option>
                <option value="Panel Beating Work">Panel Beating Work</option>
                <option value="Modern tyer service and vulcanizing">Modern tyer service and vulcanizing</option>
                <option value="Auctioneering Practice">Auctioneering Practice</option>
                <option value="Purchasing and Supply">Purchasing and Supply</option>
                <option value="Store Keeping">Store Keeping</option>
                <option value="Agro-food processing practice">Agro-food processing practice</option>
                </select>
        `;
      price.value = "20000"; // Update price for NSQ qualifications
    }
  });
