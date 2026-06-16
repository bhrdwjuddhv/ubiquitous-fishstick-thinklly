import UserTableCell from "./userTable.jsx";

export function UserTable({ users }) {
    return (
        <div className="w-full">

            <div className="flex flex-col gap-3">
                {users.map((user) => (
                    <UserTableCell
                        key={user.login.uuid}
                        user={user}
                    />
                ))}
            </div>

        </div>
    );
}