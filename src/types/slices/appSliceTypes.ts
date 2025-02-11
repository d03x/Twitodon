export interface initalStateAppInterface {
    loading: boolean,
    pageLoading: boolean,
    globalMessage?: string,
    globalNotification?: string,
}
export interface PageLoadingActionInterface{
    payload:boolean
}