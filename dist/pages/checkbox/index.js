Page({
  data: {
    items: [
      {name: 'default', value: 'checkbox', cls: '', checked: true},
      {name: 'light', value: 'checkbox', cls: 'checkbox-light'},
      {name: 'stable', value: 'checkbox', cls: 'checkbox-stable'},
      {name: 'positive', value: 'checkbox', cls: 'checkbox-positive'},
      {name: 'calm', value: 'checkbox', cls: 'checkbox-calm'},
      {name: 'assertive', value: 'checkbox', cls: 'checkbox-assertive'},
      {name: 'balanced', value: 'checkbox', cls: 'checkbox-balanced'},
      {name: 'energized', value: 'checkbox', cls: 'checkbox-energized'},
      {name: 'royal', value: 'checkbox', cls: 'checkbox-royal'},
      {name: 'dark', value: 'checkbox', cls: 'checkbox-dark'},
    ]
  },
  checkboxChange: function (e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);

      var items = this.data.items, values = e.detail.value;
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
          items[i].checked = false;

          for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
              if(items[i].name == values[j]){
                  items[i].checked = true;
                  break;
              }
          }
      }

      this.setData({
          items: items
      });
  },
})