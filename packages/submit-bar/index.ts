import { VantComponent } from '../common/component';

VantComponent({
  classes: [
    'bar-class',
    'price-class',
    'button-class'
  ],

  props: {
    tip: null,
    type: Number,
    price: null,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      value: '¥'
    },
    buttonType: {
      type: String,
      value: 'danger'
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    }
  },

  computed: {
    hasPrice() {
      return typeof this.data.price === 'number';
    },

    priceStr() {
      return (this.data.price / 100).toFixed(2);
    },

    tipStr() {
      const { tip } = this.data;
      return typeof tip === 'string' ? tip : '';
    },

    barClass() {
      const { isIPhoneX, safeAreaInsetBottom } = this.data;
      return this.classNames('van-submit-bar__bar', 'bar-class', {
        'van-submit-bar__bar--safe': safeAreaInsetBottom && isIPhoneX
      });
    }
  },

  methods: {
    onSubmit(event: Weapp.Event) {
      this.$emit('submit', event.detail);
    }
  }
});
