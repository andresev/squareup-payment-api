import { Client, Environment, ApiError } from 'square';

const { paymentsApi, locationsApi, catalogApi, customersApi, ordersApi } =
  new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: Environment.Sandbox,
  });

async function getLocations() {
  try {
    let listLocationsResponse = await locationsApi.listLocations();

    let locations = listLocationsResponse.result.locations;

    locations.forEach(function (location) {
      console.log(
        location.id +
          ': ' +
          location.name +
          ', ' +
          location.address.addressLine1 +
          ', ' +
          location.address.locality
      );
    });
  } catch (error) {
    if (error instanceof ApiError) {
      error.result.errors.forEach(function (e) {
        console.log(e.category);
        console.log(e.code);
        console.log(e.detail);
      });
    } else {
      console.log('Unexpected error occurred: ', error);
    }
  }
}

async function getListItems() {
  try {
    const response = await ordersApi.createOrder({
      order: {
        locationId: '{LOCATION_ID}',
        lineItems: [
          {
            quantity: '1',
            catalogObjectId: '{ITEM_VARIATION_ID}',
            modifiers: [
              {
                catalogObjectId: '{MODIFIER_ID}',
                quantity: '1',
              },
            ],
          },
        ],
      },
      idempotencyKey: '{UNIQUE_KEY}',
    });

    console.log(response.result);
  } catch (error) {
    console.log(error);
  }
}

getLocations();
