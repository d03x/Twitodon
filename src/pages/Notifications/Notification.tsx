import AppLayout from "@/components/Layout/AppLayout";
import { useAppDispatch } from "@/hooks";
import { SET_PAGE_LOADING } from "@/stores/slices/app/appSlice";
import { RootState } from "@/stores/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router";

export default function Notification() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [notification, setNotification] = useState<any>();
    useEffect(() => {
        dispatch(SET_PAGE_LOADING(true));
        fetch('https://jsonplaceholder.typicode.com/photos').then(async (data) => {
            setNotification(await data.json())
            dispatch(SET_PAGE_LOADING(false));
        });
    }, [navigate])

    const coutner = useSelector((state: RootState) => state.counter.value)
    const app = useSelector((state: RootState) => state.app)

    return <AppLayout>
        {app.pageLoading ? "LOADING" : "TIDAK LOAIDNG"}
        <h1>{JSON.stringify(notification)}</h1>
        <div>
            {coutner}
        </div>
    </AppLayout>
}