Page({
    data: {
        items: [
            {name: 'default', cls: ''},
            {name: 'light', cls: 'item-light'},
            {name: 'stable', cls: 'item-stable'},
            {name: 'positive', cls: 'item-positive'},
            {name: 'calm', cls: 'item-calm'},
            {name: 'assertive', cls: 'item-assertive'},
            {name: 'balanced', cls: 'item-balanced'},
            {name: 'energized', cls: 'item-energized'},
            {name: 'royal', cls: 'item-royal'},
            {name: 'dark', cls: 'item-dark'},
        ],
        countries: ["中国", "美国", "英国"],
        countryIndex: 0,
    },
    bindCountryChange: function(e) {
        console.log('picker country 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryIndex: e.detail.value
        })
    },
});