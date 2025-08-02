import { Outlet } from "react-router";

export default function UserProfileLayout() {

    return (
        <div className="flex flex-col mt-5">
            <Outlet />
        </div>
    )
}
