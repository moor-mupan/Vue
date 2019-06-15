import Vue from 'vue'
import axios from 'axios'

Vue.prototype._axios = function (type, url, data, success) {
    if (type = 'post') {
        axios.post(url, data)
            .then(res => {
                if (res.data.Status == '0') {
                    success(res)
                    this.$message({
                        type: 'success',
                        message: res.data.Msg
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: res.data.Msg
                    })
                }
            })
    } else {
        axios.get(url, { params: data })
            .then(res => {
                if (res.data.Status == '0') {
                    success(res)
                } else {
                    this.$message({
                        type: 'error',
                        message: res.data.Msg
                    })
                }
            })
    }
}
