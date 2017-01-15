Page({
  data: {
    items: [
      {name: 'default', value: 'radio', cls: ''},
      {name: 'light', value: 'radio', cls: 'radio-light'},
      {name: 'stable', value: 'radio', checked: true, cls: 'radio-stable'},
      {name: 'positive', value: 'radio', cls: 'radio-positive'},
      {name: 'calm', value: 'radio', cls: 'radio-calm'},
      {name: 'assertive', value: 'radio', cls: 'radio-assertive'},
      {name: 'balanced', value: 'radio', cls: 'radio-balanced'},
      {name: 'energized', value: 'radio', cls: 'radio-energized'},
      {name: 'royal', value: 'radio', cls: 'radio-royal'},
      {name: 'dark', value: 'radio', cls: 'radio-dark'},
    ]
  },
  radioChange: function (e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value);

      var items = this.data.items, value = e.detail.value;
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
          items[i].checked = false;
          if (items[i].name === value) {
            items[i].checked = true;
          };
      }

      this.setData({
          items: items
      });
  },
})