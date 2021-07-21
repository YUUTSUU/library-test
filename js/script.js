$(".carousel").carousel({
  slides: 4,
  autoPlay: true,
  indicator: true
});

$('[data-toggle=modal]').modal();

$("[data-tabpanel] .tab-item").tab();

$(".accordion-header").accordion();

const name = "Jhon"

$("h2").eq(0).html(`Это предложение именно для вас, ${name}`)