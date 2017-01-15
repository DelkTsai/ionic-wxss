Page({
    data: {
        colors: ["bar-default", "bar-light", "bar-stable", 'bar-positive', 'bar-calm', 'bar-assertive', 'bar-balanced', 'bar-energized', 'bar-royal', 'bar-dark'],
        index: 0,
    },
    bindChange: function(e) {
        console.log('picker 发生选择改变，携带值为', e.detail.value);

        this.setData({
            index: e.detail.value
        })
    },
});