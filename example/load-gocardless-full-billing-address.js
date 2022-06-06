
document.getElementById('credit-card-info').style.display = 'none';
document.getElementById('billing-info').style.display = 'none';
document.getElementById('bank-info').style.display = 'none';
document.getElementById('example-card-numbers').style.display = 'none';

const chargify = new Chargify();

chargify.load({

  // selector where the iframe will be included in the host's HTML http://localhost:4000/example.html(i.e. '#chargify-form')
  // optional if you have a `selector` on each and every field
  selector: '#chargify-form',

  // (i.e. '1a2cdsdn3lkn54lnlkn')
  publicKey: localStorage.getItem("publicKey"),

  // form type (possible values: 'card', 'bank' or 'direct_debit')
  type: 'direct_debit',

  // selector for GoCardless header
  selectorForGoCardlessHeader: '#gocardless-header',

  // selector for GoCardless footer
  selectorForGoCardlessFooter: '#gocardless-footer',

  // selector for adding link to toggle iban or local details (if not present then this will be automatically added after account number)
  // selectorForToggleIbanOrLocalDetails: '#gocardless-toggle-iban-or-local-details',

  // if you want to add your custom styles for GoCardless modal, then set this to true to skip automatically injected css styles
  // customGoCardlessModalStyles: true,

  // selectorForToggleIbanOrLocalDetails: '.cfy-field--bankIban',
  // points to your Chargify site
  serverHost: localStorage.getItem("serverHost"),

  gatewayHandle: localStorage.getItem("gatewayHandle"),

  fields: {
    firstName: {
      selector: '#chargify-form',
      required: true,
    },
    lastName: {
      selector: '#chargify-form',
      required: true,
    },
    address: {
      selector: '#chargify-form',
      required: true,
    },
    address2: {
      selector: '#chargify-form',
    },
    country: {
      selector: '#chargify-form',
    },
    city: {
      selector: '#chargify-form',
      required: true,
    },
    state: {
      selector: '#chargify-form',
      required: true,
    },
    zip: {
      selector: '#chargify-form',
      required: true,
    },
  }
});
