function success(data) {
    return Promise.resolve({
        code: 0,
        data,
    })
}

function error(msg) {
    return Promise.resolve({
        code: -1,
        msg
    })
}

export const home = () => {
    return success([])
}
export const list = () => success({
    "page": 1,
    "pages": 1,
    "list": []
})

export const detail = ({vod_id}) => {
    return success({
    })
}
export const search = () => success({
    "page": 1,
    "pages": 1,
    "list": [
    ]
})

export const play = ({url}) => success(url)