import { Outlet } from "react-router";

export default function UserProfileLayout() {

    return (
        <div className="flex flex-col mt-5">
            <h3 className="text-2xl font-medium mb-2">User profile</h3>
            <Outlet />
        </div>
    )
}
