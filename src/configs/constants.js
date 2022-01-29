export const ACTION = {
  RESET_PASSWORD: 'reset-password',
};

export const DATE_FORMAT = 'DD/MM/YYYY';

export const GENDERS = [
  {
    value: 'mr',
    text: 'gender.mr',
  },
  {
    value: 'ms',
    text: 'gender.ms',
  },
]

export const DELIVERY_TYPES = [
  {
    value: 'delivery',
    text: 'deliveryType.delivery',
  },
  {
    value: 'pick-up',
    text: 'deliveryType.pick-up',
  },
]

export const PAYMENT_METHODS = [
  {
    value: 'card',
    text: 'paymentMethod.card',
    available: false,
  },
  {
    value: 'momo',
    text: 'paymentMethod.momo',
    available: false,
  },
  {
    value: 'cod',
    text: 'paymentMethod.cod',
    available: true,
  },
]

export const ORDER_STATUS = {
  Summited: {
    value: 'Summited',
    text: 'orderStatus.submitted',
    color: 'orange',
  },
  Processing: {
    value: 'Processing',
    text: 'orderStatus.processing',
    color: 'cyan',
  },
  Ready: {
    value: 'Ready',
    text: 'orderStatus.ready',
    color: 'green',
  },
  Delivering: {
    value: 'Delivering',
    text: 'orderStatus.delivering',
    color: 'green',
  },
  Completed: {
    value: 'Completed',
    text: 'orderStatus.completed',
    color: 'blue',
  },
  Cancel: {
    value: 'Cancel',
    text: 'orderStatus.cancelled',
    color: 'red',
  },
}
