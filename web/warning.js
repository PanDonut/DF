const warningTitleCSS = 'color:red; font-family: "Arial Black", Gadget, sans-serif; font-size: 60px; letter-spacing: 6px; word-spacing: -5px; font-weight: 700; text-decoration: overline solid rgb(68, 68, 68); font-style: normal; font-variant: small-caps; text-transform: uppercase;';

const warningDescCSS = 'font-size: 20px;';

const infoDescCSS = 'color:gray; font-family: "Arial Black", Gadget, sans-serif; font-size: 16px; font-weight: 100; font-style: normal;';

console.warn('%cUwaga!', warningTitleCSS);
      console.log("%cJeżeli ktoś powiedział Ci żeby coś tu wkleić to na 99.9% próbuje Cię oszukać. Wklejając tu coś ktoś może uzyskać dostęp do twojego konta lub urządzenia.", warningDescCSS);
      console.log("%cJeżeli doskonale wiesz co robisz dołącz do TheDuck Studios 😃", infoDescCSS);

window.setInterval(function() {
      console.warn('%cUwaga!', warningTitleCSS);
      console.log("%cJeżeli ktoś powiedział Ci żeby coś tu wkleić to na 99.9% próbuje Cię oszukać. Wklejając tu coś ktoś może uzyskać dostęp do twojego konta lub urządzenia.", warningDescCSS);
      console.log("%cJeżeli doskonale wiesz co robisz dołącz do TheDuck Studios 😃", infoDescCSS);
}, 20000); // 20000 milisekund (20 sekund)
