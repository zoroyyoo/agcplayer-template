
function success<T>(data: T) {
    return Promise.resolve({
        code: 0,
        data,
    })
}

function error(msg: string) {
    return Promise.resolve({
        code: -1,
        msg
    })
}

export const home = async () => success([])

export const list = (type_id: string, page: number = 1) => success({
    "page": 1,
    "pages": 1,
    "list": []
})
export const search = (key_word: string, page: number = 1) => success({
    "page": 1,
    "pages": 1,
    "list": []
})

export const detail = async ({ vod_id}: Record<string, any> & { vod_id: string}) => success({})

export const play = ({url}: Record<string, any> & { url: string}) => success(url)
